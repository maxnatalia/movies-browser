import { ThemeProvider } from "styled-components";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import MoviesList from "./features/movies/MoviesList";
import MovieDetails from "./features/movies/MovieDetails";
import Navigation from "./common/Navigation";
import PeopleList from "./features/people/PeopleList";
import PersonDetails from "./features/people/PersonDetails";
import { toPopularMovies, toMovieDetails, toPeople, toPersonDetails } from "./routes";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path={toPersonDetails()}>
            <PersonDetails />
          </Route>
          <Route path={toMovieDetails()}>
            <MovieDetails />
          </Route>
          <Route path={toPopularMovies()}>
            <MoviesList />
          </Route>
          <Route path={toPeople()}>
            <PeopleList />
          </Route>
          <Route path="/">
            <Redirect to={toPopularMovies()} />
          </Route>
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;