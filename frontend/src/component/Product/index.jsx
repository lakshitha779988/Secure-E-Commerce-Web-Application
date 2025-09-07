/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as styles from "./style";
import SlideDrawer from '../SlideDrawer'
import { Button, Grid, Typography } from "@mui/material";
import ProductDetail from '../ProductDetail'


function ProductCard({id, image, title, description, price ,product}) {

  const [openDrawer,setOpenDrawer] = useState(false);
  

  const handleView = ()=>{
      setOpenDrawer(true);
  }
  const onClose = ()=>{
    setOpenDrawer(false);
  }


  return (
    <Grid sx={styles.card}>
      <img src={product?.imageUrlList[0]} alt={product?.title} css={styles.image} />
      <Grid sx={styles.content}>
        <Typography sx={styles.title}>{product?.title}</Typography>
        <Typography sx={styles.description}>{product?.description}</Typography>
        <Typography sx={styles.price}>${product?.price}</Typography>
        <Button sx={styles.button} onClick={handleView}>View Product</Button>
      </Grid>
      <SlideDrawer
        open={openDrawer}
        onClose={onClose}
        title={title}
        width={700}
      >
        <ProductDetail
          product={product}
        />
      </SlideDrawer>
    </Grid>
  );
}

export default ProductCard;
