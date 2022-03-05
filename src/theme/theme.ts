export type ThemeType = typeof theme.light;

const defaultTheme = {
  fontSizes: {
    xs: "16",
    s: "20",
    m: "24",
    l: "30",
    xl: "40",
  },
  fontWeights: {
    normal: 500,
    semiBold: 600,
    bold: 700,
  },
};

export const theme = {
  light: {
    colors: {
      primary: "#266DD3",
      text_primary: "#fafafa",
    },
    ...defaultTheme,
  },
  dark: {
    colors: {
      primary: "#0D1821",
      text_primary: "#ffffff",
    },
    ...defaultTheme,
  },
};
