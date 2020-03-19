import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { accent } from 'constants/theme';

export const Container = styled.div`
  background-color: #194090;
  display: block;
  padding: 3rem;
`;

export const ContainerText = styled.div`
  margin: 2rem 0;
  font-size: 1.8rem;
  line-height: 1.25;
  color: white;
  strong {
    color: ${accent};
  }
`;

export const Title = styled.span`
  display: block;
  font-weight: 500;
`;