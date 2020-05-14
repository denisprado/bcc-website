// sideContainer.js
import React from 'react';
import { bool } from 'prop-types';
import { Container } from './sideContainer.css';
import PropTypes from 'prop-types';
import Text from 'components/text';
import Title from 'components/title';

const sideContainer = ({ open }) => {
  return (
    <Container open={open}>
      <Title size={'small'}>Sobre Tecnologias Emergentes</Title>
      <Text size={'small'} align={'left'}>
        <p>
          Consideradas propulsoras do desenvolvimento e inovação para os
          próximos anos, as tecnologias emergentes verdes são definidas como os
          artefatos tecnológicos que apresentam menor impacto ambiental em seus
          processos e utilização. Isso é refletido, por exemplo, na diminuição
          das emissões de gases do efeito estufa, na redução da pegada de CO2 no
          ciclo de vida do produto e incorporação da biodegradação de elementos.{' '}
        </p>
        <p>
          Exemplos notáveis destas tecnologias – e expertises principais da
          Barassa Cruz- referem-se as tecnologias de mobilidade de baixa
          emissão, com destaque para veículos elétricos e híbridos, bem como as
          tecnologias de geração de energia limpa e sustentável, como os painéis
          fotovoltaicos.
        </p>
        <p>
          Estas tecnologias tem ganhado tração, escalabilidade e ampliado sua
          difusão ao serem suportadas pelas agendas climáticas internacionais e
          pelos objetivos do desenvolvimento sustentável (ODS/ONU). Pois, estes
          acordos celebrados realizam a pressão para que as
          Empresas/Estados/Países adotem práticas mais sustentáveis e com menor
          impacto ao meio ambiente, impondo à indústria global de produtos e
          serviços a necessidade de adoção de novas tecnologias alternativas às
          tradicionais.
        </p>
      </Text>
    </Container>
  );
};
sideContainer.propTypes = {
  open: bool.isRequired,
  children: PropTypes.string,
};
export default sideContainer;
