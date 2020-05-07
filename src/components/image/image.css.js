import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates.js';

export const ContainerImage = styled.div`
  width: 55%;
  padding: 0 3rem;
  margin: 0 auto;
  ${MEDIA.TABLET`
    width: 100%;
    margin: 2rem auto;
  `}
  ${MEDIA.PHONE`
    width:100%;
    margin: 2rem 0;

  `}
`;
