import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { accent, white } from 'constants/theme';

export const Title = styled.span`
  display: block;
  width: 100%;
  line-height: 1.2;
  margin: 0 0 2rem 0;
  flex-basis: 0;
  flex-grow: 1;

  span{color: ${({ color }) => color || white}}

  strong {
    color: ${accent};
  }
  
  text-align: ${({ align }) => () => {
    switch (align) {
      case 'left':
        return 'left';
      case 'center':
        return 'center';
      default:
        return 'left';
    }
  }};
  ${MEDIA.PHONE`
  text-align:center;  
  `}
  
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '100';
      case 'medium':
        return '400';
      case 'small':
        return '100';
      default:
        return '400';
    }
  }};

  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '5.6rem';
      case 'medium':
        return '3.2rem';
      case 'small':
        return '2.4rem';
      default:
        return '2.4rem';
    }
  }};

  ${MEDIA.TABLET`    
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '3.6rem';
        case 'medium':
          return '3.6rem';
        default:
          return '2.4rem';
      }
    }};
  `};

`;
