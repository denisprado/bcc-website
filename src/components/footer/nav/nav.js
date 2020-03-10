import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/facebook">
          <FaFacebookF />
        </Link>
      </li>
      <li>
        <Link to="/facebook">
          <FaInstagram />
        </Link>
      </li>
      <li>
        <Link to="/linkedink">
          <FaLinkedinIn />
        </Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
