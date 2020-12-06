import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { accent, white, primaryLight, primaryLighten } from 'constants/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerItems = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(${({ size }) => size && size}, 1fr);
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
  grid-column-gap: ${({ size }) => (size === 2 ? '4rem' : '2rem')};
  ${MEDIA.TABLET`
  `}
  grid-row-gap: 0px;
  width: 100%;
  align-items: center;
`;

export const ContainerModal = styled.div`
  border-top: 1px solid ${white};
  border-bottom: 1px solid ${white};
  background-color: ${primaryLight};
  margin: 0 2rem 2rem;
  padding: 0.5rem;
  transition: all ${({ isVisible }) => isVisible && '.5s ease'};
  opacity: ${({ isVisible, isModalOpen }) =>
    isVisible && isModalOpen ? '1' : '0'};
  ul {
    display: flex;
    ${MEDIA.TABLET`
        flex-direction: column;
      `}
    list-style-image: none;

    li {
      text-align: left;
      ${MEDIA.TABLET`
          flex-direction: column;
          margin: 1rem;
          margin-bottom: 0rem;
          p {
            margin-bottom: 1rem;
          }
        `}
      margin: 2rem;
      flex-grow: 1;
      flex-basis: 0;
    }
  }
  p {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  &,
  &:active,
  &:focus {
    cursor: ${({ isModalOpen, hasModal }) =>
    hasModal ? isModalOpen && 'pointer' : 'default'};
    z-index: 1;
    font-family: 'proxima-nova';
    margin-bottom: 2.6rem;
    border: none;

    h2 {
      color: ${({ active, isModalOpen }) => active && isModalOpen && accent};
    }
  }
  &:active,
  &:focus {
    .withBorder {
      border-radius: 50%;
      border: 3px solid ${accent};
    }
  }
  &:hover {
    h2 {
      color: ${({ active, hasModal }) =>
    hasModal ? (!active ? primaryLighten : accent) : white};
    }
  }
`;

export const NoButton = styled.div`
  z-index: 1;
  font-family: 'proxima-nova';
  margin-bottom: 2.6rem;
  border: none;

  h2 {
    color: ${({ active, isModalOpen }) => active && isModalOpen && accent};
  }
`;

export const ActiveTabContainer = styled.div`
  text-align: center;
  margin: 2.6rem auto -3.2rem;
  transition: all ${({ isVisible }) => isVisible && '.5s ease'};
  opacity: ${({ isVisible, isModalOpen }) =>
    isVisible && isModalOpen ? '1' : '0'};
`;
