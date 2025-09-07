// hooks/useAddItem.js
import { useState } from "react";
import config from "../../config";
import { useAuth } from "../useAuth";

const useAddItem = () => {
  const { getAccessTokenSilently, getIdTokenClaims } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addItem = async (product, quantity = 1) => {
    setLoading(true);
    setError(null);

    try {
      const token = await getAccessTokenSilently();
      const idTokenClaims = await getIdTokenClaims();
      const idToken = idTokenClaims.__raw;

      const newProduct = {
        productId: product?.id,
        quantity,
        price: product?.price,
      };

      const response = await fetch(`${config.API_BASE_URL}/api/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          IdToken: `Bearer ${idToken}`,
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) throw new Error("Failed to add product");

      return await response.json();
    } catch (err) {
      setError(err.message);
      throw err; // rethrow so UI can catch
    } finally {
      setLoading(false);
    }
  };

  return { addItem, loading, error };
};

export default useAddItem;
