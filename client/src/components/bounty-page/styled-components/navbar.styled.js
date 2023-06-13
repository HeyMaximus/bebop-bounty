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
  grid-column-start: 9;
  cursor: pointer;
  font-size: 20px;
`;

export const StyledNavBar = styled.nav`
  border: solid 1px;
  width: 90%;
  margin: auto;
  margin-top: 30px;
  display: grid;
  height: 100px;
  grid-template-columns: repeat(10, 1fr);
  grid-column-gap: 10px;
  grid-template-rows: 100px;
`;

export const StyledNavLogo = styled.div`
  /* border: solid 1px; */
  font-size: 35px;
  grid-column: span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  white-space: pre-wrap;
`;

export const StyledSearchBar = styled.div`
  /* border: solid 1px; */
  grid-column: span 3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledSearchInput = styled.input`
  border: none;
  border-bottom: 1px solid;
  margin-left: 30px;
  width: 95%;
  &:focus {
    outline: none;
  }
`;

export const StyledSearchButton = styled.button`
  border: none;
  background: none;
  border-bottom: solid 1px;
  position: relative;
  top: -1.5%;
  cursor: pointer;
  > svg:hover {
    transform: scale(1.2) perspective(1px);
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
`;
