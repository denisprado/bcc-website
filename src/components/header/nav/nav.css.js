import styled from 'styled-components';
import Burger from 'components/burger';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  padding: 7rem 5rem;
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
  ${MEDIA.TABLET`
    display: none;
  `}
`;
