import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

//boostrap layout styling
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';

import GlobalContext from '../../GlobalContext.jsx';
import BountyCard from '../../BountyPage/BountyCard.jsx';
import OfferHistoryList from '../offer-history/OfferHistoryList.jsx';
import TransactionHistoryList from '../transaction-history/TransactionHistoryList.jsx';

const Host = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

function BountyHistory() {
  const { userBounties } = useContext(GlobalContext);
  const [showOffers, setShowOffers] = useState(false);
  const [bountyId, setBountyId] = useState('');

  //Off Canvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setBountyId() //retrieve id from event and update state with it
    setShow(true)
  };

  const handleShowOffers = (e) => {
    setBountyId();
    setShowOffers(true);
  };

  return (
    <Host>
      <Container>
        <Col>
          <div>Bounty History</div>
          <Stack direction="horizontal" gap={3}>
            {userBounties.bounties.map((bounty) => (
              <BountyCard onClick={(e) => handleShow(e)} bounty={bounty} />
            ))}
          </Stack>
        </Col>
        <Col><div>Transaction History</div>
              <TransactionHistoryList userId={userBounties.Id} />
        </Col>
      </Container>
    </Host>

    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Bounty Offers</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <OfferHistoryList bountyId={bountyId}/>
        </Offcanvas.Body>
    </Offcanvas>

  );
}

export default BountyHistory;
