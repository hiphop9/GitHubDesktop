import * as React from 'react'
import { encodePathAsUrl } from '../../lib/path'
import { Ref } from '../lib/ref'
import { LinkButton } from '../lib/link-button'
import { tr, getCurrentLanguage } from '../../lib/i18n'

const BlankSlateImage = encodePathAsUrl(
  __dirname,
  'static/empty-no-pull-requests.svg'
)

interface INoPullRequestsProps {
  /** The name of the repository. */
  readonly repositoryName: string

  /** Is the default branch currently checked out? */
  readonly isOnDefaultBranch: boolean

  /** Is this component being rendered due to a search? */
  readonly isSearch: boolean

  /* Called when the user wants to create a new branch. */
  readonly onCreateBranch: () => void

  /** Called when the user wants to create a pull request. */
  readonly onCreatePullRequest: () => void

  /** Are we currently loading pull requests? */
  readonly isLoadingPullRequests: boolean
}

/** The placeholder for when there are no open pull requests. */
export class NoPullRequests extends React.Component<INoPullRequestsProps, {}> {
  public render() {
    return (
      <div className="no-pull-requests">
        <img src={BlankSlateImage} className="blankslate-image" alt="" />
        {this.renderTitle()}
        {this.renderCallToAction()}
      </div>
    )
  }

  private renderTitle() {
    if (this.props.isSearch) {
      return (
        <div className="title">
          {tr("Sorry, I can't find that pull request!")}
        </div>
      )
    } else if (this.props.isLoadingPullRequests) {
      return <div className="title">{tr('Hang tight')}</div>
    } else {
      return (
        <div>
          <div className="title">{tr("You're all set!")}</div>
          <div className="no-prs">
            {getCurrentLanguage() === 'ko' ? (
              <>
                <Ref>{this.props.repositoryName}</Ref>에 열린 풀 리퀘스트가
                없습니다
              </>
            ) : (
              <>
                No open pull requests in{' '}
                <Ref>{this.props.repositoryName}</Ref>
              </>
            )}
          </div>
        </div>
      )
    }
  }

  private renderCallToAction() {
    if (this.props.isLoadingPullRequests) {
      return (
        <div className="call-to-action">
          {tr('Loading pull requests as fast as I can!')}
        </div>
      )
    }

    const ko = getCurrentLanguage() === 'ko'

    if (this.props.isOnDefaultBranch) {
      return (
        <div className="call-to-action">
          {ko ? (
            <>
              <LinkButton onClick={this.props.onCreateBranch}>
                새 브랜치를 만들어
              </LinkButton>{' '}
              다음 프로젝트를 시작해 보시겠어요?
            </>
          ) : (
            <>
              Would you like to{' '}
              <LinkButton onClick={this.props.onCreateBranch}>
                create a new branch
              </LinkButton>{' '}
              and get going on your next project?
            </>
          )}
        </div>
      )
    } else {
      return (
        <div className="call-to-action">
          {ko ? (
            <>
              현재 브랜치에서{' '}
              <LinkButton onClick={this.props.onCreatePullRequest}>
                풀 리퀘스트를 만들어
              </LinkButton>{' '}
              보시겠어요?
            </>
          ) : (
            <>
              Would you like to{' '}
              <LinkButton onClick={this.props.onCreatePullRequest}>
                create a pull request
              </LinkButton>{' '}
              from the current branch?
            </>
          )}
        </div>
      )
    }
  }
}
