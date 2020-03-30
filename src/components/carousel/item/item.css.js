import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: flex;
  padding: 6rem 0;
  width: 85%;
  height: 35%;
  margin: 2rem auto;
  ${MEDIA.PHONE`
    flex-direction: column;  
  `}
`;

export const ContainerText = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-items: center;
`;
