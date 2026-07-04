import { koMenuLabels } from './ko'
import { koUiText } from './ko-ui'

/** The languages supported by the application UI. */
export type Language = 'en' | 'ko'

/** The list of selectable languages, in display order. */
export const SupportedLanguages: ReadonlyArray<Language> = ['en', 'ko']

/** The language used when no preference has been stored. */
export const DefaultLanguage: Language = 'en'

/** Human readable, self-referential names for each supported language. */
export const LanguageNames: Record<Language, string> = {
  en: 'English',
  ko: '한국어',
}

/**
 * Coerce an arbitrary value into a supported {@link Language}, falling back to
 * {@link DefaultLanguage} when the value isn't recognized.
 */
export function parseLanguage(value: unknown): Language {
  return value === 'ko' ? 'ko' : 'en'
}

/** The per-language lookup tables of English label -> localized label. */
const translations: Record<Language, ReadonlyMap<string, string>> = {
  en: new Map(),
  ko: koMenuLabels,
}

/** The per-language lookup tables for renderer (React UI) strings. */
const uiTranslations: Record<Language, ReadonlyMap<string, string>> = {
  en: new Map(),
  ko: koUiText,
}

/**
 * The language the renderer is currently rendering in.
 *
 * Kept as module-level state (mirrored from the app store) so that the
 * synchronous {@link tr} helper can be called from anywhere in a component's
 * render method without threading the language through props. The app store
 * calls {@link setCurrentLanguage} whenever the preference loads or changes and
 * then emits an update, causing the React tree to re-render and pick up the new
 * translations.
 */
let currentLanguage: Language = DefaultLanguage

/** Update the language used by {@link tr}. */
export function setCurrentLanguage(language: Language): void {
  currentLanguage = language
}

/** The language currently used by {@link tr}. */
export function getCurrentLanguage(): Language {
  return currentLanguage
}

/**
 * Translate a piece of English UI text into the current language.
 *
 * Text without a translation is returned unchanged, so English output is always
 * identical to the original source and untranslated strings simply fall back to
 * English rather than disappearing.
 */
export function tr(text: string): string {
  return uiTranslations[currentLanguage].get(text) ?? text
}

/**
 * Translate a single, already-computed English label into the given language.
 *
 * Labels that don't have a translation (for example dynamic labels that embed a
 * repository or branch name) are returned unchanged so we always degrade
 * gracefully to English rather than showing an empty string.
 */
export function translateLabel(label: string, language: Language): string {
  return translations[language].get(label) ?? label
}

/**
 * Recursively translate every `label` in an Electron menu template in place.
 *
 * This is intentionally run _after_ the menu template has been fully built (and
 * after ids have been assigned) so that the large, platform-specific menu
 * construction code can stay untouched and menu-state updates -- which are keyed
 * off item ids derived from the English labels -- keep working.
 */
export function localizeMenuTemplate(
  template: ReadonlyArray<Electron.MenuItemConstructorOptions>,
  language: Language
): void {
  if (language === 'en') {
    return
  }

  for (const item of template) {
    if (typeof item.label === 'string') {
      item.label = translateLabel(item.label, language)
    }

    if (Array.isArray(item.submenu)) {
      localizeMenuTemplate(item.submenu, language)
    }
  }
}
