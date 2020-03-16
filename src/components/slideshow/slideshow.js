import React, { useState } from 'react';
import Img from 'gatsby-image';

const SlideShow = ({ items }) => {
  const [index, setIndex] = useState(0);

  //Minus 1 for array offset from 0
  const length = items.length - 1;
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1);
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1);
  const { cards } = items && items[index];

  return (
    items && (
      <div>
        <div>
          <p key={cards.title} alt={cards.title} />
        </div>
        <div>
          <button onClick={() => handlePrevious()}>Previous</button>
          <button onClick={() => handleNext()}>Next</button>
        </div>
      </div>
    )
  );
};

export default SlideShow;
