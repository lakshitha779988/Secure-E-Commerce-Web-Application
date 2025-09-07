/** @jsxImportSource @emotion/react */
import React, { useRef } from "react";
import * as styles from "./style";
import ProductCard from "../Product";
import { Button, Grid } from "@mui/material";

function ProductSlider({ products }) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstChild.offsetWidth + 20; // +gap
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  console.log(products)
  return (
    <Grid sx={styles.section}>
      <Grid sx={styles.sliderContainer}>
        <button
          css={[styles.arrow, styles.leftArrow]}
          onClick={() => scroll("left")}
        >
          ◀
        </button>
        <Grid sx={styles.slider} ref={sliderRef}>
          {products.map((p, index) => {
            console.log(p.imageUrlList[0])
            return(
            <Grid key={index} sx={styles.productCardWrapper}>
              <ProductCard
                product={p}
              />
            </Grid>)
})}
        </Grid>
        <button
          css={[styles.arrow, styles.rightArrow]}
          onClick={() => scroll("right")}
        >
          ▶
        </button>
      </Grid>
    </Grid>
  );
}

export default ProductSlider;
