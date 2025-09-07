/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import * as styles from "./style";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SlideDrawer from '../SlideDrawer'
import CartItemDetail from '../CartItemDetail'
function CartItem({quantity, product, onRemove }) {

  const [openDrawer,setOpenDrawer] = useState(false);
    
console.log(product)
  
    const handleView = ()=>{
        setOpenDrawer(true);
    }
    const onClose = ()=>{
      setOpenDrawer(false);
    }

  
    const onIncrement = ()=>{
      console.log("increment");
    }

    const onDecrement = ()=>{
      console.log("decrement");
    }



  return (
    <Grid css={styles.cartItemContainer}>
      <Box css={styles.imageBox}>
        <img css={styles.productImage} src={product.imageUrlList[0]} alt={product.name} />
      </Box>

      <Box css={styles.infoBox}>
        <Typography css={styles.title}>{product.name}</Typography>
        <Typography css={styles.price}>${product.price}</Typography>
        <Box css={styles.quantityBox}>
          <Typography>Qty: {quantity}</Typography>
        </Box>
      </Box>

      <IconButton onClick={() => onRemove(product.id)}>
        <DeleteIcon color="error" />
      </IconButton>

       <IconButton onClick={handleView}>
        <RemoveRedEyeIcon  />
      </IconButton>


        <SlideDrawer
        open={openDrawer}
        onClose={onClose}
        title={product?.name}
        width={700}
      >
        <CartItemDetail
         product={product}
         onDecrement={onDecrement}
          onIncrement={onIncrement}
          onRemove={onRemove}
        />
      </SlideDrawer>
    </Grid>
  );
}

export default CartItem;
