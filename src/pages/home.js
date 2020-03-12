import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Container from 'components/container';
import Title from 'components/title';
import Layout from 'components/layout';

const Index = ({ data }) => (
  <Container>
    <Title size="large" as="h1">
      <p
        dangerouslySetInnerHTML={{
          __html: data.homeJson.content.childMarkdownRemark.html,
        }}
      />
    </Title>
  </Container>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;
