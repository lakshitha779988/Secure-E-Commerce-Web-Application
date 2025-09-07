/** @jsxImportSource @emotion/react */
import React from "react";
import { Box, CircularProgress, Alert, Typography } from "@mui/material";
import useGetOrders from "../../hooks/order/useGetOrders";
import OrderList from "../../component/OrderList";
import * as styles from "./style";

function Order() {
  const { orders, loading, error } = useGetOrders();
  console.log("order",orders);
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

  if (!orders || orders.length === 0) {
    return <Typography css={styles.emptyMessage}>No orders found</Typography>;
  }

  return (
    <Box css={styles.pageContainer}>
      <Typography variant="h4" css={styles.pageTitle}>
        My Orders
      </Typography>
      <OrderList orders={orders} />
    </Box>
  );
}

export default Order;
