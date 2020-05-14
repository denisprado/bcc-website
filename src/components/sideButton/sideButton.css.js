import styled from 'styled-components';
import { accent, white } from 'constants/theme';
import { FiHelpCircle, FiXCircle } from 'react-icons/fi';
import { GoQuestion } from 'react-icons/go';

import MEDIA from 'helpers/mediaTemplates.js';

export const StyledButton = styled.button`
  &,
  &:active,
  &:focus {
    border: none;
    cursor: pointer;
    z-index: 99;
    width: 100%;
    display: flex;
    align-items: center; 
    span{

      padding-right:1rem; 
    }
    
      ${MEDIA.TABLET`
      display: none;
  `};
  }
`;

export const DownBtn = styled(FiHelpCircle)`
  display: ${({ open }) => !open && 'none'};
  background-color: ${accent};
  border-radius:50%;
  font-size: 2.4rem;  
`;

export const UpBtn = styled(FiXCircle)`
  display: ${({ open }) => open && 'none'};
  background-color: 'transparent';
  border-radius:50%;
  font-size: 2.4rem;
`;
export const TextBtn = styled.span`
  display: ${({ open }) => !open && 'none'};
`;
