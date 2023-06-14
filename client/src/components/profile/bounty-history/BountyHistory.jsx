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
import BountyCard from '../../bounty-page/BountyCard.jsx';
import OfferHistoryList from '../offer-history/OfferHistoryList.jsx';
import TransactionHistoryList from '../transaction-history/TransactionHistoryList.jsx';

const Host = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

function BountyHistory() {
  // const { userBounties } = useContext(GlobalContext);
  const [showOffers, setShowOffers] = useState(false);
  const [bountyId, setBountyId] = useState('');

  //Off Canvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    console.log('triggered')
    setBountyId(1) //retrieve id from event and update state with it
    setShow(true);
  };

  return (
    <div>
      <Container fluid="lg">
        <Row>
        <Col sm={10}>
          <div>Bounty History</div>
          <div><Stack direction="horizontal" gap={1}>
            {[1, 2, 3, 4].map((bounty) => (
              <div onClick={(e) => handleShow(e)}><BountyCard id={bounty} bounty={bounty} /></div>
            ))}
          </Stack></div>
        </Col>
        <Col sm={2}>
          <div>Transaction History</div>
          <TransactionHistoryList userId={bountyId} />
        </Col>
        </Row>
        </Container>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Bounty Offers</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <OfferHistoryList bountyId={bountyId} />
        </Offcanvas.Body>
      </Offcanvas>
      </div>



  );
}

export default BountyHistory;
