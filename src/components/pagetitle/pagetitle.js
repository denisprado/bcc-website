import React from 'react';
import PropTypes from 'prop-types';
import { Text, Container } from './pagetitle.css';
import Img from 'gatsby-image';

const PageTitle = ({ as = 'span', size, align, img, text }) => {
  return (
    <Container>
      {img.src.substring(img.src.length - 8, img.src.length) !== 'none.png' && (
        <Img fluid={img} alt={text} />
      )}
      <Text as={as} size={size} align={align} dangerouslySetInnerHTML={{ __html: text }} />
    </Container>
  );
};

PageTitle.propTypes = {
  children: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['large', 'medium']),
  as: PropTypes.string,
  img: PropTypes.string,
  text: PropTypes.string,
  align: PropTypes.oneOf(['center']),
};

export default PageTitle;
