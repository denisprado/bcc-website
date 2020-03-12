import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const ContainerLayout = styled.div`
  margin: 0 auto;
  justify-content: center;
  width: 83.33%;
  ${MEDIA.MIN_DESKTOP`
     width: 66%;
 `};
`;
