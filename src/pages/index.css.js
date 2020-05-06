import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  ${MEDIA.PHONE`
    flex-direction: column;
  `}
`;
