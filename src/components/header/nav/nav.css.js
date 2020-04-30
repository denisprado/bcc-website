import styled from 'styled-components';
import Burger from 'components/burger';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;

export const BurgerContainer = styled(Burger)`
  ${MEDIA.DESKTOP`
    display: none;
  `}
`;
