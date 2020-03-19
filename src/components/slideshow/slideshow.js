import React, { useState } from 'react';
import PropTypes from 'prop-types';
s


function SlideShow({ items }) {
  const [index, setIndex] = useState(0);
  const length = items.length - 1;

  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1);
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1);

  
}

SlideShow.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SlideShow;
