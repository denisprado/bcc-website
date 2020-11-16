import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Item from 'components/carousel/item';
import Title from 'components/title';
import {
  Container,
  Menu,
  MenuItem,
  Button,
  Fwd,
  Up,
  Back,
  Down,
} from './carousel.css';

function Carousel({ items }) {
  const [index, setIndex] = useState(0);
  const length = items.length - 1;

  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1);
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1);

  return items.map(
    (item) =>
      item.id === index && (
        <Container key={item.id}>
          <Menu>
            <MenuItem>
              <Button key={item.id} i onClick={() => handleNext()}>
                <Back />
                <Up />
              </Button>
            </MenuItem>

            <MenuItem>
              <Title size="default" as="h2" align="center">
                <span
                  dangerouslySetInnerHTML={{
                    __html: item.title,
                  }}
                />
              </Title>
              <Item {...item} key={item.id} />
            </MenuItem>

            <MenuItem>
              <Button key={item.id} onClick={() => handlePrevious()}>
                <Fwd />
                <Down />
              </Button>
            </MenuItem>
          </Menu>
        </Container>
      )
  );
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  item: PropTypes.arrayOf(PropTypes.object),
};

export default Carousel;
