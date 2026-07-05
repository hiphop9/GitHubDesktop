import * as React from 'react'
import { Checkbox, CheckboxValue } from '../lib/checkbox'
import { Dialog, DialogContent, DialogFooter } from '../dialog'
import { Ref } from '../lib/ref'
import { Repository } from '../../models/repository'
import { TrashNameLabel } from '../lib/context-menu'
import { OkCancelButtonGroup } from '../dialog/ok-cancel-button-group'
import { tr, getCurrentLanguage } from '../../lib/i18n'

interface IConfirmRemoveRepositoryProps {
  /** The repository to be removed */
  readonly repository: Repository

  /** The action to execute when the user confirms */
  readonly onConfirmation: (
    repo: Repository,
    deleteRepoFromDisk: boolean
  ) => Promise<void>

  /** The action to execute when the user cancels */
  readonly onDismissed: () => void
}

interface IConfirmRemoveRepositoryState {
  readonly deleteRepoFromDisk: boolean
  readonly isRemovingRepository: boolean
}

export class ConfirmRemoveRepository extends React.Component<
  IConfirmRemoveRepositoryProps,
  IConfirmRemoveRepositoryState
> {
  public constructor(props: IConfirmRemoveRepositoryProps) {
    super(props)

    this.state = {
      deleteRepoFromDisk: false,
      isRemovingRepository: false,
    }
  }

  private onSubmit = async () => {
    this.setState({ isRemovingRepository: true })

    await this.props.onConfirmation(
      this.props.repository,
      this.state.deleteRepoFromDisk
    )

    this.props.onDismissed()
  }

  public render() {
    const isRemovingRepository = this.state.isRemovingRepository

    return (
      <Dialog
        id="confirm-remove-repository"
        key="remove-repository-confirmation"
        type="warning"
        title={tr(__DARWIN__ ? 'Remove Repository' : 'Remove repository')}
        dismissDisabled={isRemovingRepository}
        loading={isRemovingRepository}
        disabled={isRemovingRepository}
        onDismissed={this.props.onDismissed}
        onSubmit={this.onSubmit}
      >
        <DialogContent>
          <p>
            {getCurrentLanguage() === 'ko' ? (
              <>
                GitHub Desktop에서 저장소 "{this.props.repository.name}"을(를)
                제거하시겠습니까?
              </>
            ) : (
              <>
                Are you sure you want to remove the repository "
                {this.props.repository.name}" from GitHub Desktop?
              </>
            )}
          </p>
          <div className="description">
            <p>{tr('The repository will be removed from GitHub Desktop:')}</p>
            <p>
              <Ref>{this.props.repository.path}</Ref>
            </p>
          </div>

          <div>
            <Checkbox
              label={
                getCurrentLanguage() === 'ko'
                  ? `이 저장소를 ${tr(TrashNameLabel)}(으)로도 이동`
                  : 'Also move this repository to ' + TrashNameLabel
              }
              value={
                this.state.deleteRepoFromDisk
                  ? CheckboxValue.On
                  : CheckboxValue.Off
              }
              onChange={this.onConfirmRepositoryDeletion}
            />
          </div>
        </DialogContent>
        <DialogFooter>
          <OkCancelButtonGroup destructive={true} okButtonText={tr('Remove')} />
        </DialogFooter>
      </Dialog>
    )
  }

  private onConfirmRepositoryDeletion = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const value = event.currentTarget.checked

    this.setState({ deleteRepoFromDisk: value })
  }
}
