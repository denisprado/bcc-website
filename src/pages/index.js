import Carousel from 'components/carousel';
import Container from 'components/container';
import Gallery from 'components/gallery';
import Layout from 'components/layout';
import PageFooter from 'components/pagefooter';
import PageTitle from 'components/pagetitle';
import Section from 'components/section';
import Title from 'components/title';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const PageContent = styled.div``;

function sortHome(list) {
  const mapped = list.map(function(el, i) {
    return { index: i, value: el };
  });

  // ordenando o array mapeado contendo os dados resumidos
  mapped.sort(function(a, b) {
    return +(a.value < b.value) || +(a.value === b.value) + 1;
  });

  // containerpara o resultado ordenado
  const result = mapped.map(function(el) {
    return list[el.index];
  });

  return result;
}

const App = ({ data }) => (
  <Layout>
    {data.homeJson.sections &&
      sortHome(data.homeJson.sections).map((section, i) => (
        <>
          <span id={'section' + i}></span>
          <Section key={section.title} bgColor={section.bgColor}>
            <Container>
              <PageTitle
                align={section.connectorBeginAlign}
                img={section.connectorBegin.childImageSharp.fluid}
                text={section.title}
              />

              <PageContent>
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
                  <Carousel items={section.cards}></Carousel>
                )}
              </PageContent>
              <button key={i} onClick={() => scrollTo('#section' + (i + 1))}>
                <PageFooter align={section.connectorEndAlign}>
                  {section.connectorEnd && (
                    <Img
                      fluid={section.connectorEnd.childImageSharp.fluid}
                      alt={section.title}
                      width="100%"
                      height="100%"
                    />
                  )}
                </PageFooter>
              </button>
            </Container>
          </Section>
        </>
      ))}
  </Layout>
);

App.propTypes = {
  data: PropTypes.object.isRequired,
};

export default App;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      sections {
        title
        bgColor
        connectorBeginAlign
        connectorBegin {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        connectorEndAlign
        connectorEnd {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        type
        cards {
          bgCardColor
          title
          sizeTitle
          text {
            childMarkdownRemark {
              html
              rawMarkdownBody
            }
          }
          sizeText
          image {
            childImageSharp {
              fluid(quality: 100) {
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
