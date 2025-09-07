import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "@fontsource/poppins";
import Auth0ProviderWithHistory from "./auth/Auth0ProviderWithHistory.jsx";
import { BrowserRouter } from "react-router-dom";


const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#9c27b0" },
  },
  typography: {
    fontFamily: `'Poppins', sans-serif`, // global font family
    h1: {
      fontWeight: 900,
    },
    h2: {
      fontWeight: 700,
    },
    body1: {
      fontWeight: 400,
    },
    button: {
      textTransform: "none", // optional: disable uppercase on buttons
    },
  },
});


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>
          <Auth0ProviderWithHistory>
            <App />
          </Auth0ProviderWithHistory>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
