import { Link } from 'gatsby';
import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/linkedink">
          <FaLinkedinIn />
        </Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
