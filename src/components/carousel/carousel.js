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
  Banner
} from './carousel.css';
import { accent } from '../../constants/theme';
import { IconContext } from 'react-icons';

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
                <IconContext.Provider value={{ size: 96 }}>
                  <Back />
                </IconContext.Provider>
              </Button>
            </MenuItem>

            <MenuItem>
              <Banner>

                <Title size="medium" as="h2" align="center" color={accent}>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.title,
                    }}
                  />
                </Title>
                <Item {...item} key={item.id} />
              </Banner>
            </MenuItem>

            <MenuItem>
              <Button key={item.id} onClick={() => handlePrevious()}>
                <IconContext.Provider value={{ size: 96 }}>
                  <Fwd />
                </IconContext.Provider>
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
