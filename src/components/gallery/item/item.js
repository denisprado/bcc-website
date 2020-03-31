import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/title';
import Text from 'components/text';
import Img from 'gatsby-image';

import { Container, ContainerText } from './item.css';

const Item = ({ text, image, title, sizeText, sizeTitle, bgCardColor }) => (
  <Container bgCardColor={bgCardColor}>
    {image && (
      <figure>
        <Img
          fluid={
            image.childImageSharp.fluid ? image.childImageSharp.fluid : image
          }
          alt={text && text.childMarkdownRemark.html}
        />
      </figure>
    )}
    {title && (
      <ContainerText>
        <Title as="h2" size={sizeTitle}>
          {title}
        </Title>
      </ContainerText>
    )}
    {text && (
      <ContainerText>
        <Text size={sizeText}>
          <span
            dangerouslySetInnerHTML={{
              __html: text.childMarkdownRemark.html,
            }}
          />
        </Text>
      </ContainerText>
    )}
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
