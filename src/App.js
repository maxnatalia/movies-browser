import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import MoviesList from "./features/movies/MoviesList";
// import Error from "./Error";
// import NoResults from "./NoResults";
// import Loading from "./Loading";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MoviesList />
      {/* <Error /> */}
      {/* <NoResults /> */}
      {/* <Loading /> */}
    </ThemeProvider>
  );
};

export default App;