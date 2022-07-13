import React, { useState } from "react";
import GlobalStyle from "./style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./style/Theme";
import GitHub from "./page/GitHub";

export const ThemeContext = React.createContext();

const themes = {
  light,
  dark,
};

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={themes[theme]}>
        <ThemeContext.Provider value={{theme, setTheme}}>
          <GitHub/>
        </ThemeContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
