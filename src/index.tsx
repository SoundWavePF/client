import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH!}
    clientId={process.env.REACT_APP_AUTH_CLIENT!}
    redirectUri={window.location.origin}
  >
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Auth0Provider>
);
