/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Box } from "@mui/material";
import OrderItem from "../OrderItem";
import OrderDetailDrawer from "../OrderDetailDrawer";
import * as styles from "./style";

function OrderList({ orders }) {
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <Box css={styles.listContainer}>
      {orders.map((order) => (
        <OrderItem
          key={order._id}
          order={order}
          onView={() => setSelectedOrder(order)}
        />
      ))}

      <OrderDetailDrawer
        order={selectedOrder}
        open={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
      />
    </Box>
  );
}

export default OrderList;
