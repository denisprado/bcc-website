import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: flex;
  padding: 2rem 0;
  min-width: 85%;
  min-height: 30vh;
  justify-items: center;
  margin: 2rem auto;

  ${MEDIA.PHONE`
    margin: 1rem auto;
    padding: 1rem 0;
    flex-direction: column;
  `}
`;

export const ContainerText = styled.div`
  display: flex;
  height: 50%;
  text-align: center;
  align-items: center;
  justify-items: center;
`;
