/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const searchContainer = css`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 30px;
  padding: 6px 14px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const input = css`
  border: none;
  outline: none;
  flex: 1;
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 30px;
`;

export const button = css`
  background: #1976d2;
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s ease;

  &:hover {
    background: #1259a4;
  }
`;
