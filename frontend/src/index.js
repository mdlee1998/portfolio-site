import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";

import "./index.scss";
import App from "./App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Title</title>
    </Helmet>
    <Provider store={store}>
      <App className="text-[1vw]" />
    </Provider>
  </React.StrictMode>
);
