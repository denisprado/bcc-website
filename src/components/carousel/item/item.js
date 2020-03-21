import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/title';
import { Container, ContainerText } from './item.css';

const Item = ({ text }) => (
  <Container>
    <ContainerText>
      <Title size="medium" as="h2" align="center">
        <p
          dangerouslySetInnerHTML={{
            __html: text.childMarkdownRemark.html,
          }}
        ></p>
      </Title>
    </ContainerText>
  </Container>
);
Item.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object,
};

export default Item;
