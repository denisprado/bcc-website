import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { accent } from 'constants/theme';
import {
  IoIosArrowForward,
  IoIosArrowUp,
  IoIosArrowBack,
  IoIosArrowDown,
} from 'react-icons/io';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
`;

export const Menu = styled.div`
  justify-items: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: stretch;
  flex-direction: column;

  ${MEDIA.MIN_TABLET`
    flex-direction: row;
 `};
`;

export const MenuItem = styled.div`
  text-align: center;
  margin-right: 4rem;
  margin-left: 4rem;
  flex-grow: 2;
  padding: 1rem 0 0 0;
`;

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-family: 'proxima-nova';
  text-transform: uppercase;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  font-size: ${(props) => (props.active ? 2.4 : 3.2)}rem;
  font-weight: ${(props) => !props.active && 100};

  ${MEDIA.MIN_TABLET`
    font-size: ${(props) => (props.active ? 2.4 : 2.4)}rem;
  `}

  border: none;
  color: white;

  &:hover {
    transition: 0.3s all;
    color: ${(props) => !props.active && accent};
  }
`;

export const Fwd = styled(IoIosArrowForward)`
  ${MEDIA.TABLET`
    display: none;
    size: 24;
  `}
`;

export const Back = styled(IoIosArrowBack)`
  ${MEDIA.TABLET`
    display: none;
    size: 24;
  `}
`;

export const Up = styled(IoIosArrowUp)`
  ${MEDIA.MIN_DESKTOP`
    display: none;
  `}
`;

export const Down = styled(IoIosArrowDown)`
  ${MEDIA.MIN_DESKTOP`
    display: none;
  `}
`;
