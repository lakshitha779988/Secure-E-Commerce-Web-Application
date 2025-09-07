import { useState, useEffect } from "react";
import config from "../../config";
import { useAuth } from "../useAuth";

const useGetOrders = () => {
  const { getAccessTokenSilently, getIdTokenClaims } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = await getAccessTokenSilently();
        const idTokenClaims = await getIdTokenClaims();
        const idToken = idTokenClaims.__raw;

        const response = await fetch(`${config.API_BASE_URL}/api/orders`, {
          headers: {
            Authorization: `Bearer ${token}`,
            IdToken: `Bearer ${idToken}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch orders");

        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return { orders, loading, error };
};

export default useGetOrders;
