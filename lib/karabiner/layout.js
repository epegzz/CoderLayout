const keys = require('./keyCodes.js')
const {
 non_us_backslash, hyphen, equal_sign, delete_or_backspace,
tab, q, w, e, r, t, y, u, i, o, p, open_bracket, close_bracket, return_or_enter,
  caps_lock, a, s, d, f, g, h, j, k, l, semicolon, quote, backslash,
  left_shift, grave_accent_and_tilde, z, x, c, v, b, n, m, comma, period, slash, right_shift,
  fn, left_control, left_alt, left_command, spacebar, right_command, right_alt, left_arrow, up_arrow, down_arrow, right_arrow
} = keys

// Not the most elegant way, but good enough for now ;)
const key_0 = keys['0']
const key_1 = keys['1']
const key_2 = keys['2']
const key_3 = keys['3']
const key_4 = keys['4']
const key_5 = keys['5']
const key_6 = keys['6']
const key_7 = keys['7']
const key_8 = keys['8']
const key_9 = keys['9']

/**
  * This is the default layout of key codes of my German keyboard as used by karabiner.
  * Since I'm not interested in re-mapping the function key row, I'm omitting it here.
  */
module.exports = [
  [non_us_backslash, key_1, key_2, key_3, key_4, key_5, key_6, key_7, key_8, key_9, key_0, hyphen, equal_sign, delete_or_backspace],
  [tab, q, w, e, r, t, y, u, i, o, p, open_bracket, close_bracket, return_or_enter],
  [caps_lock, a, s, d, f, g, h, j, k, l, semicolon, quote, backslash],
  [left_shift, grave_accent_and_tilde, z, x, c, v, b, n, m, comma, period, slash, right_shift],
  [fn, left_control, left_alt, left_command, spacebar, right_command, right_alt, left_arrow, up_arrow, down_arrow, right_arrow]
]
