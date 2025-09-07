// src/hooks/user/useProfile.js
import { useState, useEffect } from "react";
import { useAuth } from "../useAuth";
import config from "../../config";

export const useGetProfile = () => {
  const { getAccessTokenSilently, getIdTokenClaims } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = await getAccessTokenSilently();
        const idTokenClaims = await getIdTokenClaims();
        const idToken = idTokenClaims.__raw;
        const res = await fetch(`${config.API_BASE_URL}/api/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
            IdToken: `Bearer ${idToken}`,
          },
        });
        const data = await res.json();
        setProfile(data.user);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return { profile, loading };
};
