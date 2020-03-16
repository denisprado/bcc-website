import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/Carousel/item';
import { Container } from './Carousel.css';

function Carousel({ items }) {
  return (
    <Container>
      {console.log(items)}
      {items.map((item, i) => (
        <Item {...item} key={i} />
      ))}
    </Container>
  );
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carousel;
