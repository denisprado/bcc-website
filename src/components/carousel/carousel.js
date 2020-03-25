import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Item from 'components/carousel/item';
import { Container, Menu, MenuItem, Button } from './carousel.css';

function Carousel({ items }) {
  const [index, setIndex] = useState(0);
  const length = items.length - 1;

  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1);
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1);

  return items.map(
    (item, i) =>
      i === index && (
        <Container>
          <Item {...item} key={i} />
          <Menu>
            <MenuItem>
              {items.map((item, i) =>
                i === index - 1 ? (
                  <Button key={i} onClick={() => handlePrevious()}>
                    {item.title}
                  </Button>
                ) : (
                  i === length &&
                  index === 0 && (
                    <Button key={i} onClick={() => handlePrevious()}>
                      {item.title}
                    </Button>
                  )
                )
              )}
            </MenuItem>
            <MenuItem>
              <Button
                active
                dangerouslySetInnerHTML={{
                  __html: item.title,
                }}
              />
            </MenuItem>
            <MenuItem>
              {items.map((item, i) =>
                i === index + 1 ? (
                  <Button key={i} onClick={() => handleNext()}>
                    {item.title}
                  </Button>
                ) : (
                  i === 0 &&
                  index === length && (
                    <Button key={i} onClick={() => handleNext()}>
                      {item.title}
                    </Button>
                  )
                )
              )}
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
