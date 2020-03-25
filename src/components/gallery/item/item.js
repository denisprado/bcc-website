import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/title';
import Text from 'components/text';

import { Container, ContainerText } from './item.css';

const Item = ({ text, image, title, sizeText, sizeTitle, bgCardColor }) => (
  <Container bgCardColor={bgCardColor}>
    {image ? (
      <figure>
        <img
          src={
            image.childImageSharp.fluid.src
              ? image.childImageSharp.fluid.src
              : image
          }
          alt={text && text.childMarkdownRemark.html}
        />
      </figure>
    ) : null}
    {title ? (
      <ContainerText>
        <Title as="h2" size={sizeTitle}>
          {title}
        </Title>
      </ContainerText>
    ) : null}
    {text ? (
      <ContainerText>
        <Text size={sizeText}>
          <span
            dangerouslySetInnerHTML={{
              __html: text.childMarkdownRemark.html,
            }}
          />
        </Text>
      </ContainerText>
    ) : null}
  </Container>
);

Item.propTypes = {
  bgCardColor: PropTypes.bool,
  text: PropTypes.object,
  sizeText: PropTypes.object,
  title: PropTypes.object,
  sizeTitle: PropTypes.object,
  image: PropTypes.object,
};

export default Item;
