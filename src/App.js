import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import Error from "./Error";
// import NoResults from "./NoResults";
// import Loading from "./Loading";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Error />
      {/* <NoResults /> */}
      {/* <Loading /> */}
    </ThemeProvider>
  );
};

export default App;
