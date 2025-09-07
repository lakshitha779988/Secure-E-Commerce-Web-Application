/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border-bottom: 1px solid #ddd;
`;

export const productRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const productTitle = css`
  font-weight: 500;
  color: #333;
`;

export const productQuantity = css`
  font-size: 14px;
  color: #555;
`;

export const productPrice = css`
  font-weight: 600;
  color: #e91e63;
`;
