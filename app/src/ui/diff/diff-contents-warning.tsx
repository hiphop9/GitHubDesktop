import React from 'react'
import { Octicon } from '../octicons'
import * as octicons from '../octicons/octicons.generated'
import { LinkButton } from '../lib/link-button'
import { ITextDiff, LineEndingsChange } from '../../models/diff'
import { getCurrentLanguage } from '../../lib/i18n'

enum DiffContentsWarningType {
  UnicodeBidiCharacters,
  LineEndingsChange,
}

type DiffContentsWarningItem =
  | {
      readonly type: DiffContentsWarningType.UnicodeBidiCharacters
    }
  | {
      readonly type: DiffContentsWarningType.LineEndingsChange
      readonly lineEndingsChange: LineEndingsChange
    }

interface IDiffContentsWarningProps {
  readonly diff: ITextDiff
}

export class DiffContentsWarning extends React.Component<IDiffContentsWarningProps> {
  public render() {
    const items = this.getTextDiffWarningItems()

    if (items.length === 0) {
      return null
    }

    return (
      <div className="diff-contents-warning-container">
        {items.map((item, i) => (
          <div className="diff-contents-warning" key={i}>
            <Octicon symbol={octicons.alert} />
            {this.getWarningMessageForItem(item)}
          </div>
        ))}
      </div>
    )
  }

  private getTextDiffWarningItems(): ReadonlyArray<DiffContentsWarningItem> {
    const items = new Array<DiffContentsWarningItem>()
    const { diff } = this.props

    if (diff.hasHiddenBidiChars) {
      items.push({
        type: DiffContentsWarningType.UnicodeBidiCharacters,
      })
    }

    if (diff.lineEndingsChange) {
      items.push({
        type: DiffContentsWarningType.LineEndingsChange,
        lineEndingsChange: diff.lineEndingsChange,
      })
    }

    return items
  }

  private getWarningMessageForItem(item: DiffContentsWarningItem) {
    const ko = getCurrentLanguage() === 'ko'
    switch (item.type) {
      case DiffContentsWarningType.UnicodeBidiCharacters:
        return ko ? (
          <>
            이 diff에는 아래에 표시된 것과 다르게 해석되거나 컴파일될 수 있는
            양방향 유니코드 텍스트가 포함되어 있습니다. 검토하려면 숨겨진 유니코드
            문자를 표시하는 편집기에서 파일을 여세요.{' '}
            <LinkButton uri="https://github.co/hiddenchars">
              양방향 유니코드 문자에 대해 자세히 알아보기
            </LinkButton>
          </>
        ) : (
          <>
            This diff contains bidirectional Unicode text that may be
            interpreted or compiled differently than what appears below. To
            review, open the file in an editor that reveals hidden Unicode
            characters.{' '}
            <LinkButton uri="https://github.co/hiddenchars">
              Learn more about bidirectional Unicode characters
            </LinkButton>
          </>
        )

      case DiffContentsWarningType.LineEndingsChange:
        const { lineEndingsChange } = item
        return ko ? (
          <>
            이 파일은 '{lineEndingsChange.from}' 줄바꿈을 사용하지만,{' '}
            <LinkButton uri="https://docs.github.com/get-started/git-basics/configuring-git-to-handle-line-endings">
              Git이 변환하도록 설정되어 있어
            </LinkButton>{' '}
            다음에 파일을 체크아웃할 때 '{lineEndingsChange.to}'(으)로 변환됩니다.
          </>
        ) : (
          <>
            This file uses '{lineEndingsChange.from}' line endings, but{' '}
            <LinkButton uri="https://docs.github.com/get-started/git-basics/configuring-git-to-handle-line-endings">
              Git is configured to convert them
            </LinkButton>{' '}
            to '{lineEndingsChange.to}' the next time the file is checked out.
          </>
        )
    }
  }
}
