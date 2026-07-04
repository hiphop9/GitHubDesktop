import { Repository } from '../../models/repository'
import { IMenuItem } from '../../lib/menu-item'
import { Repositoryish } from './group-repositories'
import { clipboard } from 'electron'
import {
  RevealInFileManagerLabel,
  DefaultEditorLabel,
  DefaultShellLabel,
} from '../lib/context-menu'
import { tr, getCurrentLanguage } from '../../lib/i18n'

interface IRepositoryListItemContextMenuConfig {
  repository: Repositoryish
  shellLabel: string | undefined
  externalEditorLabel: string | undefined
  askForConfirmationOnRemoveRepository: boolean
  onViewOnGitHub: (repository: Repositoryish) => void
  onOpenInShell: (repository: Repositoryish) => void
  onShowRepository: (repository: Repositoryish) => void
  onOpenInExternalEditor: (repository: Repositoryish) => void
  onRemoveRepository: (repository: Repositoryish) => void
  onChangeRepositoryAlias: (repository: Repository) => void
  onRemoveRepositoryAlias: (repository: Repository) => void
  onCreateWorktree?: (repository: Repository) => void
  onShowWorktrees?: (repository: Repository) => void
}

export const generateRepositoryListContextMenu = (
  config: IRepositoryListItemContextMenuConfig
) => {
  const { repository } = config
  const missing = repository instanceof Repository && repository.missing
  const github =
    repository instanceof Repository && repository.gitHubRepository != null
  const ko = getCurrentLanguage() === 'ko'
  const openInExternalEditor = config.externalEditorLabel
    ? ko
      ? `${config.externalEditorLabel}에서 열기`
      : `Open in ${config.externalEditorLabel}`
    : tr(DefaultEditorLabel)
  const openInShell = config.shellLabel
    ? ko
      ? `${config.shellLabel}에서 열기`
      : `Open in ${config.shellLabel}`
    : tr(DefaultShellLabel)

  const items: ReadonlyArray<IMenuItem> = [
    ...buildAliasMenuItems(config),
    ...buildWorktreeMenuItems(config),
    {
      label: tr(__DARWIN__ ? 'Copy Repo Name' : 'Copy repo name'),
      action: () => clipboard.writeText(repository.name),
    },
    {
      label: tr(__DARWIN__ ? 'Copy Repo Path' : 'Copy repo path'),
      action: () => clipboard.writeText(repository.path),
    },
    { type: 'separator' },
    {
      label: tr('View on GitHub'),
      action: () => config.onViewOnGitHub(repository),
      enabled: github,
    },
    {
      label: openInShell,
      action: () => config.onOpenInShell(repository),
      enabled: !missing,
    },
    {
      label: tr(RevealInFileManagerLabel),
      action: () => config.onShowRepository(repository),
      enabled: !missing,
    },
    {
      label: openInExternalEditor,
      action: () => config.onOpenInExternalEditor(repository),
      enabled: !missing,
    },
    { type: 'separator' },
    {
      label: tr(
        config.askForConfirmationOnRemoveRepository ? 'Remove…' : 'Remove'
      ),
      action: () => config.onRemoveRepository(repository),
    },
  ]

  return items
}

const buildAliasMenuItems = (
  config: IRepositoryListItemContextMenuConfig
): ReadonlyArray<IMenuItem> => {
  const { repository } = config

  if (!(repository instanceof Repository)) {
    return []
  }

  const verb = repository.alias == null ? 'Create' : 'Change'
  const items: Array<IMenuItem> = [
    {
      label: tr(__DARWIN__ ? `${verb} Alias` : `${verb} alias`),
      action: () => config.onChangeRepositoryAlias(repository),
    },
  ]

  if (repository.alias !== null) {
    items.push({
      label: tr(__DARWIN__ ? 'Remove Alias' : 'Remove alias'),
      action: () => config.onRemoveRepositoryAlias(repository),
    })
  }

  return items
}

const buildWorktreeMenuItems = (
  config: IRepositoryListItemContextMenuConfig
): ReadonlyArray<IMenuItem> => {
  const { repository, onCreateWorktree, onShowWorktrees } = config

  if (!(repository instanceof Repository)) {
    return []
  }

  if (onCreateWorktree === undefined && onShowWorktrees === undefined) {
    return []
  }

  const items: Array<IMenuItem> = []

  if (onShowWorktrees !== undefined) {
    items.push({
      label: tr(__DARWIN__ ? 'Show Worktrees' : 'Show worktrees'),
      action: () => onShowWorktrees(repository),
    })
  }

  if (onCreateWorktree !== undefined) {
    items.push({
      label: tr(__DARWIN__ ? 'New Worktree…' : 'New worktree…'),
      action: () => onCreateWorktree(repository),
    })
  }

  return items
}
