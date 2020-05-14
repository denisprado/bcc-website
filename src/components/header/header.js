import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
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
