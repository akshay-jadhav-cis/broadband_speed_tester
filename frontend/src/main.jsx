import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import SpeedProvider from "./context/SpeedContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(

    <SpeedProvider>

        <App />

    </SpeedProvider>

);