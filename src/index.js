import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { lighten, darken, transparentize, complement } from "polished";
import App from "./App";

const baseWallColor = "#505050";

const theme = {
  colors: {
    background: lighten(0.2, baseWallColor),
    backgroundShadow: darken(0.1, baseWallColor),
    wall: baseWallColor,
    floor: lighten(0.3, baseWallColor),
    floorBackground: lighten(0.1, baseWallColor),
  },
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
