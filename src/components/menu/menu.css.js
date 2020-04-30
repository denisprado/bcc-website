import styled from 'styled-components';
import { primary, primaryDark, accent } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates.js';

export const StyledMenu = styled.nav`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, ${primaryDark} 0%, ${primary} 50%);
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.6s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  ${MEDIA.TABLET`
    display: none;
  `};

  a {
    font-size: 4rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${MEDIA.PHONE}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${accent};
    }
  }
`;
