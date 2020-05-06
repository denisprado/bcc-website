import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { primary } from 'constants/theme';

export const Container = styled.div`
  background-color: ${(props) => (props.bgCardColor ? primary : 'transparent')};
  display: flex;
  flex-direction: column;

  ${MEDIA.MIN_TABLET`
  padding: ${(props) => (props.bgCardColor ? '3rem' : 0)};

  `}

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
`;

export const ContainerText = styled.div`
  h2 {
    margin-bottom: 1rem;
  }
`;

export const ContainerImage = styled.div`
  width: ${(props) => props.width && props.width};
  margin-bottom: 2rem;
  border-radius: 1rem;
  margin-right: 2rem;
  ${MEDIA.PHONE`
    margin: 1rem 0rem;
  `};
`;
