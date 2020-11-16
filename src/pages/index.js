import ReactFullpage from '@fullpage/react-fullpage';
import Container from 'components/container';
import Gallery from 'components/gallery';
import Image from 'components/image';
import Layout from 'components/layout';
import PageFooter from 'components/pagefooter';
import Section from 'components/section';
import PageTitle from 'components/pagetitle';
import History from 'components/history';
import Title from 'components/title';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { ContainerContent } from '../index.css';
import Nav from 'components/header/nav';
import Carousel from 'components/carousel';

const App = ({ data }) => (
  <Layout>
    <ReactFullpage
      render={() => {
        return (
          <div id="fullpage-wrapper">
            {data.homeJson.sections &&
              data.homeJson.sections.map((section, i) => (
                <div

                  className="section fp-auto-height "
                  id={'section' + i}
                  key={i}
                >
                  <Section bgColor={section.bgColor} className={section.title}>
                    <Container full={section.full}>
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
                          <Title size="medium" as="h1">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: section.text,
                              }}
                            />
                          </Title>

                        )}
                        {i === 0 && <Nav />}
                        {section.image && (
                          <Image
                            image={section.image}
                            title={section.title}
                            width={section.sizeImage}
                          />
                        )}
                        {section.type === 'gallery' && (
                          <Gallery items={section.cards}></Gallery>
                        )}
                        {section.type === 'carousel' && (
                          <Carousel items={section.cards}></Carousel>
                        )}
                        {section.type === 'history' && (
                          <History items={section.cards}></History>
                        )}
                      </ContainerContent>
                      <PageFooter
                        align={section.connectorEndAlign}
                        img={
                          section.connectorEnd &&
                          section.connectorEnd.childImageSharp.fluid
                        }
                        text={section.connectorEndText}
                      />
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

App.propTypes = {
  data: PropTypes.object,
};

export default App;

export const query = graphql`
query HomepageQuery {
  homeJson {
    sections {
        title
        text
        full
        bgColor
        type
        image {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1260) {
              ...GatsbyImageSharpFluid
            }
          }
          extension
          publicURL
        }
        sizeImage
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
        cards {
          id
          bgCardColor
          title
          sizeTitle
          text
          modal
          sizeText
          sizeImage
          boderRadius
          component
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
      }
    }
  }
`;
