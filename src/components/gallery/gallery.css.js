import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(${props => props.size && props.size}, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 3.2rem;
  grid-row-gap: 0px;
  width: 100%;
  &::-webkit-scrollbar {
  }
  ${MEDIA.TABLET`
    display: block;
  `};
`;
