/** @jsxImportSource @emotion/react */
import React from "react";
import { Button } from "@mui/material";
import * as styles from "./style";

function CustomButton({
  children,
  variant = "contained",
  color = "primary",
  size = "medium",
  onClick,
  fullWidth = false,
  customCss = null,
  ...rest
}) {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      fullWidth={fullWidth}
      css={[styles.buttonStyle, customCss]}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
