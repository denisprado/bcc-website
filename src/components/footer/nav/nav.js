import { Link } from 'gatsby';
import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/barassa-cruz-consulting">
          <FaLinkedinIn />
        </a>
      </li>
    </ul>
  </Container>
);

export default Nav;
