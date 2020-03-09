import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container } from './header.css';

import Nav from 'components/header/nav';
import Img from 'gatsby-image';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '0%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title, logo }) => (
  <AnimatedContainer>
    <Container>
      <Link to="/">
        <img src={logo ? logo : {}} alt={title} />
      </Link>

      <Nav />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.object.isRequired,
};

export default Header;
