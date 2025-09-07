import { useState, useEffect } from "react";
import config from "../../config";
import { useAuth } from "../useAuth";

const useGetAllItems = () => {
  const { getAccessTokenSilently, getIdTokenClaims } = useAuth();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const token = await getAccessTokenSilently();
        const idTokenClaims = await getIdTokenClaims();
        const idToken = idTokenClaims.__raw;
        const response = await fetch(`${config.API_BASE_URL}/api/cart`, {
          headers: {
            Authorization: `Bearer ${token}`,
            IdToken: `Bearer ${idToken}`,
          },
        });
        if (!response.ok) throw new Error("Failed to fetch items");
        const data = await response.json();
        setItems(data?.items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return { items, loading, error };
};

export default useGetAllItems;
