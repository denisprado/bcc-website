import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { accent } from 'constants/theme';

export const Text = styled.span`
  display: block;
  width: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '70%';
      default:
        return '100%';
    }
  }};
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '400';
      default:
        return '500';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '5.25rem';
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
        default:
          return '2rem';
      }
    }};
  `};

  strong {
    color: ${accent};
  }
`;
