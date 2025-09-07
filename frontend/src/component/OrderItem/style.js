/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const itemCard = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 16px;
  background: #fff;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0px 4px 10px rgba(0,0,0,0.08);
  }
`;

export const itemInfo = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const orderId = css`
  font-weight: 600;
  font-size: 1rem;
`;

export const orderDate = css`
  font-size: 0.9rem;
  color: #757575;
`;

export const orderTotal = css`
  font-size: 1rem;
  font-weight: 500;
`;

export const actionIcons = css`
  display: flex;
  gap: 12px;
  align-items: center;
`;
