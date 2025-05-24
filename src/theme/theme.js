import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: { default: '#f5f5f5' },
    primary: { main: '#001f3f' },  // navy blue
    secondary: { main: '#b0bec5' },  // light grey
  },
  typography: {
    fontWeightBold: 700,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#000000' },
    primary: { main: '#ffff00' },  // yellow
  },
  typography: {
    fontWeightBold: 700,
  },
});
// export const theme = {
//   light: lightTheme,
//   dark: darkTheme,
// };