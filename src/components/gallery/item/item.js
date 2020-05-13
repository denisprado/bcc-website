import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/title';
import Text from 'components/text';
import Img from 'gatsby-image';
import IO from 'components/io';

import { Container, ContainerText, ContainerTitle, ContainerImage } from './item.css';


const Item = ({
  text,
  image,
  title,
  sizeText,
  sizeImage,
  sizeTitle,
  bgCardColor,
  id
}) => (
    <IO rootMargin="-50px">
      {({ isVisible, hasBeenVisible }) => (
        <Container bgCardColor={bgCardColor} isVisible={isVisible} hasBeenVisible={hasBeenVisible} id={id * .4}>
          {image && (
            <ContainerImage width={sizeImage}>
              {image.extension === 'svg' ? (
                <img
                  src={image.publicURL}
                  alt={title}
                />
              ) : (
                  <Img
                    fluid={
                      image.childImageSharp.fluid ? image.childImageSharp.fluid : image
                    }
                    alt={text && text}
                    width={sizeImage}
                  />
                )}
            </ContainerImage>
          )}
          <ContainerTitle>
            {title && (
              <Title as="h2" size={sizeTitle} >
                {title}
              </Title>
            )}
          </ContainerTitle>
          <ContainerText>
            {text && (
              <Text size={sizeText} align={'center'}>
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
        </Container>)}
    </IO >
  );

Item.propTypes = {
  bgCardColor: PropTypes.bool,
  id: PropTypes.number,
  text: PropTypes.string,
  sizeText: PropTypes.string,
  title: PropTypes.string,
  sizeTitle: PropTypes.string,
  sizeImage: PropTypes.string,
  image: PropTypes.object,
};

export default Item;
