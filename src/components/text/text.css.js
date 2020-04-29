import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { accent } from 'constants/theme';
import bullet from '../../images/bullet.png';

export const TextContainer = styled.span`
  display: block;
  line-height: 1.2;
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
        return '3.2rem';
      case 'medium':
        return '1.8rem';
      default:
        return '1rem';
    }
  }};

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '1.9rem';
        case 'medium':
          return '1.8rem';
        default:
          return '1.6rem';
      }
    }};
  `};



  ul {
    list-style-image: url('${bullet}');
    list-style-position:outside;

    li {
      margin: 3.2rem;
    }
  }
`;
