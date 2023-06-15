import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

//boostrap layout styling
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
import { BountyPageBorder, FilterBar, FilterSelector } from '../../bounty-page/styled-components/bountypage.styled';
import NavBar from '../../common/nav-bar/NavBar.jsx';

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
  const [userBounties, setUserBounties] = useState([]);
  const [showOffers, setShowOffers] = useState(false);
  const [bountyId, setBountyId] = useState('');
  //grab userID from global context
  //Off Canvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setBountyId(1) //retrieve id from event and update state with it
    setShow(true);
  };

  const getUserBounties = () => {
    axios.get(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.SERVER_PORT}/api/bounties`, { params: { userID: 1 } })
      .then((r) => setUserBounties(r.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getUserBounties();
  }, []);

  return (
    <div>
      <style type="text/css">
        {`
    .offcanvas {
      background-color: rgba(0, 0, 0, .25);
      backdrop-filter: blur(10px);
      color: white;
    }
    `}
      </style>
      <BountyPageBorder>
        <NavBar />
        <StyledBountyBoardWrapper>
          <Container fluid>
            <Row>
              <Col lg="9">
                <h2>Your Open Bounties</h2>
                {userBounties.map((bounty) => (
                  <span onClick={(e) => handleShow(e)}><BountyCardFront id={bounty.id} Context={bounty} /></span>
                ))}
              </Col>
              <Col lg="3">
                <h2>Transaction History</h2>
                <TransactionHistoryList />
              </Col>
            </Row>
          </Container>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header>
              <Offcanvas.Title>Bounty Offers</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <OfferHistoryList bountyId={bountyId} />
            </Offcanvas.Body>
          </Offcanvas>
        </StyledBountyBoardWrapper>
      </BountyPageBorder>
    </div>
  );
}

export default BountyHistory;
