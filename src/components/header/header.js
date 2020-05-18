import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Container, LogoImg } from './header.css';


const Header = () => (
  <Container>
    <Link to="/">
      <LogoImg />
    </Link>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
