/**
 * This file contains control characters as used as `output` property in Apple keylayout files.
 * `<key output="" />`
 *
 * This file is not used by CoderLayout and just serves as reference.
 */

module.exports = {
  // ----------------------------------------
  // special
  DELETE: '&#x0008;',
  ENTER: '&#x000D;',
  ESCAPE: '&#x001B;',
  FORWARD_DELETE: '&#x007F;',
  RETURN: '&#x000D;',
  SPACE: '&#x0020;',
  TAB: '&#x0009;',

  // ----------------------------------------
  // cursor
  CURSOR_UP: '&#x001E;',
  CURSOR_DOWN: '&#x001F;',
  CURSOR_LEFT: '&#x001C;',
  CURSOR_RIGHT: '&#x001D;',
  PAGEUP: undefined,
  PAGEDOWN: undefined,
  HOME: undefined,
  END: undefined,
}
