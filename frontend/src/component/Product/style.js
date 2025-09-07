/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const card = css`
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 280px;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

export const image = css`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const content = css`
  padding: 16px;
`;

export const title = css`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
`;

export const description = css`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 12px;
`;

export const price = css`
  font-size: 1.1rem;
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 16px;
`;

export const button = css`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #1259a4;
  }
`;
