import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './title.css';

const Title = ({ children, as = 'span', size, align }) => {
  return (
    <Text as={as} size={size} align={align}>
      {children}
    </Text>
  );
};

Title.propTypes = {
  children: PropTypes.object.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium']),
  align: PropTypes.oneOf(['center']),
};

export default Title;
