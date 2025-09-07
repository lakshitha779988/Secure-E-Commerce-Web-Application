// src/auth/Auth0ProviderWithHistory.jsx
import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import config from "../config";


const Auth0ProviderWithHistory = ({ children }) => {
  const navigate = useNavigate();
    console.log(config.REACT_APP_AUTH0_CLIENT_ID)
  return (
    <Auth0Provider
      domain={config.REACT_APP_AUTH0_DOMAIN}
      clientId={config.REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: config.REACT_APP_AUTH0_AUDIENCE, // matches backend
      }}
      onRedirectCallback={(appState) => {
        navigate(appState?.returnTo || window.location.pathname);
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
