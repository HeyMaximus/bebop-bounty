import styled, { createGlobalStyle } from 'styled-components';
import lightLogo from '../dist/assets/CbShip_Black_.png';
import darkLogo from '../dist/assets/CbShip_White.png';
import overlay from '../dist/assets/noisy-background.jpeg';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Coromorant Garamond', serif;
    background: ${({ theme }) => theme.body};
    /* background-image: url(overlay); */
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
  subBG: '#e7e5d5',
};
export const darkTheme = {
  body: 'black',
  text: 'white',
  logo: `url(${darkLogo})`,
  border: 'white',
  subBG: 'black',
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

// BountyCard
export const StyledBountyCard = styled.div`
  display: inline-block;
  border: 1.3px solid white;
  box-shadow: 3px 3px 3px rgb(62, 67, 52);
  width: 280px;
  height: 340px;
  margin-bottom: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.border};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.subBG};
`;

export const StyledBountyCardBack = styled(StyledBountyCard)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6%;
  background-color: ${({ theme }) => theme.subBG};
  color: ${({ theme }) => theme.border};
`;
