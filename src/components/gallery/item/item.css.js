import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { primary, accent } from 'constants/theme';

export const Container = styled.div`
  background-color: ${props => (props.bgCardColor ? primary : 'transparent')};
  display: block;
  padding: 3rem;
  ${MEDIA.TABLET`
    margin-top:2rem;
  `};
`;

export const ContainerText = styled.div`
  margin: 2rem 0;
  font-size: 1.8rem;
  line-height: 1.25;
  strong {
    color: ${accent};
  }
`;

export const Title = styled.span`
  display: block;
  font-weight: 500;
`;
