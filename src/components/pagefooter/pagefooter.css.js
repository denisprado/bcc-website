import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { accent } from 'constants/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Text = styled.span`
  display: flex;
  color: white;
  margin: ${({ align }) => () => {
    switch (align) {
      case 'center':
        return '0 auto';
      case 'left':
        return '0 0';
      default:
        return '';
    }
  }};

  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '400';
      case 'medium':
        return '100';
      default:
        return '100';
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

  ${MEDIA.PHONE`
    img{
      display: none;
    }
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
