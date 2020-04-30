import styled from 'styled-components';
import { accent } from 'constants/theme';

export const StyledButton = styled.button`
  display: block;
  height: 2rem;
  background-color: ${accent};
  border: none;
  cursor: pointer;
  padding: 1.6rem 3.2rem;
  z-index: 99;
  border-radius: 1rem;
`;
