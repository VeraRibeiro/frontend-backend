import { createTheme, ThemeOptions } from "@material-ui/core/styles";
import { darkScrollbar, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export enum ThemeColors {
  WHITE = "#fff",
  MAIN_GREY = "#4D4D4D",

  GREEN = "#77C698",
  GREEN_DARK = "#47956A",
  RED = "#FF6464",
  BLUE = "#5984C2",
  DARK_BACKGROUND = "#121212",
  LIGHT_BACKGROUND = "#FCFCFC",
  LIGHT_GREY_1 = "#F5F5F5",
  LIGHT_GREY_2 = "#EFEFEF",
  LIGHT_GREY_3 = "#E6E6E6",
  MEDIUM_GREY_1 = "#CCCCCC",
  MEDIUM_GREY_2 = "#999999",
  MEDIUM_GREY_3 = "#808080",
  DARK_GREY_1 = "#424242",
  DARK_GREY_2 = "#393939",
  DARK_GREY_3 = "#2B2B2B",
  PURPLE = "#6E75F8",
  MINT = "#14D5A1",
  ALICE_BLUE = "#F6F7F9",
}

/** Base theme to inherit properties */
const defaultTheme = createTheme();
const { palette } = defaultTheme;

const lightScrollbar = {
  "&::-webkit-scrollbar-track": {
    borderRadius: "10px",
    opacity: 0.5,
    webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
    backgroundColor: ThemeColors.LIGHT_GREY_3,
  },
  "&::-webkit-scrollbar": {
    width: "5px",
    opacity: 0.5,
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "10px",
    opacity: 0.5,
    webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
    backgroundColor: ThemeColors.MEDIUM_GREY_1,
  },
};

export const useCustomScrollbar = makeStyles((theme: Theme) => ({
  scrollbar: theme.palette.mode === "light" ? lightScrollbar : darkScrollbar(),
}));

export const themeConfig: Partial<ThemeOptions> = {
  typography: {
    fontFamily: "Roboto, Arial",
    fontSize: 11,
  },
  palette: {
    mode: "light",
    primary: {
      main: ThemeColors.GREEN,
    },
    secondary: {
      main: ThemeColors.GREEN_DARK,
    },
    error: {
      main: ThemeColors.RED,
    },
    background: {
      default:
        palette.mode === "light"
          ? ThemeColors.LIGHT_BACKGROUND
          : ThemeColors.DARK_BACKGROUND,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: "5px",
          backgroundColor:
            palette.mode === "light"
              ? ThemeColors.GREEN
              : ThemeColors.GREEN_DARK,
          "&:hover": {
            backgroundColor: ThemeColors.GREEN_DARK,
          },
        },
      },
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: palette.mode === "dark" ? darkScrollbar() : lightScrollbar,
      },
    },
    MuiTooltip: {
      defaultProps: {
        disableInteractive: true,
        disableFocusListener: true,
        disableTouchListener: true,
      },
      styleOverrides: {
        tooltip: {
          fontSize: "11px",
          backgroundColor: ThemeColors.LIGHT_BACKGROUND,
          border: "8px",
          boxShadow: "5px 5px 7px 2px rgba(0,0,0,0.22)",
          color: ThemeColors.MAIN_GREY,
          padding: "6px",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
};

export default createTheme(themeConfig);
