import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 20px 0;
  background-color: #4d4e67; // This color can be adjusted to match your background color
  color: #fff; // This will make the text color white, change it if you want another color
  text-align: center;
  z-index: 1000;
  border: none;
`;

const Link = styled.a`
  color: #fff; // This will make the link color white, change it if you want another color
  margin: 0 10px;
  font-size: 0.8em; // Adjust this value to change the size of the text
  text-decoration: none;
  &:hover {
    color: #a5a9f6; // Adjust this color to what you want for hover effect
  }
`;

const Team = styled.p`
  margin: 5px 0;
  font-size: 0.8em; // Adjust this value to change the size of the text
`;

export default function WebsiteFooter() {
  return (
    <Footer>
      <div>
        <Team>Made by:</Team>
        <Link href="https://github.com/XintongTheCoder" target="_blank" rel="noreferrer">
          Xintong Mi
        </Link>
        <Link href="https://github.com/sora62" target="_blank" rel="noreferrer">
          Sara Li
        </Link>
        <Link href="https://github.com/swinnik" target="_blank" rel="noreferrer">
          Sean Winnik
        </Link>
        <Link href="https://github.com/beanjermin" target="_blank" rel="noreferrer">
          Benjamin Pak
        </Link>
        <Link href="https://github.com/HeyMaximus" target="_blank" rel="noreferrer">
          Maximus Chen
        </Link>
        <Link href="https://github.com/dylanmwilliams" target="_blank" rel="noreferrer">
          Dylan Williams
        </Link>
      </div>
      <div>Bebop Bounty™</div>
    </Footer>
  );
}
