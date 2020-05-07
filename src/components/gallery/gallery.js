import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';
import { Container } from './gallery.css';

function Gallery({ items }) {
  return (
    <Container size={items.length}>
      {items.map((item, i) => (
        <Item {...item} key={i} id={i} />
      ))}
    </Container>
  );
}

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
