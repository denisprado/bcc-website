import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.size && props.size}, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1.6rem;
  grid-row-gap: 0px;

  &::-webkit-scrollbar {
  }
  ${MEDIA.TABLET`
    display: block;
  `};
`;
