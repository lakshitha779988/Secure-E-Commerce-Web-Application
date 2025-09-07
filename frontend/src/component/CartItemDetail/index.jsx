/** @jsxImportSource @emotion/react */
import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import * as styles from "./style";

function CartItemDetail({ product, onRemove, onIncrement, onDecrement }) {
  return (
    <Box css={styles.container}>
      {/* Product Image */}
      <Box css={styles.imageBox}>
        <img css={styles.productImage} src={product.image} alt={product.title} />
      </Box>

      {/* Info */}
      <Box css={styles.infoBox}>
        <Typography css={styles.title}>{product.title}</Typography>
        {product.description && (
          <Typography css={styles.description}>{product.description}</Typography>
        )}
        <Typography css={styles.price}>${product.price}</Typography>

        {/* Quantity Controls */}
        <Box css={styles.quantityBox}>
          <button
            css={styles.quantityButton}
            onClick={() => onDecrement(product.id)}
            disabled={product.quantity <= 1}
          >
            -
          </button>
          <Typography>{product.quantity}</Typography>
          <button css={styles.quantityButton} onClick={() => onIncrement(product.id)}>
            +
          </button>
        </Box>
      </Box>

      {/* Remove Button */}
      <IconButton onClick={() => onRemove(product.id)}>
        <DeleteIcon color="error" />
      </IconButton>
    </Box>
  );
}

export default CartItemDetail;
