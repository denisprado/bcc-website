import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './pagefooter.css';

const PageFooter = ({ children, as = 'span', size, align }) => {
  return (
    <Text as={as} size={size} align={align}>
      {children}
    </Text>
  );
};

PageFooter.propTypes = {
  children: PropTypes.object.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium']),
  align: PropTypes.oneOf(['center']),
};

export default PageFooter;
