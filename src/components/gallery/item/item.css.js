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

  ${MEDIA.TABLET`
    flex-direction: row;
    margin: 1rem;
    padding: 2rem;
  `};
`;

export const ContainerText = styled.div`
  h2 {
    margin-bottom: 1rem;
  }
  ${MEDIA.MIN_TABLET`
    padding: 3rem;
  `}
  ${MEDIA.TABLET`
    padding: 2rem;
    
    
  `}
  
`;

export const ContainerImage = styled.div`
  
  width: ${props => props.width && props.width};
  ${MEDIA.TABLET`
    width: ${props => props.width && (props.width)};
  `
}
  `;
