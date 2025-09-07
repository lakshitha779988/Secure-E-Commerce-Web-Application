/** @jsxImportSource @emotion/react */
import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Eye } from "lucide-react"; // or use MUI Icon if you prefer
import * as styles from "./style";

function OrderItem({ order, onView }) {
  return (
    <Box css={styles.itemContainer}>
      <Box>
        <Typography variant="subtitle1">Order #{order.orderNumber}</Typography>
        <Typography variant="body2">
          {new Date(order.orderDate).toLocaleDateString()}
        </Typography>
        <Typography variant="body2">
          Status: {order.status}
        </Typography>
        <Typography variant="body2">
          Total: ${order.totalAmount}
        </Typography>
      </Box>

      <IconButton onClick={onView} css={styles.viewButton}>
        <Eye size={20} />
      </IconButton>
    </Box>
  );
}

export default OrderItem;
