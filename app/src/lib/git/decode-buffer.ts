import iconv from 'iconv-lite'
import * as jschardet from 'jschardet'

/**
 * Encodings we trust jschardet to have detected correctly and will honor as-is.
 *
 * These are multi-byte CJK (Japanese/Chinese) and Unicode encodings that are
 * hard to confuse with anything else. Korean legacy files are intentionally
 * NOT in this list — see `decodeGitBuffer` for why.
 */
const HonoredEncodings = new Set([
  'shift_jis',
  'sjis',
  'windows-31j',
  'euc-jp',
  'gb2312',
  'gbk',
  'gb18030',
  'big5',
  'big5-hkscs',
  'utf-16le',
  'utf-16be',
  'utf-16',
  'utf-32le',
  'utf-32be',
])

/**
 * Decode a raw git output buffer (diff or blob/file contents) into a string.
 *
 * Git emits a file's bytes verbatim, so a file saved in a legacy (non-UTF-8)
 * encoding would render as mojibake if we always decoded as UTF-8.
 *
 * Strategy:
 *  1. Try strict UTF-8 (the common case). If it's valid UTF-8, use it.
 *  2. Otherwise the file is a legacy encoding. jschardet can reliably detect
 *     Japanese/Chinese/Unicode encodings, so we honor those. But it frequently
 *     misdetects Korean EUC-KR/CP949 as a Latin single-byte encoding
 *     (windows-1252 / ISO-8859-*) — often with high confidence — when the file
 *     is mostly ASCII with only a little Korean text. Since this app is aimed
 *     at Korean users, anything that isn't a confidently-detected non-Korean
 *     CJK/Unicode encoding is decoded as CP949 (a superset of EUC-KR), which is
 *     the common legacy Korean encoding.
 */
export function decodeGitBuffer(buffer: Buffer): string {
  try {
    return new TextDecoder('utf-8', { fatal: true }).decode(buffer)
  } catch {
    const detected = jschardet.detect(buffer)?.encoding?.toLowerCase()

    if (detected && HonoredEncodings.has(detected) && iconv.encodingExists(detected)) {
      try {
        return iconv.decode(buffer, detected)
      } catch {
        // fall through to the CP949 fallback below
      }
    }

    // EUC-KR, Latin misdetections, and anything else fall back to CP949.
    return iconv.decode(buffer, 'cp949')
  }
}
