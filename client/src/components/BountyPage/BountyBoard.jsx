import React, { useContext } from 'react';
import GlobalContext from '../GlobalContext.jsx';
import BountyCard from './BountyCard.jsx';
import { StyledBountyBoardWrapper, StyledDropdown } from './StyledBountyBoard';

export default function BountyBoard() {
  const Context = useContext(GlobalContext);

  const cards = <BountyCard Context={Context} />;
  return (
    <StyledBountyBoardWrapper>
      <StyledDropdown>SORT BY</StyledDropdown>
      {cards}
    </StyledBountyBoardWrapper>
  );
}
