import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { accent } from 'constants/theme';

export const Text = styled.span`
  display: block;

  margin-bottom: -1rem;

  margin: ${({ align }) => () => {
    switch (align) {
      case 'center':
        return '0 auto';
      default:
        return '';
    }
  }};
  width: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '70%';
      case 'medium':
        return '90%';
      default:
        return '100%';
    }
  }};
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '400';
      case 'medium':
        return '100';
      default:
        return '500';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '5.25rem';
      case 'medium':
        return '4.8rem';
      default:
        return '2.125rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        case 'medium':
          return '2.3rem';
        default:
          return '2rem';
      }
    }};
  `};

  strong {
    color: ${accent};
  }
`;
