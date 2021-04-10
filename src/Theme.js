import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
  overrides: {
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `1px solid ${"red"}`,
        },
        "&:hover:not($disabled):before": {
          borderBottom: `2px solid ${"red"}`,
        },
      },
    },
  },
});
