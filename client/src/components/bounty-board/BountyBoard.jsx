import React, { useContext } from 'react';
import GlobalContext from '../GlobalContext.jsx';
import BountyCard from './BountyCard.jsx';
import { StyledBountyBoardWrapper, StyledDropdown } from './StyledBountyBoard';

export default function BountyBoard() {
  // const Context = useContext(GlobalContext);

  // const cards = <BountyCard Context={Context} />;
  const cards = <BountyCard Context={'Context'} />;
  return (
    <StyledBountyBoardWrapper>
      <StyledDropdown>
        <option name="Clothing">Clothing</option>
        <option name="Clothing">Clothing</option>
        <option name="Decor">Decor</option>
        <option name="Furniture">Furniture</option>
        <option name="Gadgets">Gadgets</option>
      </StyledDropdown>
      {cards}
    </StyledBountyBoardWrapper>
  );
}
