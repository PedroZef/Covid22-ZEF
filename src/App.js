import React from "react";
import { StylesProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import Main from './containers/Main';
import GlobalStyle from "./components/styles/global";




function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Main />
      <GlobalStyle />
    </StylesProvider>

  );
}

export default App;
