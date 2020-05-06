import Carousel from 'components/carousel';
import Container from 'components/container';
import Gallery from 'components/gallery';
import Layout from 'components/layout';
import PageFooter from 'components/pagefooter';
import PageTitle from 'components/pagetitle';
import Section from 'components/section';
import Title from 'components/title';
import Image from 'components/image';
import { graphql } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { ContainerContent } from './index.css';
// import Wind from 'videos/wind.mp4';
// import Transcript from 'file-loader!videos/description.vtt';

function sortHome(list) {
  const mapped = list.map((el, i) => {
    return { index: i, value: el };
  });

  // ordenando o array mapeado contendo os dados resumidos
  mapped.sort((a, b) => {
    return +(a.value < b.value) || +(a.value === b.value) + 1;
  });

  // containerpara o resultado ordenado
  const result = mapped.map((el) => {
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

  return (
    <Layout>
      {/* <video
        style={{ width: '100%', position: 'absolute', zIndex: 0 }}
        autoPlay
        loop
      >
        <source src={Wind} type="video/mp4" />
        <track kind="captions" srcLang="en" src={Transcript} default />
      </video> */}
      <scroll-container>
        {data.homeJson.sections &&
          sortHome(data.homeJson.sections).map((section, i) => (
            <scroll-page id={'section' + i} key={i}>
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

                  <ContainerContent>
                    {section.text && section.type === 'text' && (
                      <Title size="large" as="h1">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: section.text,
                          }}
                        />
                      </Title>
                    )}
                    {section.image && (
                      <Image image={section.image} title={section.title} />
                    )}
                    {section.type === 'gallery' && (
                      <Gallery items={section.cards}></Gallery>
                    )}
                    {section.type === 'slide' && (
                      <Carousel items={section.cards}></Carousel>
                    )}
                  </ContainerContent>
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
            </scroll-page>
          ))}
      </scroll-container>
    </Layout>
  );
}

App.propTypes = {
  data: PropTypes.object,
};

export default App;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      sections {
        title
        image {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1260) {
              ...GatsbyImageSharpFluid
            }
          }
          extension
          publicURL
        }
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
          sizeImage
          image {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
            extension
            publicURL
          }
        }
        text
      }
    }
  }
`;
