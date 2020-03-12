import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Container from 'components/container';
import Title from 'components/title';
import Layout from 'components/layout';

const Index = ({ data }) => (
  <Layout>
    <Container>
      <Title size="large" as="h1">
        {data.homeJson.content}
      </Title>
    </Container>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;
