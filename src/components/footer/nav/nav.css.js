import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      a {
        font-size: 2rem;
      }

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;
