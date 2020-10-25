import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppProvider from "./components/AppProvider";
import App from "./App";

// BrowserRouter stores all the route components
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppProvider>
                <App />
            </AppProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
