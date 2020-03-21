import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  width: 100%;
  height: 60vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${MEDIA.MIN_TABLET`

 `};
`;

export const Menu = styled.div`
  justify-items: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  ${MEDIA.MIN_TABLET`
    flex-direction: row;
 `};
`;

export const MenuItem = styled.div`
  text-align: center;
  flex-grow: 2;
`;

export const Button = styled.button`
  background: transparent;
  opacity: ${props => (props.active ? 1 : 0.5)};
  font-size: ${props => (props.active ? 4.8 : 2.4)}rem;
  border: none;

  color: white;
`;
