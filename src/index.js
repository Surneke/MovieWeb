import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from '@mui/material/styles';
import "./index.css";
import App from "./App";
import {theme} from './theme/muiTheme'
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "./context/Cartcontext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
      <dataProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </dataProvider>
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
