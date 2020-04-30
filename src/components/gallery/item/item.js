import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/title';
import Text from 'components/text';
import Img from 'gatsby-image';

import { Container, ContainerText, ContainerImage } from './item.css';

const Item = ({
  text,
  image,
  title,
  sizeText,
  sizeImage,
  sizeTitle,
  bgCardColor,
}) => (
  <Container bgCardColor={bgCardColor}>
    {image && (
      <ContainerImage width={sizeImage}>
        {image.extension === 'svg' ? (
          <img
            src={image.publicURL}
            alt={title}
            style={{ width: sizeImage, minHeight: '7rem' }}
          />
        ) : (
          <Img
            fluid={
              image.childImageSharp.fluid ? image.childImageSharp.fluid : image
            }
            alt={text && text}
          />
        )}
      </ContainerImage>
    )}
    <ContainerText>
      {title && (
        <Title as="h2" size={sizeTitle}>
          {title}
        </Title>
      )}
      {text && (
        <Text size={sizeText}>
          {
            <span
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />
          }
        </Text>
      )}
    </ContainerText>
  </Container>
);

Item.propTypes = {
  bgCardColor: PropTypes.bool,
  text: PropTypes.string,
  sizeText: PropTypes.string,
  title: PropTypes.string,
  sizeTitle: PropTypes.string,
  sizeImage: PropTypes.string,
  image: PropTypes.object,
};

export default Item;
