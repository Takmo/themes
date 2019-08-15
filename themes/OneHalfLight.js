/*
 * One Half Copyright (c) 2019 Son A. Pham <sp@sonpham.me>
 *
 * Originally released under the MIT license.
 */

const colors = {
  black: '#383a42',
  red: '#e45649',
  green: '#50a14f',
  yellow: '#c18401',
  blue: '#0184bc',
  magenta: '#a626a4',
  cyan: '#0997b3',
  white: '#fafafa',
  lightBlack: '#383a42',
  lightRed: '#e45649',
  lightGreen: '#50a14f',
  lightYellow: '#c18401',
  lightBlue: '#0184bc',
  lightMagenta: '#a626a4',
  lightCyan: '#0997b3',
  lightWhite: '#fafafa',
  backgroundColor: '#fafafa',
  foregroundColor: '#383a42',
  cursorColor: '#383a42',
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
