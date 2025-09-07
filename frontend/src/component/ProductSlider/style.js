/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const section = css`
  padding: 40px 20px;
  background-color: #f8f8f8;
`;

export const sliderContainer = css`
  position: relative;
  display: flex;
  align-items: center;
 
`;

export const slider = css`
  display: flex;
  gap: 20px;
  overflow-x: hidden; /* hide scrollbar */
  scroll-behavior: smooth;
  
  
`;

export const arrow = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #1976d2;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 2;
  font-size: 1.2rem;

  &:hover {
    background: #1259a4;
  }
`;

export const leftArrow = css`
  left: -20px;
`;

export const rightArrow = css`
  right: -20px;
`;

export const productCardWrapper = css`
  flex: 0 0 25%; /* default 4 items per row on large screens */
  @media (max-width: 1024px) {
    flex: 0 0 50%; /* 2 items per row on medium screens */
  }
  @media (max-width: 600px) {
    flex: 0 0 100%; /* 1 item per row on mobile */
  }
`;
