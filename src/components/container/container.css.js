import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const ContainerLayout = styled.div`
  margin: 0 auto;
  justify-content: space-between;
  align-items: flex-stretch;
  flex-direction: column;
  display: flex;
  width: ${({ full }) => (full ? '100%' : '75%')};
  ${MEDIA.DESKTOP`
    width: ${({ full }) => (full ? '100%' : '75%')};
    height: 100vh;
    `};

  ${MEDIA.TABLET`
    height: 100%;
    width: ${({ full }) => (full ? '100%' : '85%')};
  `};

  ${MEDIA.PHONE`
    width: 65%;
  `};
`;
