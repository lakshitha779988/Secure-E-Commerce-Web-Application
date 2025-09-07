import { useState } from "react";
import config from "../../config";


//This hook is not use yet in the program
const useAddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addProduct = async (newProduct) => {
    setLoading(true);
    try {
      const response = await fetch(`${config.API_BASE_URL}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) throw new Error("Failed to add product");

      return await response.json();
    } catch (err) {
      setError(err.message);
      throw err; // so caller knows it failed
    } finally {
      setLoading(false);
    }
  };

  return { addProduct, loading, error };
};

export default useAddProduct;
