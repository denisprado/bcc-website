import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';
import { Container } from './gallery.css';

function Gallery({ items }) {
  return (
    <Container>
      {console.log(items)}
      {items.map((item, i) => (
        <Item {...item} key={i} />
      ))}
    </Container>
  );
}

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
