import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const ContainerLayout = styled.div`
  margin: 0 auto;
  justify-content: space-between;
  align-items: flex-stretch;
  flex-direction: column;
  display: flex;
  width: 83.33%;

  ${MEDIA.MIN_TABLET`
    height: 100vh;
    width: 66%;
 `};

  ${MEDIA.MIN_DESKTOP`
    width: 65%;
    min-width: 920px;
 `};
`;
