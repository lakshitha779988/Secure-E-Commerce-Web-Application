/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const drawerContent = css`
  width: 400px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const drawerTitle = css`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const section = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fafafa;
`;

export const sectionTitle = css`
  font-weight: 600;
  margin-bottom: 6px;
`;

export const field = css`
  font-size: 0.95rem;
  color: #444;
`;

export const closeButton = css`
  align-self: flex-end;
  margin-top: 8px;
`;
