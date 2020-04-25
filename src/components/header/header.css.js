import styled from 'styled-components';
import Logo from 'images/logo-site.svg';
import MEDIA from 'helpers/mediaTemplates.js';
import { primary } from 'constants/theme';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 5rem;
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;


  ${MEDIA.TABLET`
    position: relative;
    background-color: ${primary};
  `}

  a {
    color: white;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;

export const LogoImg = styled(Logo)`
  height: 60px;
`;
