import React from 'react';
import PropTypes from 'prop-types';
import { Text, Container } from './pagefooter.css';
import Img from 'gatsby-image';

const PageFooter = ({ as = 'span', size, align, img, text }) => {
  return (
    <Container>
      <Text as={as} size={size} align={align}>
        {text}
      </Text>
      {img.src.substring(img.src.length - 8, img.src.length) !== 'none.png' && (
        <Img fluid={img} alt={text} />
      )}
    </Container>
  );
};

PageFooter.propTypes = {
  children: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['large', 'medium']),
  as: PropTypes.string,
  img: PropTypes.string,
  text: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center']),
};

export default PageFooter;
