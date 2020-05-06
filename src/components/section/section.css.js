import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates.js';

export const SectionLayout = styled.div`
  margin: 0 0;
  background: ${(props) => (props.bgColor ? props.bgColor : 'transparent')};
  display: flex;
  justify-content: center;
  align-items: center;

  ${MEDIA.MIN_DESKTOP`
    height: 100vh;
  `}
`;
