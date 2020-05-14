import React from 'react';
import PropTypes from 'prop-types';
import { Title as TitleContainer } from './title.css';

const Title = ({ children, as = 'span', size, align }) => {
  return (
    <TitleContainer as={as} size={size} align={align}>
      {children}
    </TitleContainer>
  );
};

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  as: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large', 'medium']),
  align: PropTypes.oneOf(['center']),
};

export default Title;
