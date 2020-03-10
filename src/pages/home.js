import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Container from 'components/container';
import Title from 'components/title';

const Index = ({ data }) => (
  <Container>
    <Title size="large" as="h1">
      {data.homeJson.content}
    </Title>
  </Container>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`;
