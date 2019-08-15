/*
 * One Half Copyright (c) 2019 Son A. Pham <sp@sonpham.me>
 *
 * Originally released under the MIT license.
 */

const colors = {
  black: '#282c34',
  red: '#e06c75',
  green: '#98c379',
  yellow: '#e5c07b',
  blue: '#61afef',
  magenta: '#c678dd',
  cyan: '#56b6c2',
  white: '#dcdfe4',
  lightBlack: '#282c34',
  lightRed: '#e06c75',
  lightGreen: '#98c379',
  lightYellow: '#e5c07b',
  lightBlue: '#61afef',
  lightMagenta: '#c678dd',
  lightCyan: '#56b6c2',
  lightWhite: '#dcdfe4',
  backgroundColor: '#282c34',
  foregroundColor: '#dcdfe4',
  cursorColor: '#dcdfe4',
};

t.prefs_.set('color-palette-overrides', [
  colors.black,
  colors.red,
  colors.green,
  colors.yellow,
  colors.blue,
  colors.magenta,
  colors.cyan,
  colors.white,
  colors.lightBlack,
  colors.lightRed,
  colors.lightGreen,
  colors.lightYellow,
  colors.lightBlue,
  colors.lightMagenta,
  colors.lightCyan,
  colors.lightWhite
]);

t.prefs_.set('cursor-color', colors.cursorColor);
t.prefs_.set('foreground-color', colors.foregroundColor);
t.prefs_.set('background-color', colors.backgroundColor);
