import ReactFullpage from '@fullpage/react-fullpage';
import Layout from 'components/layout';
import Container from 'components/container';
import Section from 'components/section';
import Title from 'components/title';
import { graphql } from 'gatsby';
import React from 'react';
import homeJson from '../../content/home/homepage.json';
const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
  /*
   * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
   */
};

const originalColors = [
  '#194090',
  '#194090',
  '#194090',
  '#194090',
  '#194090',
  '#194090',
  '#194090',
  '#194090',
];

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
