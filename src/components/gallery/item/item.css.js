import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { primary } from 'constants/theme';

export const Container = styled.div`
  background-color: ${props => (props.bgCardColor ? primary : 'transparent')};
  display: flex;
  margin: 0 auto;
  flex-basis: 80px;
  flex-shrink: 1;
  flex-direction: column;

  img {
    margin-bottom: 2rem;
  }

  ${MEDIA.MIN_TABLET`
    padding: 3rem;
  `}

  ${MEDIA.PHONE`
    margin: 1rem 0;
    padding: 2rem;
  `};
`;

export const ContainerText = styled.div`
  margin: 2rem 0;
  h2 {
    margin: 0 0 1rem 0;
  }
`;
