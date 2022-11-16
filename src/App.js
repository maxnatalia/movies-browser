import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import MoviesList from "./features/movies/MoviesList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MoviesList />
    </ThemeProvider>
  );
};

export default App;
