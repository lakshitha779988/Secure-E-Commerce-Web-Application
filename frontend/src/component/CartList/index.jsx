/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Box, Typography, CircularProgress, Alert, Button } from "@mui/material";
import CartItem from "../CartItem";
import * as styles from "./style";
import useGetAllItems from "../../hooks/cart/useGetAllItems";
import OrderForm from "../OrderForm"; // new component

function CartList({ onRemove }) {
  const { items, loading, error } = useGetAllItems();
  const [checkout, setCheckout] = useState(false);

  if (loading) {
    return (
      <Box css={styles.loadingBox}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" css={styles.errorBox}>
        {error}
      </Alert>
    );
  }

  if (!items || items.length === 0) {
    return <Typography css={styles.emptyMessage}>Your cart is empty</Typography>;
  }

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (checkout) {
    return <OrderForm items={items} totalPrice={totalPrice} />;
  }

  return (
    <Box>
      <Box css={styles.cartListContainer}>
        {items.map((item) => (
          <CartItem
            key={item.productId || item.id}
            product={item?.product}
            quantity={item?.quantity}
            onRemove={onRemove}
          />
        ))}
      </Box>

      <Box css={styles.totalBox}>
        <Typography>Total:</Typography>
        <Typography>${totalPrice.toFixed(2)}</Typography>
      </Box>

      <Box css={styles.checkoutBox}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCheckout(true)}
        >
          Checkout
        </Button>
      </Box>
    </Box>
  );
}

export default CartList;
