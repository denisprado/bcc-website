import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates.js';

export const ContainerImage = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  flex-basis: 0;
  flex-grow: 1;
  ${MEDIA.TABLET`
    width: 100%;
    margin: 2rem auto;
  `}
  ${MEDIA.PHONE`
    width:100%;
    margin: 2rem 0;

  `}
`;
