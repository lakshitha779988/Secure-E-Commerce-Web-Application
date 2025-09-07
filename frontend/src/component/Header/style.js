/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const headerContainer = css`
  background-color: #ffffff;
  padding: 0 80px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

export const toolbar = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const logo = css`
  font-weight: 700;
  font-size: 1.8rem;
  color: #1976d2;
  text-decoration: none;
`;

export const menu = css`
  display: flex;
  gap: 30px;
`;

export const menuItem = css`
  text-transform: none; /* disable uppercase */
  font-weight: 500;
  color: #333;
  &:hover {
    color: #1976d2;
  }

  &.active {
    color: #1976d2;
    font-weight: 700;
  }
`;
