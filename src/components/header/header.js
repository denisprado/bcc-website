import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container, LogoImg } from './header.css';


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

const Header = () => (
  <AnimatedContainer>
    <Container>
      <Link to="/">
        <LogoImg />
      </Link>
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
