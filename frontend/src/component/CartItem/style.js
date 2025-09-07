/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const cartItemContainer = css`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  border-bottom: 1px solid #ddd;
`;

export const imageBox = css`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
`;

export const productImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const infoBox = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const title = css`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

export const price = css`
  font-size: 14px;
  color: #e91e63;
  font-weight: 500;
`;

export const quantityBox = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const removeButton = css`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: background 0.3s ease;

  &:hover {
    background-color: #d32f2f;
  }
`;
