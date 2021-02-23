/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

const breakpoints: any = ['8em', '30em', '45em', '64em', '80em', '90em', '100em'];

const [xs, sm, md, xm, lg, ml, xl] = breakpoints;
breakpoints.xs = xs;
breakpoints.sm = sm;
breakpoints.md = md;
breakpoints.xm = xm;
breakpoints.lg = lg;
breakpoints.ml = ml;
breakpoints.xl = xl;

const space = [
  0,
  0.2,
  0.4,
  0.6,
  0.8,
  1,
  1.1,
  1.2,
  1.3,
  1.4,
  1.5,
  1.6,
  1.7,
  1.8,
  1.9,
  2,
  2.1,
  2.2,
  2.4,
  2.6,
  2.8,
  3,
  3.2,
  3.4,
  3.6,
  3.8,
  4,
  5,
  6,
  7,
  8,
].map(s => `${s}rem`);
const sizes = {
  1: '0',
  2: '0.625rem',
  3: '0.9375rem',
  4: '1.25rem',
  5: '1.563rem',
  6: '1.875rem',
  7: '2.188rem',
  8: '2.5rem',
  9: '2.813rem',
  10: '3.125rem',
};

const colorSets = [
  {
    name: 'grassygreen',
    alias: 'primary',
    colors: [
      { name: 50, hex: '#a1cc7f' },
      { name: 100, hex: '#8ec166' },
      { name: 200, hex: '#7cb74c' },
      { name: 300, hex: '#69ad32' },
      { name: 400, hex: '#56a319' },
      { name: 500, hex: '#449900' },
      { name: 600, hex: '#3d8900' },
      { name: 700, hex: '#367a00' },
      { name: 800, hex: '#2f6b00' },
      { name: 900, hex: '#285b00' },
    ],
  },
  {
    name: 'dirtyblue',
    colors: [
      { name: 50, hex: '#99c3cc' },
      { name: 100, hex: '#84b7c1' },
      { name: 200, hex: '#70abb7' },
      { name: 300, hex: '#5b9fad' },
      { name: 400, hex: '#4793a3' },
      { name: 500, hex: '#338899' },
      { name: 600, hex: '#2d7a89' },
      { name: 700, hex: '#286c7a' },
      { name: 800, hex: '#235f6b' },
      { name: 900, hex: '#1e515b' },
    ],
  },
  {
    name: 'applegreen',
    alias: 'secondary',
    colors: [
      { name: 50, hex: '#bbe599' },
      { name: 100, hex: '#ade084' },
      { name: 200, hex: '#9fdb70' },
      { name: 300, hex: '#92d65b' },
      { name: 400, hex: '#84d147' },
      { name: 500, hex: '#77cc33' },
      { name: 600, hex: '#6bb72d' },
      { name: 700, hex: '#5fa328' },
      { name: 800, hex: '#538e23' },
      { name: 900, hex: '#477a1e' },
    ],
  },
  {
    name: 'lightblue',
    colors: [
      { name: 40, hex: '#c5f5ff' },
      { name: 50, hex: '#c3eef6' },
      { name: 100, hex: '#b7eaf4' },
      { name: 200, hex: '#abe7f3' },
      { name: 300, hex: '#9fe3f1' },
      { name: 400, hex: '#93e0ef' },
      { name: 500, hex: '#88ddee' },
      { name: 600, hex: '#7ac6d6' },
      { name: 700, hex: '#6cb0be' },
      { name: 800, hex: '#5f9aa6' },
      { name: 900, hex: '#51848e' },
    ],
  },
  {
    name: 'mahogany',
    alias: 'text',
    colors: [
      { name: 50, hex: '#997066' },
      { name: 100, hex: '#88584c' },
      { name: 200, hex: '#764032' },
      { name: 300, hex: '#662819' },
      { name: 400, hex: '#93e0ef' },
      { name: 500, hex: '#551100' },
      { name: 600, hex: '#4c0f00' },
      { name: 700, hex: '#440d00' },
      { name: 800, hex: '#3b0b00' },
      { name: 900, hex: '#330a00' },
    ],
  },
  {
    name: 'darklavender',
    alias: 'tertiary',
    colors: [
      { name: 50, hex: '#bbaacc' },
      { name: 100, hex: '#ad99c1' },
      { name: 200, hex: '#9f88b7' },
      { name: 300, hex: '#9276ad' },
      { name: 400, hex: '#8466a3' },
      { name: 500, hex: '#775599' },
      { name: 600, hex: '#6b4c8a' },
      { name: 700, hex: '#5f447a' },
      { name: 800, hex: '#533b6b' },
      { name: 900, hex: '#47335b' },
    ],
  },
  {
    name: 'darkorange',
    alias: 'warning',
    colors: [
      { name: 50, hex: '#e5aa7f' },
      { name: 100, hex: '#e09966' },
      { name: 200, hex: '#db884c' },
      { name: 300, hex: '#d67632' },
      { name: 400, hex: '#d16619' },
      { name: 500, hex: '#cc5500' },
      { name: 600, hex: '#b74c00' },
      { name: 700, hex: '#a34400' },
      { name: 800, hex: '#8e3b00' },
      { name: 900, hex: '#7a3300' },
    ],
  },
  {
    name: 'steelgrey',
    colors: [
      { name: 50, hex: '#bbc3c3' },
      { name: 100, hex: '#adb7b7' },
      { name: 200, hex: '#9fabab' },
      { name: 300, hex: '#929f9f' },
      { name: 400, hex: '#849393' },
      { name: 500, hex: '#778888' },
      { name: 600, hex: '#6b7a7a' },
      { name: 700, hex: '#5f6c6c' },
      { name: 800, hex: '#535f5f' },
      { name: 900, hex: '#475151' },
    ],
  },
  {
    name: 'pale',
    colors: [
      { name: 50, hex: '#f5f5f3' },
      { name: 100, hex: '#f3f3f0' },
      { name: 200, hex: '#f1f1ee' },
      { name: 300, hex: '#efefeb' },
      { name: 400, hex: '#edede9' },
      { name: 500, hex: '#ecebe7' },
      { name: 600, hex: '#d4d3cf' },
      { name: 700, hex: '#bcbcb8' },
      { name: 800, hex: '#a5a4a1' },
      { name: 900, hex: '#8d8d8a' },
    ],
  },
  {
    name: 'offwhite',
    colors: [
      { name: 0, hex: '#ffffff' },
      { name: 10, hex: '#fefefd' },
      { name: 20, hex: '#fdfdfc' },
      { name: 30, hex: '#fcfcfb' },
      { name: 40, hex: '#fcfbfa' },
      { name: 50, hex: '#fbfbf9' },
      { name: 100, hex: '#fafaf7' },
      { name: 200, hex: '#faf9f6' },
      { name: 300, hex: '#f9f8f5' },
      { name: 400, hex: '#f8f7f4' },
      { name: 500, hex: '#f8f7f3' },
      { name: 600, hex: '#dfdeda' },
      { name: 700, hex: '#c6c5c2' },
      { name: 800, hex: '#adacaa' },
      { name: 900, hex: '#949491' },
      { name: 910, hex: '#7c7b79' },
      { name: 920, hex: '#636261' },
      { name: 930, hex: '#4a4a48' },
      { name: 940, hex: '#313130' },
      { name: 950, hex: '#181818' },
      { name: 1000, hex: '#000000' },
    ],
  },
  {
    name: 'silver',
    colors: [
      { name: 50, hex: '#dde5e5' },
      { name: 100, hex: '#d6e0e0' },
      { name: 200, hex: '#cfdbdb' },
      { name: 300, hex: '#c8d6d6' },
      { name: 400, hex: '#c1d1d1' },
      { name: 500, hex: '#bbcccc' },
      { name: 600, hex: '#a8b7b7' },
      { name: 700, hex: '#95a3a3' },
      { name: 800, hex: '#828e8e' },
      { name: 900, hex: '#707a7a' },
    ],
  },
  {
    name: 'gray',
    alias: 'gray',
    colors: [
      { name: 50, hex: '#FEFEFE' },
      { name: 100, hex: '#F9F9F9' },
      { name: 200, hex: '#F4F4F4' },
      { name: 300, hex: '#D8D8D8' },
      { name: 400, hex: '#8F8E94' },
      { name: 500, hex: '#8A8A8A' },
      { name: 600, hex: '#737373' },
      { name: 700, hex: '#444444' },
      { name: 800, hex: '#404040' },
      { name: 900, hex: '#242424' },
    ],
  },
  {
    name: 'missionblue',
    colors: [
      { name: 500, hex: '#ccf9ff' },
      { name: 600, hex: '#71c7d7' },
    ],
  },
  {
    name: 'missionorange',
    colors: [
      { name: 500, hex: '#ffe0a6' },
      { name: 600, hex: '#ffb03e' },
    ],
  },
  {
    name: 'missiongreen',
    colors: [
      { name: 500, hex: '#97d75a' },
      { name: 600, hex: '#6dc324' },
      { name: 700, hex: '#55aa00' },
    ],
  },
];
const fontSets = [
  {
    name: 'heading',
    fontSize: '2.1rem',
    lineHeight: '2.1rem',
    fontWeight: 'normal',
    font: 'Roboto',
  },
  {
    name: 'title',
    fontSize: '1.8rem',
    lineHeight: '1.8rem',
    fontWeight: 'normal',
    font: 'Roboto',
  },
  {
    name: 'field',
    fontSize: '1.6rem',
    lineHeight: '2rem',
    fontWeight: 'normal',
    font: 'Roboto',
  },
  {
    name: 'body',
    fontSize: '1.4rem',
    lineHeight: '1.4rem',
    fontWeight: 'normal',
    font: 'Roboto',
  },
  {
    name: 'small',
    alias: 'displaySm',
    fontSize: '1.2rem',
    lineHeight: '1.2rem',
    fontWeight: 'normal',
    font: 'Roboto',
  },

  {
    name: 'headingBold',
    fontSize: '2.1rem',
    lineHeight: '2.1rem',
    fontWeight: 'normal',
    font: 'Roboto Condensed',
  },
  {
    name: 'titleBold',
    fontSize: '1.8rem',
    lineHeight: '1.8rem',
    fontWeight: 'normal',
    font: 'Roboto Condensed',
  },
  {
    name: 'bigBodyBold',
    fontSize: '1.6rem',
    lineHeight: '1.6rem',
    fontWeight: 'normal',
    font: 'Roboto Condensed',
  },
  {
    name: 'bodyBold',
    fontSize: '1.4rem',
    lineHeight: '1.4rem',
    fontWeight: 'normal',
    font: 'Roboto Condensed',
  },
  {
    name: 'smallBold',
    fontSize: '1.2rem',
    lineHeight: '1.2rem',
    fontWeight: 'normal',
    font: 'Roboto Condensed',
  },
];

const fontMaps = fontSets.reduce(
  (fontMaps, { name, alias = name, fontSize, lineHeight, fontWeight, font }, index) => {
    fontMaps.fonts[index] = font;
    fontMaps.fonts[font] = font;
    fontMaps.fonts[name] = font;
    fontMaps.fonts[alias] = font;

    fontMaps.fontSizes[index] = fontSize;
    fontMaps.fontSizes[name] = fontSize;
    fontMaps.fontSizes[alias] = fontSize;

    fontMaps.fontWeights[index] = fontWeight;
    fontMaps.fontWeights[name] = fontWeight;
    fontMaps.fontWeights[alias] = fontWeight;

    fontMaps.lineHeights[name] = lineHeight;
    fontMaps.lineHeights[alias] = lineHeight;

    return fontMaps;
  },
  {
    fonts: {},
    fontSizes: {},
    fontWeights: { normal: 300, medium: 500, semiBold: 600, bold: 900 },
    lineHeights: {},
  },
);
const colors = colorSets.reduce(
  (colorMap, { name, alias = name, colors }) => {
    const color = {};

    for (let colorIndex = 0; colorIndex < colors.length; colorIndex++) {
      const { name: colorName, hex } = colors[colorIndex];

      color[colorIndex] = hex;
      color[colorName] = hex;
    }

    colorMap[name] = color;
    colorMap[alias] = color;

    return colorMap;
  },
  {
    white: '#FFFFFF',
    'white.0': '#FFFFFF',
    black: '#000000',
    'black.0': '#000000',
  },
);
const radii = {
  small: '0.125rem',
  normal: '0.1875rem',
  large: '0.375rem',
  full: '10rem',
  square: 0,
};

const zIndices = {
  modal: 2000,
  tooltip: 5000,
  toast: 7000,
};
const shadows = [
  { name: 'none', shadow: undefined },
  { name: 'sm', shadow: '0 .075rem .15rem rgba(0,0,0,.15)' },
].reduce((shadows, { name, shadow }, index) => {
  shadows[name] = shadow;
  shadows[index] = shadow;

  return shadows;
}, {});
export const theme = {
  breakpoints,
  ...fontMaps,
  colors,
  space,
  sizes,
  radii,
  zIndices,
  shadows,
};
