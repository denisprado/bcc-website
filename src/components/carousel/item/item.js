import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/title';
import { Container, ContainerText } from './item.css';
import { useSpring, animated } from 'react-spring';

const Item = ({ text }) => {
  const props = useSpring({
    from: { opacity: 0 },
    to: [{ opacity: 1 }],
  });
  return (
    <Container>
      <ContainerText>
        <animated.div style={props}>
          <Title size="small" as="h2" align="center">
            <span
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            ></span>
          </Title>
        </animated.div>
      </ContainerText>
    </Container>
  );
};
Item.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object,
};

export default Item;
