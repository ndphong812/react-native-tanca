import { Dimensions } from "react-native";
import { extendTheme } from "native-base";
//COLORS
export const WHITE = "#fff";

// DEVICE
export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = SLIDER_WIDTH;

// THEME
export const theme = extendTheme({
  fontWeights: {
    normal: "400",
    medium: "500",
    bold: "600",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "22px",
    "2xl": "24px",
  },
  lineHeights: {
    xs: "16px",
    sm: "20px",
    md: "22px",
    lg: "26px",
    xl: "32px",
    "2xl": "36px",
  },
  colors: {
    // Add new color
    primary: {
      50: "#1ECC78",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
    muted: {
      100: "#E4ECFF",
    },
    // Redefining only one shade, rest of the color will remain same.
    amber: {
      400: "#d97706",
    },
    singletons: {
      50: "#303E65",
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "dark",
  },
});
