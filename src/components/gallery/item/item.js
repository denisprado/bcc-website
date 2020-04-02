import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/title';
import Text from 'components/text';
import Img from 'gatsby-image';

import { Container, ContainerText } from './item.css';

const Item = ({ text, image, title, sizeText, sizeTitle, bgCardColor }) => (
  <Container bgCardColor={bgCardColor}>
    <>
      {image && (
        <Img
          fixed={
            image.childImageSharp.fixed ? image.childImageSharp.fixed : image
          }
          alt={text && text}
        />
      )}
      <ContainerText>
        {title && (
          <Title as="h2" size={sizeTitle}>
            {title}
          </Title>
        )}
        {text && (
          <Text size={sizeText}>
            <span
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />
          </Text>
        )}
      </ContainerText>
    </>
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
