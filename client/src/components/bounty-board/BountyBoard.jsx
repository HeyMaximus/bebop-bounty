import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

const Host = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

function BountyBoard() {
  return (
    <Host>
      <div>Bounty Board</div>
    </Host>
  );
}

export default BountyBoard;
