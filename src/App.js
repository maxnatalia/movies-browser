import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
// import MoviesList from "./features/movies/MoviesList";
// import Navigation from "./Navigation/index";
import PeopleList from "./features/people/PeopleList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PeopleList />
    </ThemeProvider>
  );
};

export default App;
