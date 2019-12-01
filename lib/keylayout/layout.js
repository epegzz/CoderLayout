const {
  GERMAN_CIRCUMFLEX, KEY_1, KEY_2, KEY_3, KEY_4, KEY_5, KEY_6, KEY_7, KEY_8, KEY_9, KEY_0, MINUS, EQUAL, DELETE,
  TAB, Q, W, E, R, T, Y, U, I, O, P, BRACKET_LEFT, BRACKET_RIGHT, RETURN,
  CAPSLOCK, A, S, D, F, G, H, J, K, L, SEMICOLON, QUOTE, BACKSLASH,
  SHIFT_L, BACKQUOTE, Z, X, C, V, B, N, M, COMMA, DOT, SLASH, SHIFT_R,
  FN, CONTROL_L, OPTION_L, COMMAND_L, SPACE, COMMAND_R, OPTION_R, CURSOR_UP, CURSOR_LEFT, CURSOR_DOWN, CURSOR_RIGHT,
} = require('./keysCodes')

/**
 * This is the default layout of key codes of my German keyboard as used in Apple keylayout files.
 * Since I'm not interested in re-mapping the function key row, I'm omitting it here.
 */
module.exports = [
  [GERMAN_CIRCUMFLEX, KEY_1, KEY_2, KEY_3, KEY_4, KEY_5, KEY_6, KEY_7, KEY_8, KEY_9, KEY_0, MINUS, EQUAL, DELETE],
  [TAB, Q, W, E, R, T, Y, U, I, O, P, BRACKET_LEFT, BRACKET_RIGHT, RETURN],
  [CAPSLOCK, A, S, D, F, G, H, J, K, L, SEMICOLON, QUOTE, BACKSLASH],
  [SHIFT_L, BACKQUOTE, Z, X, C, V, B, N, M, COMMA, DOT, SLASH, SHIFT_R],
  [FN, CONTROL_L, OPTION_L, COMMAND_L, SPACE, COMMAND_R, OPTION_R, CURSOR_UP, CURSOR_LEFT, CURSOR_DOWN, CURSOR_RIGHT],
]
