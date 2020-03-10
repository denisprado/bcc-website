import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import { FaBars } from 'react-icons/fa';

const Nav = () => (
  <Container>
    <Link to="/">
      <FaBars />
    </Link>
  </Container>
);

export default Nav;
