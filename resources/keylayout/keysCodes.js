/**
 * This file maps all key codes as used by the Apple keylayout XML files.
 *
 * The Apple keylayout key codes are taken from here:
 * https://github.com/tekezo/Karabiner/blob/master/src/bridge/generator/keycode/data/KeyCode.data
 *
 * The Karabiner-Elements key names can be found here:
 * https://github.com/pqrs-org/Karabiner-Elements/issues/925
 *
 * This file is not used by CoderLayout and just serves as reference.
 */

module.exports = {
  // ----------------------------------------
  // number
  '0': 29,
  '1': 18,
  '2': 19,
  '3': 20,
  '4': 21,
  '5': 23,
  '6': 22,
  '7': 26,
  '8': 28,
  '9': 25,

  // ----------------------------------------
  // alphabet
  a: 0,
  b: 11,
  c: 8,
  d: 2,
  e: 14,
  f: 3,
  g: 5,
  h: 4,
  i: 34,
  j: 38,
  k: 40,
  l: 37,
  m: 46,
  n: 45,
  o: 31,
  p: 35,
  q: 12,
  r: 15,
  s: 1,
  t: 17,
  u: 32,
  v: 9,
  w: 13,
  x: 7,
  y: 16,
  z: 6,

  // ----------------------------------------
  // international
  non_us_backslash: 10,

  // ----------------------------------------
  // symbol
  grave_accent_and_tilde: 50,
  backslash: 42,
  open_bracket: 33,
  close_bracket: 30,
  comma: 43,
  period: 47,
  equal_sign: 24,
  hyphen: 27,
  quote: 39,
  semicolon: 41,
  slash: 44,

  // ----------------------------------------
  // keypad
  keypad_num_lock: 71,
  keypad_slash: 75,
  keypad_asterisk: 67,
  keypad_hyphen: 78,
  keypad_plus: 69,
  keypad_enter: 76,
  keypad_0: 82,
  keypad_1: 83,
  keypad_2: 84,
  keypad_3: 85,
  keypad_4: 86,
  keypad_5: 87,
  keypad_6: 88,
  keypad_7: 89,
  keypad_8: 91,
  keypad_9: 92,
  keypad_period: 65,
  keypad_equal_sign: 81,
  keypad_comma: 95,

  // ----------------------------------------
  // special
  delete_or_backspace: 51,
  escape: 53,
  delete_forward: 117,
  return_or_enter: 36,
  spacebar: 49,
  tab: 48,

  // ----------------------------------------
  // function
  f1: 122,
  f2: 120,
  f3: 99,
  f4: 118,
  f5: 96,
  f6: 97,
  f7: 98,
  f8: 100,
  f9: 101,
  f10: 109,
  f11: 103,
  f12: 111,
  f13: 105,
  f14: 107,
  f15: 113,
  f16: 106,
  f17: 64,
  f18: 79,
  f19: 80,

  // ----------------------------------------
  // cursor
  up_arrow: 126,
  down_arrow: 125,
  left_arrow: 123,
  right_arrow: 124,
  page_up: 116,
  page_down: 121,
  home: 115,
  end: 119,

  // ----------------------------------------
  // modifiers
  caps_lock: 57,
  left_command: 55,
  right_command: 54,
  left_control: 59,
  right_control: 62,
  fn: 63,
  left_option: 58,
  right_option: 61,
  left_shift: 56,
  right_shift: 60
}
