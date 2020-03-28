import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from 'store/createContext';
import Arrow from 'components/arrows';

const ArrowContainer = ({ children }) => (
  <Consumer>
    {({ section, moveSectionDown, moveSectionUp }) => (
      <Arrow
        section={section}
        moveSectionDown={moveSectionDown}
        moveSectionUp={moveSectionUp}
      >
        {children}
      </Arrow>
    )}
  </Consumer>
);

ArrowContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ArrowContainer;
