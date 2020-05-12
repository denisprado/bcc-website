import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { accent, white, primaryLight } from 'constants/theme';
import ActiveTab from 'images/active-tab.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ContainerItems = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(${(props) => props.size && props.size}, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 3.2rem;
  grid-row-gap: 0px;
  width: 100%;
  align-items: start;
  padding: 1rem 0 2rem;
  &::-webkit-scrollbar {
  }
  ${MEDIA.TABLET`
    display: block;
  `};
`;

export const ContainerModal = styled.div`
    border-top: 1px solid ${white};
    border-bottom: 1px solid ${white};
    background-color: ${primaryLight};
    margin: 0 4rem;
    padding: 1rem;
    transition: all ${({ isVisible }) => (isVisible && '1s ease')};
    opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
    ul{
      display: flex;
      list-style-image: none;

      li{
        text-align: center;
        margin: 2rem;
        flex-grow: 1;
        flex-basis: 0;
      }
    }
`
export const Button = styled.button`
  &, &:active, &:focus {
    cursor: pointer;
    z-index: 1;
    font-family: 'proxima-nova';
    background-image: url(${({ active }) => (active ? ActiveTab : 'none')});
    transition: background-image ${({ isVisible }) => (isVisible && '2s ease')};
    background-position: bottom;
    background-repeat: no-repeat;
    margin-bottom: -22px;
    border: none;
    h2 {
      text-decoration: ${({ active }) => (active && 'underline')};
    }
  }  
  &:hover {
    h2 {
      color: ${({ active, modal }) => (!active ? accent : white)};
    }
  }
`;

