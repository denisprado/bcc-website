import styled from 'styled-components';
import { accent } from 'constants/theme';
import { FiArrowDownCircle, FiXCircle } from 'react-icons/fi';
import MEDIA from 'helpers/mediaTemplates.js';

export const StyledButton = styled.button`
  &,
  &:active,
  &:focus {
    display: flex;
    justify-items: center;
    font-weight: 700;
    border: none;
    cursor: pointer;
    z-index: 99;
    border-radius: 1rem;
    padding: 1rem 1.2rem;
    background-color: ${({ open }) => (open ? accent : 'transparent')};

    ${MEDIA.TABLET`
      display: none;
  `};
  }
`;

export const DownBtn = styled(FiArrowDownCircle)`
  display: ${({ open }) => !open && 'none'};
`;

export const UpBtn = styled(FiXCircle)`
  display: ${({ open }) => open && 'none'};
`;
export const TextBtn = styled.span`
  display: ${({ open }) => !open && 'none'};
`;
