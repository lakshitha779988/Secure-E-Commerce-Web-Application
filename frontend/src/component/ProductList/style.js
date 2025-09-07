/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const listContainer = css`
  display: grid;
  gap: 24px;
  padding: 24px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

export const emptyMessage = css`
  text-align: center;
  color: #777;
  padding: 40px;
  font-size: 1.2rem;
`;
