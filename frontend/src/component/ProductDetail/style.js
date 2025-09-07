/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const detailContainer = css`
  display: flex;
  gap: 30px;
  padding: 30px;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const imageBox = css`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const productImage = css`
  max-width: 100%;
  height: auto;
  border-radius: 12px;
`;

export const infoBox = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const title = css`
  font-size: 28px;
  font-weight: bold;
  color: #333;
`;

export const description = css`
  font-size: 16px;
  color: #555;
  line-height: 1.5;
`;

export const price = css`
  font-size: 22px;
  font-weight: 600;
  color: #e91e63;
`;

export const actionButton = css`
  background-color: #1976d2;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #1565c0;
  }
`;
