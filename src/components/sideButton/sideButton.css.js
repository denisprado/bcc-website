import styled from 'styled-components';
import { accent } from 'constants/theme';
import { FiArrowDownCircle, FiXCircle} from 'react-icons/fi';

export const StyledButton = styled.button`
  &,
  &:active,
  &:focus {
    display: block;
    font-weight: 700;
    border: none;
    cursor: pointer;
    z-index: 99;
    border-radius: 1rem;
    padding: 1rem 1.2rem;
    background-color: ${accent};
    border: 1px solid #fff;
  }
`;

export const DownBtn = styled(FiArrowDownCircle)`
  display: ${({ open }) => (!open && 'none')};
`

export const UpBtn = styled(FiXCircle)`
  display: ${({ open }) => (open && 'none') };
`