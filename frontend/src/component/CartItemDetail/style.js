/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  display: flex;
  gap: 20px;
  padding: 16px;
  border-bottom: 1px solid #ddd;
  align-items: center;
`;

export const imageBox = css`
  width: 100px;
  height: 100px;
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
  gap: 8px;
`;

export const title = css`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

export const description = css`
  font-size: 14px;
  color: #555;
`;

export const price = css`
  font-size: 16px;
  font-weight: 600;
  color: #e91e63;
`;

export const quantityBox = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const quantityButton = css`
  background-color: #1976d2;
  color: white;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background 0.3s ease;

  &:hover {
    background-color: #1565c0;
  }
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
