import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { Sepolia } from '@thirdweb-dev/chains'
import "./styles/globals.css";
import Navbar from "./Components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import { ContractProvider } from "./contexts/ContractContext";
import 'react-toastify/dist/ReactToastify.css';
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

const container = document.getElementById("root");
const root = createRoot(container!);
const theme = createTheme();

root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={Sepolia}>
      <ContractProvider>
        <ToastContainer />
        <ThemeProvider theme={theme}>
          <Router>
            <Navbar />
            <App />
            <Footer />
          </Router>
        </ThemeProvider>
      </ContractProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);
