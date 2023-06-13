import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { GlobalContextProvider } from './GlobalContext.jsx';
import SignUp from './signup/SignUp.jsx';
import Landing from './landing/Landing.jsx';
import Profile from './profile/Profile.jsx';
import Login from './login/Login.jsx';
import BountyHistory from './profile/bounty-history/BountyHistory.jsx';
import BountyPage from './bounty-page/BountyPage.jsx';
import OfferHistory from './profile/offer-history/OfferHistory.jsx';
import UserProfile from './user-profile/UserProfile.jsx';

const theme = {
}
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #4D4E67;
    color: white;
    font-family: 'Coromorant Garamond', serif;
  }
  button {
    border: none;
    background: none;
  }
  button::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: rgb(62, 67, 52);
    transition: width 0.4s;
  }
  button:hover::after {
    width: 100%;
  }
  input {
    background: none;
    border: none;
    border-bottom: 1px solid white;
  }
  input:focus {
    outline: none;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalContextProvider>
        {/* <div>Bebop Bounty</div> */}
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate to="landing" />} />
            <Route path="landing" element={<Landing />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="bounty-page" element={<BountyPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/bounty-history" element={<BountyHistory />} />
            <Route path="profile/offer-history" element={<OfferHistory />} />
            <Route path="/*" element={<Navigate to="landing" />} />
          </Routes>
        </BrowserRouter>
        <Outlet />
      </GlobalContextProvider>
    </ThemeProvider>
  );
}

export default App;
