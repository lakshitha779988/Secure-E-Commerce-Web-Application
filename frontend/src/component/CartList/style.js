/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const cartListContainer = css`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  overflow-y: auto;
`;

export const totalBox = css`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 16px;
  padding: 12px 16px;
  border-top: 1px solid #ddd;
`;

export const emptyMessage = css`
  text-align: center;
  color: #777;
  padding: 20px;
`;
