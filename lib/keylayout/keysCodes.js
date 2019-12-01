/**
 * This file contains all key codes as used by the Apple keylayout XML files:
 * `<key code="" />`
 *
 * The key codes are taken from here:
 * https://github.com/tekezo/Karabiner/blob/master/src/bridge/generator/keycode/data/KeyCode.data
 */

module.exports = {
  // ----------------------------------------
  // alphabet
  A: 0,
  B: 11,
  C: 8,
  D: 2,
  E: 14,
  F: 3,
  G: 5,
  H: 4,
  I: 34,
  J: 38,
  K: 40,
  L: 37,
  M: 46,
  N: 45,
  O: 31,
  P: 35,
  Q: 12,
  R: 15,
  S: 1,
  T: 17,
  U: 32,
  V: 9,
  W: 13,
  X: 7,
  Y: 16,
  Z: 6,

  // ----------------------------------------
  // number
  KEY_0: 29,
  KEY_1: 18,
  KEY_2: 19,
  KEY_3: 20,
  KEY_4: 21,
  KEY_5: 23,
  KEY_6: 22,
  KEY_7: 26,
  KEY_8: 28,
  KEY_9: 25,

  // ----------------------------------------
  // symbol
  BACKQUOTE: 50,
  BACKSLASH: 42,
  BRACKET_LEFT: 33,
  BRACKET_RIGHT: 30,
  COMMA: 43,
  DOT: 47,
  EQUAL: 24,
  MINUS: 27,
  QUOTE: 39,
  SEMICOLON: 41,
  SLASH: 44,

  // ----------------------------------------
  // keypad
  KEYPAD_0: 82,
  KEYPAD_1: 83,
  KEYPAD_2: 84,
  KEYPAD_3: 85,
  KEYPAD_4: 86,
  KEYPAD_5: 87,
  KEYPAD_6: 88,
  KEYPAD_7: 89,
  KEYPAD_8: 91,
  KEYPAD_9: 92,
  KEYPAD_CLEAR: 71,
  KEYPAD_COMMA: 95,
  KEYPAD_DOT: 65,
  KEYPAD_EQUAL: 81,
  KEYPAD_MINUS: 78,
  KEYPAD_MULTIPLY: 67,
  KEYPAD_PLUS: 69,
  KEYPAD_SLASH: 75,

  // ----------------------------------------
  // special
  DELETE: 51,
  ENTER: 76,
  ESCAPE: 53,
  FORWARD_DELETE: 117,
  RETURN: 36,
  SPACE: 49,
  TAB: 48,

  // ----------------------------------------
  // function
  F1: 122,
  F2: 120,
  F3: 99,
  F4: 118,
  F5: 96,
  F6: 97,
  F7: 98,
  F8: 100,
  F9: 101,
  F10: 109,
  F11: 103,
  F12: 111,
  F13: 105,
  F14: 107,
  F15: 113,
  F16: 106,
  F17: 64,
  F18: 79,
  F19: 80,

  // ----------------------------------------
  // functional
  BRIGHTNESS_DOWN: 145,
  BRIGHTNESS_UP: 144,
  DASHBOARD: 130,
  EXPOSE_ALL: 160,
  LAUNCHPAD: 131,
  MISSION_CONTROL: 160,

  // ----------------------------------------
  // cursor
  CURSOR_UP: 126,
  CURSOR_DOWN: 125,
  CURSOR_LEFT: 123,
  CURSOR_RIGHT: 124,
  PAGEUP: 116,
  PAGEDOWN: 121,
  HOME: 115,
  END: 119,

  // ----------------------------------------
  // modifiers
  CAPSLOCK: 57,
  COMMAND_L: 55,
  COMMAND_R: 54,
  CONTROL_L: 59,
  CONTROL_R: 62,
  FN: 63,
  OPTION_L: 58,
  OPTION_R: 61,
  SHIFT_L: 56,
  SHIFT_R: 60,

  // ----------------------------------------
  // pc keyboard
  PC_APPLICATION: 110,
  PC_BS: 51,
  PC_DEL: 117,
  PC_INSERT: 114,
  PC_KEYPAD_NUMLOCK: 71,
  PC_PAUSE: 113,
  PC_POWER: 127,
  PC_PRINTSCREEN: 105,
  PC_SCROLLLOCK: 107,

  // ----------------------------------------
  // international
  DANISH_DOLLAR: 10,
  DANISH_LESS_THAN: 50,
  FRENCH_DOLLAR: 30,
  FRENCH_EQUAL: 44,
  FRENCH_HAT: 33,
  FRENCH_MINUS: 24,
  FRENCH_RIGHT_PAREN: 27,
  GERMAN_CIRCUMFLEX: 10,
  GERMAN_LESS_THAN: 50,
  GERMAN_PC_LESS_THAN: 128,
  GERMAN_QUOTE: 24,
  GERMAN_A_UMLAUT: 39,
  GERMAN_O_UMLAUT: 41,
  GERMAN_U_UMLAUT: 33,
  ITALIAN_BACKSLASH: 10,
  ITALIAN_LESS_THAN: 50,
  JIS_ATMARK: 33,
  JIS_BRACKET_LEFT: 30,
  JIS_BRACKET_RIGHT: 42,
  JIS_COLON: 39,
  JIS_DAKUON: 33,
  JIS_EISUU: 102,
  JIS_HANDAKUON: 30,
  JIS_HAT: 24,
  JIS_KANA: 104,
  JIS_PC_HAN_ZEN: 50,
  JIS_UNDERSCORE: 94,
  JIS_YEN: 93,
  RUSSIAN_PARAGRAPH: 10,
  RUSSIAN_TILDE: 50,
  SPANISH_LESS_THAN: 50,
  SPANISH_ORDINAL_INDICATOR: 10,
  SWEDISH_LESS_THAN: 50,
  SWEDISH_SECTION: 10,
  SWISS_LESS_THAN: 50,
  SWISS_SECTION: 10,
  UK_SECTION: 10,

  EJECT: 0,
  NONE: null
}
