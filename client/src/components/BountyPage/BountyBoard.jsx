import React, { useContext } from 'react';
import GlobalContext from '../GlobalContext.jsx';
import BountyCard from './BountyCardFront.jsx';
import { BountyBoardWrapper, Dropdown } from './StyledBountyBoard';

export default function BountyBoard() {
  const Context = useContext(GlobalContext);

  const cards = <BountyCard Context={Context} />;
  return (
    <BountyBoardWrapper>
      <Dropdown>SORT BY</Dropdown>
      {cards}
    </BountyBoardWrapper>
  );
}
