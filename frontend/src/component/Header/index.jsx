/** @jsxImportSource @emotion/react */
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import * as styles from "./style";
import { useAuth } from "../../hooks/useAuth";
import { useGetProfile } from "../../hooks/profile/useGetProfile";

function Header() {
  const { login, signOut, isAuthenticated } = useAuth();
  const { profile, loading } = useGetProfile();
  console.log(profile);
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      css={styles.headerContainer}
    >
      <Toolbar css={styles.toolbar}>
        {/* Logo */}
        <Typography variant="h6" component={NavLink} to="/" css={styles.logo}>
          MyShop
        </Typography>

        {/* Menu */}
        <div css={styles.menu}>
          <Button component={NavLink} to="/all-products" css={styles.menuItem}>
            All Products
          </Button>
          <Button component={NavLink} to="/cart" css={styles.menuItem}>
            Cart
          </Button>
          <Button component={NavLink} to="/order" css={styles.menuItem}>
            Orders
          </Button>
          {isAuthenticated ? (
            <div>
              {loading ? (
                "Loading..."
              ) : (
                <span>Hello, {profile?.firstName}</span>
              )}
              <Button onClick={signOut}>Logout</Button>
            </div>
          ) : (
            <Button onClick={login}>Login</Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
