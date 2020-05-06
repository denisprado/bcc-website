import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates.js';

export const ContainerImage = styled.div`
  width: 60%;
  padding: 3rem;
  margin: 0 auto;
  ${MEDIA.TABLET`
    width: 40vw;
    margin: 2rem;
  `}
  ${MEDIA.PHONE`
    width:100%;
  `}
`;
