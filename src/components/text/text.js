import React from 'react';
import PropTypes from 'prop-types';
import { TextContainer } from './text.css';

const Text = ({ children, as = 'span', size, align }) => {
  return (
    <TextContainer as={as} size={size} align={align}>
      {children}
    </TextContainer>
  );
};

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  as: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

export default Text;
