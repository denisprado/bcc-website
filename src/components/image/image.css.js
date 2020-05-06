import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates.js';

export const ContainerImage = styled.div`
  margin-right: 3rem;
  width: 50%;
  ${MEDIA.TABLET`
    width: 40vw;
    margin: 2rem
  `}
  ${MEDIA.PHONE`
    width:100%;
  `}
`;
