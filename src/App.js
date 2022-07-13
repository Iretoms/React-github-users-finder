import React, {useState} from "react";
import GlobalStyle from "./style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./style/Theme";
import GitHub from "./page/GitHub";

const themes = {
  light,
  dark,
};

function App() {
  const [theme, setTheme] = useState("light")
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={themes.light}>
        <GitHub/>
      </ThemeProvider>
    </div>
  );
}

export default App;
