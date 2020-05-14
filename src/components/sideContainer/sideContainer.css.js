import styled from 'styled-components';
import { white, primaryLight, accent } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates.js';

export const Container = styled.div`
  border-top: 1px solid ${white};
  border-bottom: 1px solid ${white};
  background-color: ${primaryLight};
  margin: 0 2rem;
  padding: 3rem;
  z-index: 1;
  position: absolute;
  top: 12vh;
  right: 3.5rem;
  transition: transform 0.6s ease-in-out;
  opacity: ${({ open }) => (open ? 0 : 0.95)};
  transition: 0.3s all ease-in-out;
  min-width: 500px;


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
