// src/hooks/useAuth.js
import { useAuth0 } from "@auth0/auth0-react";

export const useAuth = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently ,getIdTokenClaims} = useAuth0();

  const login = () => loginWithRedirect();
  const signOut = () => logout({ returnTo: window.location.origin });

  return { login, signOut, user, isAuthenticated, getAccessTokenSilently ,getIdTokenClaims };
};
