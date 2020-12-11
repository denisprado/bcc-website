import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { accent, primaryLight, white, transparent } from 'constants/theme';
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: stretch;
  flex-direction: row;
`;

export const MenuItem = styled.div`
  text-align: center;
  margin-right: 4rem;
  margin-left: 4rem;
  ${MEDIA.DESK`
  margin-right:3rem;
  margin-left: 3rem;
  `}
  ${MEDIA.TABLET`
  margin-right: 2rem;
  margin-left: 2rem;
  `}
  ${MEDIA.PHONE`
    margin-right: .5rem;
    margin-left: .5rem;
  `}
  flex-grow: 2;
  padding: 1rem 0 0 0;
`;

export const Banner = styled.div`
  border-top: 1px solid ${white};
  border-bottom: 1px solid ${white};
  background-color: ${primaryLight};
  padding: 4rem 4rem 0;
  margin: 2rem;
  ${MEDIA.PHONE`
  margin: 0rem;
  padding: 1rem;
  `}
  span, h2 {
    text-align: left;
  }
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
  size: 48;
`;

export const Back = styled(IoIosArrowBack)`
  font-size: 48;
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

export const CirclesContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
`;

export const CircleItem = styled.div`
  border: 1px solid ${white};
  border-radius: 50%;
  &::before {
    content: &nbsp;
  }
  background-color: ${({ active }) => (active ? accent : transparent)};
  width: 15px;
  margin: 10px;
  height: 15px;
`;
