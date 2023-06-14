import styled, { keyframes } from 'styled-components';
import logo from '../../../../dist/assets/CbShip_Black_.png';

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
  background-image: url(${logo});
  background-size: cover;
  font-size: 35px;
  grid-column: span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
  padding-left: 40px;
  padding-bottom: 10px;
`;

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

// ========================================================
// ===================== Search Bar =======================
// ========================================================
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

// ========================================================
// ==================== Profile Pic =======================
// ========================================================
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

// ========================================================
// ==================== Profile Menu ======================
// ========================================================
const showModal = keyframes`
  from {
    opacity: 0;
  }
  to {
    opactiy: 1;
  }
`;
export const UpArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #e7e5d5;
  position: absolute;
  right: 11%;
  top: 140px;
  animation: ${showModal} 1s forwards ease-out;
`;
export const ProfileMenuContainer = styled.div`
  position: absolute;
  right: 10%;
  border: solid 1px;
  border-top: transparent;
  width: 380px;
  height: 430px;
  top: 150px;
  animation: ${showModal} 1s forwards ease-out;
  background-color: #e7e5d5;
  color: #3e4334;
  box-shadow: 5px 5px 5px rgb(62, 67, 52);
  z-index: 2;
`;

export const ProfileMenuHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #3e4334;
  > img {
    height: 75px;
    width: 75px;
    border-radius: 50px;
    object-fit: cover;
    grid-column-start: 2;
    margin-right: 20px;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: Roboto;
    font-weight: 400;
    grid-column-start: 3;
    margin-left: 10px;
  }
`;
export const ProfileMenuProperties = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 40px;
  height: 260px;
  justify-content: space-between;
  > button {
    font-family: 'Coromorant Garamond', serif;
    font-size: 18px;
    cursor: pointer;
    color: #3e4334;
  }
`;

// ========================================================
// ==================== Profile Pic =======================
// ========================================================
export const ListBountyContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  /* z-index: 3; */
`;
export const ListBountyOverlay = styled(ListBountyContainer)`
  background: rgba(0, 0, 0, 0.5);
`;
export const ListBountyBody = styled.div`
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #e7e5d5;
  padding: 14px 28px;
  border-radius: 1px;
  width: 400px;
  height: 400px;
  overflow-y: auto;
  color: #3e4334;
  > button {
    color: rgb(62, 67, 52);
    font-family: 'Coromorant Garamond', serif;
    font-size: 15px;
    cursor: pointer;
    float: right;
  }
  > button:hover {
    transform: scale(1.3) perspective(1px);
    transition-duration: 0.4s;
  }
  > h2 {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;
export const ListBountyContentContainer = styled.div`
  border: solid 1px #3e4334;
  height: 270px;
`;
export const ListBountyBtn = styled.button.attrs({
  className: 'list-bounty-btn',
})`
  position: relative;
  right: 40%;
  margin-top: 13px;
`;
