import styled from 'styled-components';

export const BountyPageBorder = styled.div`
  border: solid 4px #3e4334;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  height: 100%;
  width: 92%;
  height: 900px;
`;

export const FilterBar = styled.div`
  border-bottom: solid 1px;
  margin: auto;
  margin-top: 30px;
  width: 93%;
`;

export const FilterSelector = styled.select`
  font-family: 'Coromorant Garamond', serif;
  font-weight: lighter;
  font-size: 20px;
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
