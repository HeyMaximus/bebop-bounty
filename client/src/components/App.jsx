/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../theme';
import { GlobalContextProvider } from './GlobalContext.jsx';
import SignUp from './signup/SignUp.jsx';
import Landing from './landing/Landing.jsx';
import Profile from './profile/Profile.jsx';
import Login from './login/Login.jsx';
import BountyHistory from './profile/bounty-history/BountyHistory.jsx';
import BountyPage from './bounty-page/BountyPage.jsx';
import OfferHistoryList from './profile/offer-history/OfferHistoryList.jsx';
import UserProfile from './user-profile/UserProfile.jsx';
import Footer from './common/footer/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


const theme = {};
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
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate to="landing" />} />
            <Route path="landing" element={<Landing />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="bounty-page" element={<BountyPage toggleTheme={toggleTheme} />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/bounty-history" element={<BountyHistory />} />
            <Route path="user-profile" element={<UserProfile />} />
            <Route path="profile/offer-history" element={<OfferHistoryList />} />
            <Route path="/*" element={<Navigate to="landing" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <Outlet />
      </ThemeProvider>
    </GlobalContextProvider>
  );
}

export default App;
