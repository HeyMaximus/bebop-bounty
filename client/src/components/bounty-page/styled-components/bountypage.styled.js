import styled from 'styled-components';

export const StyledFilterBar = styled.div`
  border-bottom: solid 1px;
  margin: auto;
  margin-top: 30px;
  width: 93%;
  display: flex;
  justify-content: space-between;
`;

export const StyledSelect = styled.select`
  font-family: 'Coromorant Garamond', serif;
  font-weight: lighter;
  color: white;
  cursor: pointer;
  background: none;
  border: none;
  animation: growDown 300ms ease-in-out forwards
  &:hover: {
    transform: scale(1.3) perspective(1px);
    transition-duration: 0.3s;
  }
  &:focus {
    outline: none;
  }
`;

export const StyledLocation = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const StyledLocationInputs = styled.div`
  > button {
    color: white;
    cursor: pointer;
  }
  > input {
    border-bottom: none;
    color: white;
  }
`;

export const StyledSeeMore = styled.div`
  text-align: center;
  margin-top: 50px;
  cursor: pointer;
`;
