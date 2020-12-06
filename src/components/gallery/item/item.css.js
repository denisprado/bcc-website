import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { primary } from 'constants/theme';

export const Container = styled.div`
  background-color: ${(props) => (props.bgCardColor ? primary : 'transparent')};
  display: flex;
  flex-direction: column;
  transition: transform ${({ id, isVisible }) => (isVisible && (id))}s ease;
  transform: ${({ isVisible }) => (isVisible ? 'scale(1)' : 'scale(0)')};
  
  ${MEDIA.TABLET`
    margin: 1rem;
    padding: 2rem 0.5rem;
    align-items: center;
    text-align:center;
    ul{
      li{
        text-align:left;
      }
    }
  `};

  ${MEDIA.PHONE`
  margin: 1rem;
    padding: 2rem 0.5rem;
  `}
`;

export const ContainerTitle = styled.div`
`;

export const ContainerText = styled.div`
  
`;

export const ContainerImage = styled.div`
  width: ${(props) => props.width && props.width};
  margin: 2rem auto;
  ${MEDIA.PHONE`
    margin: 1rem 0rem;
  `};
`;

export const ContainerComponent = styled.div`
    flex-grow: 2;

`