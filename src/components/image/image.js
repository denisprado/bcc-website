import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { ContainerImage } from './image.css';
const Image = ({ image, title, width }) => {
  return (
    <ContainerImage>
      {image.extension === 'svg' ? (
        <img src={image.publicURL} alt={title} style={{ width: width }} />
      ) : (
          <Img
            fluid={
              image.childImageSharp.fluid ? image.childImageSharp.fluid : image
            }
            alt={title && title}
            width={width}
          />
        )}
    </ContainerImage>
  );
};

Image.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  width: PropTypes.string
};

export default Image;
