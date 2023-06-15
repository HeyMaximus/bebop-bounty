import styled, { createGlobalStyle } from 'styled-components';
import lightLogo from '../dist/assets/CbShip_Black_.png';
import darkLogo from '../dist/assets/CbShip_White.png';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Coromorant Garamond', serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  button {
    border: none;
    background: none;
  }
  button::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: rgb(62, 67, 52);
    transition: width 0.4s;
  }
  button:hover::after {
    width: 100%;
  }
  input {
    background: none;
    border: none;
    border-bottom: 1px solid white;
  }
  input:focus {
    outline: none;
  }
`;

export const lightTheme = {
  body: '#4D4E67',
  text: 'white',
  logo: `url(${lightLogo})`,
  border: '#3e4334',
};
export const darkTheme = {
  body: 'black',
  text: 'white',
  logo: `url(${darkLogo})`,
  border: 'white',
};

export const StyledNavLogo = styled.div`
  background-image: ${({ theme }) => theme.logo};
  background-size: contain;
  background-position: 30%;
  background-repeat: no-repeat;
  font-size: 35px;
  grid-column: span 3;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
  padding-bottom: 10px;
  cursor: pointer;
`;

export const StyledBountyPageBorder = styled.div`
  border: solid 4px ${({ theme }) => theme.border};
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  height: 90%;
  width: 92%;
  min-height: 900px;
`;
