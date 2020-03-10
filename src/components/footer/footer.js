import React from 'react';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container } from './footer.css';

import Nav from 'components/footer/nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '50%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Footer = () => (
  <AnimatedContainer>
    <Container>
      <Nav />
    </Container>
  </AnimatedContainer>
);

export default Footer;
