/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const scrollSection = css`
  display: flex;
  flex-direction: column;  /* stack title and products vertically */
  gap: 20px;
  padding: 40px 20px;
  background-color: #f8f8f8; /* optional light background */
`;

export const scrollSectionTitle = css`
  font-size: 2rem;
  font-weight: 600;         /* semi-bold */
  color: #000;              /* black */
  text-align: center;       /* center title */
`;

export const scrollProduct = css`
  display: flex;
  flex-direction: row;       /* horizontal scroll */
  gap: 20px;
  overflow-x: auto;          /* enable horizontal scrolling */
  scroll-behavior: smooth;   /* smooth scroll */
  padding-bottom: 10px;

  /* Optional: hide scrollbar for webkit browsers */
  &::-webkit-scrollbar {
    display: none;
  }
`;
