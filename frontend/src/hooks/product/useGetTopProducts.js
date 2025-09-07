import { useState, useEffect } from "react";
import  config  from "../../config";

const useGetTopProducts = () => {
  const [topProducts, setTopProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        const response = await fetch(`${config.API_BASE_URL}/api/products/top`);
        if (!response.ok) throw new Error("Failed to fetch top products");
        const data = await response.json();
        setTopProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopProducts();
  }, []);

  return { topProducts, loading, error };
};

export default useGetTopProducts;
