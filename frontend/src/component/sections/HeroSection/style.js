/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";




export const heroContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
  gap: 40px;
  background-color: #cff2ee;
  min-height: 80vh;
`;

export const heroLeft = css`
  flex: 1;
  display: flex;
  width: 500px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  margin-top: -100px;

  @media (max-width: 768px) {
    display: none; /* hide on screens smaller than 768px */
  }
`;

export const heroTitle = css`
  font-size: 4rem;                
  font-weight: 600;               
  color: #1976d2;                 
  line-height: 1.3;              
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1); 
  font-family: 'Roboto', sans-serif;             
`;


export const heroText = css`
  font-size: 1rem;
  color: #555;
  line-height: 0;
`;

export const heroButton = css`
  
  width: 200px;
  padding: 12px 0px;
  font-size: 1.1rem;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 50px;
  &:hover {
    background-color: #1259a4;
  }
`;

export const heroRight = css`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const heroImage = css`
  width: 100%;
  max-width: 450px;
 
`;

