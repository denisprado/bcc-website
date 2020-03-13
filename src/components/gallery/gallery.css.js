import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 0px;

  &::-webkit-scrollbar {
  }
  ${MEDIA.TABLET`
    display: block;
  `};
`;
