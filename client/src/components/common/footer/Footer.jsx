import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  width: 100%;
  color: #fff;
  text-align: center;
  border: none;
`;

const Link = styled.a`
  color: #fff;
  margin: 0 10px;
  font-size: 0.8em;
  text-decoration: none;
  &:hover {
    color: #a5a9f6;
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
