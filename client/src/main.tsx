import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import Navbar from "./Components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material";
import Footer from "./Components/Footer";
import LoadingScreen from "./Components/LoadingScreen";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum";

const container = document.getElementById("root");
const root = createRoot(container!);
const theme = createTheme();

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <ThirdwebProvider activeChain={activeChain}>
          <Navbar />
          <App />
          <Footer />
        </ThirdwebProvider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
