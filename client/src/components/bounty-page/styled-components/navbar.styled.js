import styled from 'styled-components';

// export const StyledButton = styled.button`
//   border: none;
//   background: none;
//   &::after {
//     content: '';
//     display: block;
//     width: 0;
//     height: 2px;
//     background: black;
//     transition: width 0.4s;
//   }
//   &:hover::after {
//     width: 100%;
//   }
// `;
export const StyledListBountyBtn = styled.button`
  font-family: 'Coromorant Garamond', serif;
  color: white;
  grid-column-start: 9;
  cursor: pointer;
  font-size: 20px;
  &::after {
    background: white;
  }
`;

export const StyledNavBar = styled.nav`
  border: solid 1px;
  width: 93%;
  margin: auto;
  margin-top: 30px;
  display: grid;
  height: 100px;
  grid-template-columns: repeat(10, 1fr);
  grid-column-gap: 10px;
  grid-template-rows: 100px;
`;

export const StyledNavLogo = styled.div`
  font-size: 35px;
  grid-column: span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  white-space: pre-wrap;
`;

export const StyledSearchBar = styled.div`
  grid-column: span 4;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledSearchInput = styled.input`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: white;
  margin-left: 30px;
  width: 95%;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: white;
  }
`;

export const StyledSearchButton = styled.button`
  border: none;
  background: none;
  border-bottom: solid 1px white;
  position: relative;
  top: -1.5%;
  cursor: pointer;
  > svg:hover {
    transform: scale(1.3) perspective(1px);
    transition-duration: 0.3s;
  }
`;

export const StyledProfilePic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    height: 55px;
    width: 55px;
    border-radius: 30px;
    object-fit: cover;
    cursor: pointer;
  }
  &:hover {
    transform: scale(1.1) perspective(1px);
    transition-duration: 0.4s;
  }
`;
