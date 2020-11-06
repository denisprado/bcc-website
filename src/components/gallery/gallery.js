import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';
import Text from 'components/text';
import IO from 'components/io';
import ActiveTab from 'images/active-tab.png';

import {
  Container,
  ContainerItems,
  ContainerModal,
  Button,
  NoButton,
  ActiveTabContainer,
} from './gallery.css';

const Gallery = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setModalOpen(true), 4000);
  }, [index]);

  return (
    <IO rootMargin="-50px">
      {({ isVisible }) => (
        <Container>
          <ContainerItems size={items.length}>
            {items.map((item, i) =>
              item.modal ? (
                <Button
                  key={i}
                  onFocus={() => setIndex(i)}
                  active={i === index && item.modal && true}
                  onClick={() => {
                    setIndex(i);
                    setModalOpen(true);
                  }}
                  isModalOpen={modalOpen}
                  hasModal={item.modal}
                >
                  <Item {...item} id={i} />
                  <ActiveTabContainer isModalOpen={modalOpen} isVisible>
                    {i === index && item.modal && isVisible && modalOpen && (
                      <img src={ActiveTab} alt={item.title} />
                    )}
                  </ActiveTabContainer>
                </Button>
              ) : (
                <NoButton key={i}>
                  <Item {...item} id={i} />
                  <ActiveTabContainer isModalOpen={modalOpen} isVisible>
                    {i === index && item.modal && isVisible && modalOpen && (
                      <img src={ActiveTab} alt={item.title} />
                    )}
                  </ActiveTabContainer>
                </NoButton>
              )
            )}
          </ContainerItems>
          {items.map(
            (item, i) =>
              i === index &&
              item.modal && (
                <ContainerModal
                  key={i}
                  isVisible={isVisible}
                  isModalOpen={modalOpen}
                >
                  <Text>
                    {
                      <span
                        dangerouslySetInnerHTML={{
                          __html: item.modal,
                        }}
                      />
                    }
                  </Text>
                </ContainerModal>
              )
          )}
        </Container>
      )}
    </IO>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
