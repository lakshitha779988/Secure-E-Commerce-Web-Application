import Hero from "../../component/sections/HeroSection";
import { Grid, Typography } from "@mui/material";
import ProductSlider from "../../component/ProductSlider";
import * as styles from "./style";
import useGetTopProducts from "../../hooks/product/useGetTopProducts";

const Home = () => {
  const { topProducts, loading, error } = useGetTopProducts();

  return (
    <Grid>
      <Hero />

      <Grid sx={styles.scrollSection}>
        <Typography sx={styles.scrollSectionTitle}>
          Find Best Selling Products
        </Typography>

        {loading && <Typography>Loading top products...</Typography>}
        {error && <Typography color="error">{error}</Typography>}
        {!loading && !error && (
          <ProductSlider products={topProducts} />
        )}
      </Grid>
    </Grid>
  );
};

export default Home;
