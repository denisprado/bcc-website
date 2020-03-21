import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { accent } from 'constants/theme';
import bullet from '../../images/bullet.png'

export const TextContainer = styled.span`
  display: block;
  margin: ${({ align }) => () => {
    switch (align) {
      case 'center':
        return '0 auto';
      default:
        return '';
    }
  }};
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '200';
      case 'medium':
        return '100';
      default:
        return '500';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '2.8rem';
      case 'medium':
        return '2.4rem';
      default:
        return '1.6rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '1.25rem';
        case 'medium':
          return '1rem';
        default:
          return '.75rem';
      }
    }};
  `};

  strong {
    color: ${accent};
  }

  ul {
    list-style-image: url('${bullet}');
    li {
      font-size: 1.6rem;
      margin: 1.6rem;
    }
  }
`;
