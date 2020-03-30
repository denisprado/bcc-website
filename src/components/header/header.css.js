import styled from 'styled-components';
import Logo from 'images/logo.svg';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
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
  height: 75px;
`;
