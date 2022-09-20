import GlobalStyle from "./style/GlobalStyle";
import ThemeProvide from "./context/ThemeContext";
import GitHub from "./page/GitHub";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvide>
        <GitHub />
      </ThemeProvide>
    </div>
  );
}

export default App;
