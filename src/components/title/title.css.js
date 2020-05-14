import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { accent } from 'constants/theme';

export const Text = styled.span`
  display: block;
  
  text-align: ${({ size }) => () => {
    switch (size) {
      case 'medium':
        return 'left';
      case 'large':
        return 'left';
      default:
        return 'center';
    }
  }};
  margin: ${({ align }) => () => {
    switch (align) {
      case 'center':
        return '0 auto';
      default:
        return '0 0 2rem 0';
    }
  }};
  width: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '100%';
      case 'medium':
        return '100%';
      default:
        return '100%';
    }
  }};
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '100';
      case 'medium':
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
        return '5.6rem';
      default:
        return '3.2rem';
    }
  }};
  line-height: 1.2;

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

  strong {
    color: ${accent};
  }
`;
