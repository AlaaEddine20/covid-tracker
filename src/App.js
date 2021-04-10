import React from "react";
// components
import MainView from "./components/view/MainView";
import { ThemeProvider } from "@material-ui/core";
// styles
import { theme } from "./Theme";
import "./App.scss";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainView />
      </ThemeProvider>
    </>
  );
}

export default App;
