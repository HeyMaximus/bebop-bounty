import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

const Host = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

function BountyHistory() {
  return (
    <Host>
      <div>Bounty History</div>
    </Host>
  );
}

export default BountyHistory;
