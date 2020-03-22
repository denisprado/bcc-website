import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const ContainerLayout = styled.div`
  margin: 0 auto;
  height:100vh;
  justify-content: space-between;
  align-items: flex-stretch;
  flex-direction: column;
  display: flex;
  width: 83.33%;
  ${MEDIA.MIN_DESKTOP`
     width: 66%;
 `};
`;
