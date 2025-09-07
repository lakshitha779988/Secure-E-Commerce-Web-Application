/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Box, Typography, Button, Snackbar, Alert } from "@mui/material";
import * as styles from "./style";
import useAddItem from "../../hooks/cart/useAddItem";

function ProductDetail({product, onClose }) {
  const { addItem, loading } = useAddItem();

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleAddToCart = async () => {
    try {
      await addItem(product, 1); // quantity default 1
      setSnackbar({
        open: true,
        message: "Added to cart successfully!",
        severity: "success",
      });

      // close slide bar after short delay
      setTimeout(() => {
        if (onClose) onClose();
      }, 1500);
    } catch (err) {
      setSnackbar({
        open: true,
        message: err.message || "Failed to add product",
        severity: "error",
      });
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box css={styles.detailContainer}>
      {/* Left Image */}
      <Box css={styles.imageBox}>
        <img css={styles.productImage} src={product?.imageUrlList[0]} alt={product?.title} />
      </Box>

      {/* Right Info */}
      <Box css={styles.infoBox}>
        <Typography css={styles.title} variant="h4">
          {product?.title}
        </Typography>
        <Typography css={styles.description}>{product?.description}</Typography>
        <Typography css={styles.price}>{`$${product?.price}`}</Typography>
        <Button
          css={styles.actionButton}
          onClick={handleAddToCart}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add to Cart"}
        </Button>
      </Box>

      {/* Snackbar for feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ProductDetail;
