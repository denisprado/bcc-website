import Layout from 'components/layout';
import Container from 'components/container';
import Section from 'components/section';
import Gallery from 'components/gallery';
import Carousel from 'components/carousel';
import Title from 'components/title';
import { graphql } from 'gatsby';
import React from 'react';

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
  // array temporário que armazena os objetos com o índice e o valor para ordenação
  <Layout>
    {data.homeJson.sections &&
      sortHome(data.homeJson.sections).map(section => (
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
              <Carousel items={section.cards}></Carousel>
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
