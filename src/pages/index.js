import Layout from 'components/layout';
import Container from 'components/container';
import Section from 'components/section';
import Gallery from 'components/gallery';
import SlideShow from 'components/slideshow';
import Title from 'components/title';
import { graphql } from 'gatsby';
import React from 'react';

const App = ({ data }) => (
  <Layout>
    {data &&
      data.homeJson.sections.map(section => (
        <Section key={section.title} bgColor={section.bgColor}>
          <Container>
            {section.type === 'text' && (
              <Title size="large" as="h1">
                <p
                  dangerouslySetInnerHTML={{
                    __html: section.content.childMarkdownRemark.html,
                  }}
                />
              </Title>
            )}
            {section.type === 'gallery' && (
              <Gallery items={section.cards}></Gallery>
            )}
            {section.type === 'slide' && (
              <SlideShow items={section.cards}></SlideShow>
            )}
          </Container>
        </Section>
      ))}
  </Layout>
);

export default App;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      sections {
        title
        bgColor
        type
        cards {
          title
          text {
            childMarkdownRemark {
              html
              rawMarkdownBody
            }
          }
          image {
            childImageSharp {
              fluid(maxHeight: 500, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        content {
          childMarkdownRemark {
            html
            rawMarkdownBody
          }
        }
      }
    }
  }
`;
