import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';
import Text from 'components/text';
import IO from 'components/io';

import { Container, ContainerItems, ContainerModal, Button } from './gallery.css';

const Gallery = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <IO rootMargin="-50px">
      {({ isVisible }) => (
        <Container>
          <ContainerItems size={items.length}>
            {items.map((item, i) => (
              <Button key={i} onFocus={() => setIndex(i)} active={(i === index) && item.modal && true} onClick={() => { setIndex(i); setModalOpen(true) }} isModalOpen={modalOpen}>
                <Item {...item} id={i} />
              </Button>
            ))}
          </ContainerItems>
          {items.map((item, i) => (
            i === index && item.modal &&
            <ContainerModal key={i} isVisible={isVisible} isModalOpen={modalOpen}>
              <Text size={'medium'}>{
                <span
                  dangerouslySetInnerHTML={{
                    __html: item.modal,
                  }}
                />
              }</Text>
            </ContainerModal>
          ))}
        </Container>
      )}
    </IO>
  )
}

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
