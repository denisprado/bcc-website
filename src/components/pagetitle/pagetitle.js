import Title from 'components/title';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { Container } from './pagetitle.css';

const PageTitle = ({ as = 'span', align, img, text }) => {
  return (
    <Container>
      {img.src.substring(img.src.length - 8, img.src.length) !== 'none.png' && (
        <Img fluid={img} alt={text} />
      )}
      <Title as={as}
        size={'small'}
        align={align}>
        <span
          dangerouslySetInnerHTML={{ __html: text }}
        >
        </span>
      </Title>
    </Container>
  );
};

PageTitle.propTypes = {
  children: PropTypes.object,
  size: PropTypes.oneOf(['small', 'large', 'medium']),
  as: PropTypes.string,
  img: PropTypes.object,
  text: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

export default PageTitle;
