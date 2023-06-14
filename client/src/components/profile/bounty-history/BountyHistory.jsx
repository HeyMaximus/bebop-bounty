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
import BountyCardFront from '../../bounty-page/BountyCard.jsx';
import OfferHistoryList from '../offer-history/OfferHistoryList.jsx';
import TransactionHistoryList from '../transaction-history/TransactionHistoryList.jsx';

import { StyledBountyBoardWrapper } from '../../bounty-page/StyledBountyBoard';

const Host = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

//mock data
const fakeContext = [
  {
    id: 1,
    buyer_id: 1,
    name: 'Red Eye',
    description: 'Rare drug',
    condition: 'like new',
    category: 'gadget',
    city: 'Mars',
    state: 'Venus',
    completed: false,
    price: 300,
    deadline: '2023-06-20 0:00:00',
    preferred_payment: 'paypal',
    image:
      'https://static.wikia.nocookie.net/cowboybebop/images/a/a2/Be.png/revision/latest/scale-to-width-down/250?cb=20131205144347',
    created_at: '2023-01-01 00:00:00',
  },
  {
    id: 2,
    buyer_id: 2,
    name: 'Beta Tape',
    description: 'Classic show',
    condition: 'new',
    category: 'clothing',
    city: 'Ganymede',
    state: 'Jupiter',
    completed: false,
    price: 100,
    deadline: '2023-06-25 0:00:00',
    preferred_payment: 'venmo',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Betamax-blank-rear.jpg/220px-Betamax-blank-rear.jpg',
    created_at: '2023-01-02 00:00:00',
  },
  {
    id: 3,
    buyer_id: 3,
    name: 'Data Dog',
    description: 'Special breed dog',
    condition: 'good',
    category: 'gadget',
    city: 'Mars',
    state: 'Earth',
    completed: false,
    price: 500,
    deadline: '2023-06-30 0:00:00',
    preferred_payment: 'zelle',
    image:
      'https://static.wikia.nocookie.net/cowboybebop/images/d/d1/2_Ein2.png/revision/latest?cb=20090316153743',
    created_at: '2023-01-03 00:00:00',
  },
  {
    id: 4,
    buyer_id: 4,
    name: 'iPhone 12',
    description: 'Smartphone',
    condition: 'like new',
    category: 'gadget',
    city: 'Earth',
    state: 'Saturn',
    completed: false,
    price: 800,
    deadline: '2023-06-22 0:00:00',
    preferred_payment: 'paypal',
    image: 'https://i.insider.com/5f8f4178dace450018a3e489?width=700',
    created_at: '2023-01-04 00:00:00',
  },
];


function BountyHistory() {
  // const { userBounties } = useContext(GlobalContext);
  const [showOffers, setShowOffers] = useState(false);
  const [bountyId, setBountyId] = useState('');
  //grab userID from global context
  //Off Canvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    console.log('triggered');
    setBountyId(1); //retrieve id from event and update state with it
    setShow(true);
  };

  return (
    <div>
      <StyledBountyBoardWrapper>
        <Container fluid="lg">
          <Row>
            <Col sm={10}>
              <div>Your Open Bounties</div>
              <div><Stack direction="horizontal" gap={1}>
                {fakeContext.map((bounty) => (
                  <div onClick={(e) => handleShow(e)}><BountyCardFront id={bounty.id} Context={bounty} /></div>
                ))}
              </Stack></div>
            </Col>
            <Col sm={2}>
              <div>Bounty Transaction History</div>
              <TransactionHistoryList />
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
      </StyledBountyBoardWrapper>
    </div>
  );
}

export default BountyHistory;
