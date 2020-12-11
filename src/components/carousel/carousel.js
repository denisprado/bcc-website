import Item from 'components/carousel/item';
import Title from 'components/title';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { accent } from '../../constants/theme';
import {
  Back,
  Banner,
  Button,
  Container,
  Fwd,
  Menu,
  MenuItem,
  CirclesContainer,
  CircleItem,
} from './carousel.css';

function Carousel({ items }) {
  const [index, setIndex] = useState(0);
  const length = items.length - 1;
  const myItems = items;
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1);
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1);

  const CircleItems = ({ items, index }) => {
    return (
      <CirclesContainer>
        {items.map((item) => (
          <CircleItem
            key={item.id}
            active={item.id === index}
            onClick={() => setIndex(item.id)}
          />
        ))}
      </CirclesContainer>
    );
  };

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
              <CircleItems items={myItems} index={index} />
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
