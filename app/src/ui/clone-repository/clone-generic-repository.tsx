import * as React from 'react'
import { TextBox } from '../lib/text-box'
import { Button } from '../lib/button'
import { Row } from '../lib/row'
import { DialogContent } from '../dialog'
import { Ref } from '../lib/ref'
import { tr } from '../../lib/i18n'

interface ICloneGenericRepositoryProps {
  /** The URL to clone. */
  readonly url: string

  /** The path to which the repository should be cloned. */
  readonly path: string

  /** Called when the destination path changes. */
  readonly onPathChanged: (path: string) => void

  /** Called when the URL to clone changes. */
  readonly onUrlChanged: (url: string) => void

  /**
   * Called when the user should be prompted to choose a directory to clone to.
   */
  readonly onChooseDirectory: () => Promise<string | undefined>
}

/** The component for cloning a repository. */
export class CloneGenericRepository extends React.Component<
  ICloneGenericRepositoryProps,
  {}
> {
  public render() {
    return (
      <DialogContent className="clone-generic-repository-content">
        <Row>
          <TextBox
            placeholder={tr('URL or username/repository')}
            value={this.props.url}
            onValueChanged={this.onUrlChanged}
            autoFocus={true}
            label={
              <div className="clone-url-textbox-label">
                <p>{tr('Repository URL or GitHub username and repository')}</p>
                <p>
                  (<Ref>hubot/cool-repo</Ref>)
                </p>
              </div>
            }
          />
        </Row>

        <Row>
          <TextBox
            value={this.props.path}
            label={tr(__DARWIN__ ? 'Local Path' : 'Local path')}
            placeholder={tr('repository path')}
            onValueChanged={this.props.onPathChanged}
          />
          <Button onClick={this.props.onChooseDirectory}>{tr('Choose…')}</Button>
        </Row>
      </DialogContent>
    )
  }

  private onUrlChanged = (url: string) => {
    this.props.onUrlChanged(url)
  }
}
