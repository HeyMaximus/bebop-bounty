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
