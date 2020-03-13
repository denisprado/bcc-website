import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import { Title, Container, ContainerText } from './item.css';

const Item = ({ text, image }) =>
  image ? (
    <Container>
      <figure>
        <img
          src={
            image.childImageSharp.fluid.src
              ? image.childImageSharp.fluid.src
              : image
          }
          alt={text}
        />
        <ContainerText>
          <figcaption>
            <Title>{text}</Title>
          </figcaption>
        </ContainerText>
      </figure>
    </Container>
  ) : null;

Item.propTypes = {
  text: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
