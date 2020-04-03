import Carousel from 'components/carousel';
import Container from 'components/container';
import Gallery from 'components/gallery';
import Layout from 'components/layout';
import PageFooter from 'components/pagefooter';
import PageTitle from 'components/pagetitle';
import Section from 'components/section';
import Title from 'components/title';
import { graphql } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';

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

function App({ data }) {
  const [page, setPage] = useState(0);

  function scrollDown(section) {
    setPage(section + 1);
    scrollTo('#section' + page);
  }

  function scrollUp(section) {
    section != 0 && setPage(section - 1);
    scrollTo('#section' + page);
  }

  return (
    <Layout>
      {data.homeJson.sections &&
        sortHome(data.homeJson.sections).map((section, i) => (
          <ReactScrollWheelHandler
            key={section.title}
            upHandler={() => scrollUp(i)}
            downHandler={() => scrollDown(i)}
            timeout={0}
            preventScroll
          >
            <span id={'section' + i}></span>
            <Section bgColor={section.bgColor}>
              <Container>
                <PageTitle
                  align={section.connectorBeginAlign}
                  img={
                    section.connectorBegin &&
                    section.connectorBegin.childImageSharp.fluid
                  }
                  text={section.title}
                />

                <PageContent>
                  {section.type === 'text' && (
                    <Title size="large" as="h1">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: section.content,
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
                <button key={i} onClick={() => scrollDown(i)}>
                  <PageFooter
                    align={section.connectorEndAlign}
                    img={
                      section.connectorEnd &&
                      section.connectorEnd.childImageSharp.fluid
                    }
                    text={section.connectorEndText}
                  ></PageFooter>
                </button>
              </Container>
            </Section>
          </ReactScrollWheelHandler>
        ))}
    </Layout>
  );
}

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
            fluid(quality: 100, maxWidth: 1260) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        connectorEndText
        connectorEndAlign
        connectorEnd {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1260) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        type
        cards {
          bgCardColor
          title
          sizeTitle
          text
          sizeText
          image {
            childImageSharp {
              fixed(quality: 100, width: 1260) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        content
      }
    }
  }
`;
