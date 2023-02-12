import React from "react";
import ReactDOM from "react-dom/client";
import {Helmet} from "react-helmet";
import "./index.scss";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>My Title</title>
    </Helmet>
    <App className="text-[1vw]"/>
  </React.StrictMode>
);

