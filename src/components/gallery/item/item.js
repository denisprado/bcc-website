import Contact from 'components/contact';
import IO from 'components/io';
import Text from 'components/text';
import Title from 'components/title';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { Container, ContainerImage, ContainerText, ContainerTitle, ContainerComponent } from './item.css';



const Item = ({
  text,
  image,
  title,
  sizeText,
  sizeImage,
  boderRadius,
  component,
  sizeTitle,
  bgCardColor,
  id
}) => {
  return <IO rootMargin="-50px">
    {({ isVisible, hasBeenVisible }) => (

      <Container bgCardColor={bgCardColor} isVisible={isVisible} hasBeenVisible={hasBeenVisible} id={id * .4}>

        {image && (
          <ContainerImage width={sizeImage} >
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
                  imgStyle={{ borderRadius: boderRadius }}
                  className={'withBorder'}
                />
              )}
          </ContainerImage>
        )}
        <ContainerTitle>
          {title && (
            <Title as="h2" size={sizeTitle} align={'center'} >
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
        {component &&
          <ContainerComponent>
            <Contact />
          </ContainerComponent>
        }
      </Container>)}
  </IO >
};

Item.propTypes = {
  bgCardColor: PropTypes.bool,
  id: PropTypes.number,
  text: PropTypes.string,
  sizeText: PropTypes.string,
  title: PropTypes.string,
  sizeTitle: PropTypes.string,
  sizeImage: PropTypes.string,
  image: PropTypes.object,
  component: PropTypes.string,
  boderRadius: PropTypes.string
};

export default Item;
