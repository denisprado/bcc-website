import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { accent, white, primaryLight, primaryLighten } from 'constants/theme';
import ActiveTab from 'images/active-tab.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ContainerItems = styled.div`
  display: grid;
  margin: 0 ${({ size }) => size && 2 * (1 / size)}rem;
  grid-template-columns: repeat(${(props) => props.size && props.size}, 1fr);
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
  grid-column-gap: ${(props) => props.size && (16 * (1 / props.size))}rem;
  ${MEDIA.TABLET`
    grid-column-gap: 2rem;
  `}
  grid-row-gap: 0px;
  width: 100%;
  align-items: start;
  padding: 1rem 0 4rem 0;
`;

export const ContainerModal = styled.div`
    border-top: 1px solid ${white};
    border-bottom: 1px solid ${white};
    background-color: ${primaryLight};
    margin: 0 4rem;
    padding: .5rem;
    min-height: 16rem;
    transition: all ${({ isVisible }) => (isVisible && '1s ease')};
    opacity: ${({ isVisible, isModalOpen }) => (isVisible && isModalOpen ? '1' : '0')};
    ul{
      display: flex;
      ${MEDIA.TABLET`
        flex-direction: column;
      `}
      list-style-image: none;

      li{
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
`
export const Button = styled.button`
  &, &:active, &:focus {
    cursor: ${({ isModalOpen }) => isModalOpen && 'pointer'};
    z-index: 1;
    font-family: 'proxima-nova';
    background-image: url(${({ active, isModalOpen }) => (active && isModalOpen ? ActiveTab : 'none')});
    transition: background-image ${({ isVisible }) => (isVisible && '2s ease')};
    background-position: bottom;
    background-repeat: no-repeat;
    margin-bottom: -4.2rem;
    border: none;
    
    h2 {
      color: ${({ active }) => (active && accent)};
    }
  }  
  &:hover {
    h2 {
      color: ${({ active }) => (!active ? primaryLighten : accent)};
    }
  }
`;

