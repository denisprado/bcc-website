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
import Modal from 'containers/modal';
import scrollTo from 'gatsby-plugin-smoothscroll';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function sortHome(list) {
  const mapped = list.map(function (el, i) {
    return { index: i, value: el };
  });

  // ordenando o array mapeado contendo os dados resumidos
  mapped.sort(function (a, b) {
    return +(a.value < b.value) || +(a.value === b.value) + 1;
  });

  // containerpara o resultado ordenado
  const result = mapped.map(function (el) {
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
      <scroll-container>
        {data.homeJson.sections &&
          sortHome(data.homeJson.sections).map((section, i) => (
            <>
              <scroll-page id={'section' + i}>
                <Section bgColor={section.bgColor} key={i}>
                  <Container>
                    <PageTitle
                      align={section.connectorBeginAlign}
                      img={
                        section.connectorBegin &&
                        section.connectorBegin.childImageSharp.fluid
                      }
                      text={section.title}
                    />

                    <div>
                      
                      {section.type === 'text' && (
                        <Title size="large" as="h1">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: section.content,
                            }}
                          />
                          <Modal>
                          <p>
                          Consideradas propulsoras do desenvolvimento e inovação para os próximos anos, as tecnologias emergentes verdes são definidas como os artefatos tecnológicos que apresentam menor impacto ambiental em seus processos e utilização. Isso é refletido, por exemplo, na diminuição das emissões de gases do efeito estufa, na redução da pegada de CO2 no ciclo de vida do produto e incorporação da biodegradação de elementos. </p><p>
Exemplos notáveis destas tecnologias – e expertises principais da Barassa  Cruz-  referem-se as tecnologias de mobilidade de baixa emissão, com destaque para veículos elétricos e híbridos, bem como as tecnologias de geração de energia limpa e sustentável, como os painéis fotovoltaicos.
                            </p><p>

Estas tecnologias tem ganhado tração, escalabilidade e ampliado sua difusão ao serem suportadas pelas agendas climáticas internacionais e pelos  objetivos do desenvolvimento sustentável (ODS/ONU). Pois, estes acordos celebrados realizam a pressão para que as Empresas/Estados/Países adotem práticas mais sustentáveis e com menor impacto ao meio ambiente, impondo à indústria global de produtos e serviços a necessidade de adoção de novas tecnologias alternativas às tradicionais.

                            </p>

                          </Modal>
                        </Title>
                      )}
                      {section.type === 'gallery' && (
                        <Gallery items={section.cards}></Gallery>
                      )}
                      {section.type === 'slide' && (
                        <Carousel items={section.cards}></Carousel>
                      )}
                    </div>
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
            </>
          ))}
      </scroll-container>
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
        image {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1260) {
              ...GatsbyImageSharpFluid
            }
          }
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
        content
      }
    }
  }
`;
