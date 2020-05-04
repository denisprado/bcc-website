import styled from 'styled-components';
import { primary, primaryDark, accent } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates.js';

export const Container = styled.div`
  display: flex;
  border: 1px solid white;
  border-radius: 1.6rem;
  z-index: -1;
  width: 30vw;
  height: 80vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${primaryDark};
  text-align: left;
  padding: 3% 3%;
  box-sizing: border-box;
  position: absolute;
  top: 12vh;
  right: 5rem;
  transition: transform 0.6s ease-in-out;
  opacity: ${({ open }) => (open ? 0 : 0.95)};
  transition: 0.3s all ease-in-out;

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
