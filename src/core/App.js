import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { router } from "./routes";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;