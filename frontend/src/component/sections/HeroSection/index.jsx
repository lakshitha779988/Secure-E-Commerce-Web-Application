/** @jsxImportSource @emotion/react */
import React from "react";
import * as styles from "./style";
import heroImage from '../../../assets/hero.jpg';
import { Box, Typography, Button, Grid} from "@mui/material";


function Hero() {
  return (
    <Grid sx={styles.heroContainer}>
      {/* Left content */}
      <Box sx={styles.heroLeft}>
        <Typography sx={styles.heroTitle}>Scoops of Happiness in Every Bite!</Typography>
        <Typography sx={styles.heroText}>
          Handcrafted flavors, made fresh daily.
        </Typography>
        <Button sx={styles.heroButton}>Explore Flavors</Button>
      </Box>

      {/* Right image */}
      <Box sx={styles.heroRight}>
        <img
          css={styles.heroImage}
          src={heroImage}
          alt="Shopping"
        />
      </Box>
    </Grid>
  );
}

export default Hero;
