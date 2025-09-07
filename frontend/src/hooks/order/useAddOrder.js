import { useState } from "react";
import config from "../../config";
import { useAuth } from "../useAuth";

const useAddOrder = () => {
  const { getAccessTokenSilently, getIdTokenClaims } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addOrder = async (orderData) => {
    setLoading(true);
    setError(null);

    try {
      const token = await getAccessTokenSilently();
      const idTokenClaims = await getIdTokenClaims();
      const idToken = idTokenClaims.__raw;

      const response = await fetch(`${config.API_BASE_URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          IdToken: `Bearer ${idToken}`,
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Failed to place order");
      }

      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { addOrder, loading, error };
};

export default useAddOrder;
