import styled from 'styled-components';
<<<<<<< HEAD
import Logo from 'images/logo-site.svg';
=======
import Logo from 'images/logo.png';
>>>>>>> 89b1d3d0c256771f6f41eae01e941156d942fbf7
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
