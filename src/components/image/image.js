import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { ContainerImage } from './image.css';
const Image = ({ image, title }) => {
  return (
    <ContainerImage>
      {image.extension === 'svg' ? (
        <img src={image.publicURL} alt={title} style={{ width: '100%' }} />
      ) : (
        <Img
          fluid={
            image.childImageSharp.fluid ? image.childImageSharp.fluid : image
          }
          alt={title && title}
          width={'50%'}
        />
      )}
      
    </ContainerImage>
  );
};

Image.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

export default Image;
