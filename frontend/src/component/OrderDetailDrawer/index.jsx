/** @jsxImportSource @emotion/react */
import React from "react";
import {
  Drawer,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import * as styles from "./style";

function OrderDetailDrawer({ order, open, onClose }) {
  if (!order) return null;

  return (
    <Drawer anchor="right" open={open} onClose={onClose} >
      <Box css={styles.drawerContainer} width={700}>
        <Typography variant="h6">Order #{order.orderNumber}</Typography>
        <Typography variant="body2" gutterBottom>
          Date: {new Date(order.orderDate).toLocaleString()}
        </Typography>
        <Typography variant="body2">Status: {order.status}</Typography>
        <Typography variant="body2">Payment: {order.paymentMethod}</Typography>
        <Typography variant="body2" gutterBottom>
          Total: ${order.totalAmount}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle1">Shipping Address</Typography>
        <Typography variant="body2">
          {order.shippingAddress.firstName} {order.shippingAddress.lastName}
        </Typography>
        <Typography variant="body2">
          {order.shippingAddress.street}, {order.shippingAddress.city},{" "}
          {order.shippingAddress.state}, {order.shippingAddress.postalCode}
        </Typography>
        <Typography variant="body2">
          {order.shippingAddress.country}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Phone: {order.shippingAddress.phone || "N/A"}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle1">Items</Typography>
        <List>
          {order.items.map((item, i) => (
            <ListItem key={i} css={styles.itemRow}>
              <ListItemText
                primary={`${item.name} (x${item.quantity})`}
                secondary={`$${item.price} each — Total $${item.total}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default OrderDetailDrawer;
