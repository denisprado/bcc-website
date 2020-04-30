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

  ${MEDIA.MIN_TABLET`
    padding: 3rem;
  `}

  ${MEDIA.TABLET`

    margin: 1rem;
    padding: 2rem;
  `};
`;

export const ContainerText = styled.div`
  h2 {
    margin-bottom: 1rem;
  }
`;

export const ContainerImage = styled.div`
  width: ${props => props.width && props.width};
  margin-bottom: 2rem;
  border-radius: 1rem;
  margin-right: 2rem;

  ${MEDIA.TABLET`
    width: 80vw;
  `}
`;
