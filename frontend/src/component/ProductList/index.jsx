/** @jsxImportSource @emotion/react */
import React from "react";
import * as styles from "./style";
import ProductCard from "../Product"; // Make sure you have ProductCard component

function ProductList({ products, onAddToCart }) {
  if (!products || products.length === 0) {
    return <div css={styles.emptyMessage}>No products available</div>;
  }

  return (
    <div css={styles.listContainer}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={() => onAddToCart(product)}
        />
      ))}
    </div>
  );
}

export default ProductList;
