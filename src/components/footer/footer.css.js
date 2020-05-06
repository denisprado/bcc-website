import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.footer`
  ${MEDIA.MIN_TABLET`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 5rem 5rem;
    position: fixed;
    z-index: 1;
    right: 0;
    bottom: 0;
`};
  ${MEDIA.TABLET`
    display: none;
  `}
`;
