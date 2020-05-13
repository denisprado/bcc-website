import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const ContainerLayout = styled.div`
  margin: 0 auto;
  justify-content: space-between;
  align-items: flex-stretch;
  flex-direction: column;
  display: flex;
  
  ${MEDIA.DESKTOP`
    width: ${({ full }) => full ? '100%' : '75%'};
    height: 100vh;
    border:1px solid red;
    `};
    
  ${MEDIA.TABLET`
    height: 100%;
    width: ${({ full }) => full ? '100%' : '85%'};
    border:1px solid green;
  `};

  ${MEDIA.PHONE`
    border:1px solid white;
    width: 65%;
  `};
 

`;
