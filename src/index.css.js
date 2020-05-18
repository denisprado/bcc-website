import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const ContainerContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  ${MEDIA.PHONE`
    flex-direction: column;
    align-items: center;
  `}

  ${MEDIA.PHONE`
    flex-direction: column;
    align-items: center;
  `}
`;
