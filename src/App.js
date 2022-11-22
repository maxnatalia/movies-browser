import { ThemeProvider } from "styled-components";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import MoviesList from "./features/movies/MoviesList";
import Navigation from "./common/Navigation";
import PeopleList from "./features/people/PeopleList";
import Pagination from "./common/Pagination/";
import MovieDetails from "./features/movies/MovieDetails";
import PersonDetails from "./features/people/PersonDetails";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/movies">
            <MovieDetails />
          </Route>
          <Route path="/people">
            <PersonDetails />
          </Route>
          <Route path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
        <Pagination />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;