import React from 'react';
import { bool, func } from 'prop-types';
import { StyledButton } from './sideButton.css';
import Text from 'components/text';

const SideButton = ({ open, setOpen }) => {
  return (
    <StyledButton open={open} onClick={() => setOpen(!open)}>
      <Text size={'medium'}>Sobre Tecnologias Emergentes</Text>
    </StyledButton>
  );
};
SideButton.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default SideButton;
