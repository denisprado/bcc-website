import ReactFullpage from '@fullpage/react-fullpage';
import Carousel from 'components/carousel';
import Container from 'components/container';
import Gallery from 'components/gallery';
import Image from 'components/image';
import Layout from 'components/layout';
import PageFooter from 'components/pagefooter';
import PageTitle from 'components/pagetitle';
import Section from 'components/section';
import Title from 'components/title';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { ContainerContent } from '../index.css';

// import Wind from 'videos/wind.mp4';
// import Transcript from 'file-loader!videos/description.vtt';

const FullpageWrapper = ({ data }) => (
  <Layout>
    <ReactFullpage
      render={({ fullpageApi }) => {
        return (
          <div id="fullpage-wrapper">
            {data.homeJson.sections &&
              data.homeJson.sections.map((section, i) => (
                <div className="section" id={'section' + i} key={i}>
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
                      <PageFooter
                        align={section.connectorEndAlign}
                        img={
                          section.connectorEnd &&
                          section.connectorEnd.childImageSharp.fluid
                        }
                        text={section.connectorEndText}
                      ></PageFooter>
                    </Container>
                  </Section>
                </div>
              ))}
          </div>
        );
      }}
    />
  </Layout>
);

FullpageWrapper.propTypes = {
  data: PropTypes.object,
};

export default FullpageWrapper;

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
