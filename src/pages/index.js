import Layout from 'components/layout';
import Container from 'components/container';
import Section from 'components/section';
import Title from 'components/title';
import { graphql } from 'gatsby';
import React from 'react';

const App = ({ data }) => (
  <Layout>
    <Section bgColor="#194090">
      <Container>
        <Title size="large" as="h1">
          <p
            dangerouslySetInnerHTML={{
              __html: data.homeJson.content.childMarkdownRemark.html,
            }}
          />
        </Title>
      </Container>
    </Section>
    <Section>
      <Container></Container>
    </Section>
  </Layout>
);

export default App;

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
