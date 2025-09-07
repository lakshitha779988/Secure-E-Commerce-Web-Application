/** @jsxImportSource @emotion/react */
import React from "react";
import { Box, Typography } from "@mui/material";
import * as styles from "./style";

function OrderItemDetail({ order }) {
  return (
    <Box css={styles.container}>
      {order.products.map((product) => (
        <Box css={styles.productRow} key={product.id}>
          <Typography css={styles.productTitle}>{product.title}</Typography>
          <Typography css={styles.productQuantity}>Qty: {product.quantity}</Typography>
          <Typography css={styles.productPrice}>
            ${(product.price * product.quantity).toFixed(2)}
          </Typography>
        </Box>
      ))}
      <Box css={styles.productRow} style={{ borderTop: "1px solid #ddd", paddingTop: "8px" }}>
        <Typography fontWeight="bold">Total</Typography>
        <Typography></Typography>
        <Typography fontWeight="bold">${order.total.toFixed(2)}</Typography>
      </Box>
    </Box>
  );
}

export default OrderItemDetail;
