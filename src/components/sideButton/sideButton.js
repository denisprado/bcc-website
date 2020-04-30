import React from 'react';
import { bool, func } from 'prop-types';
import { StyledButton } from './sideButton.css';

const SideButton = ({ open, setOpen }) => {
  return (
    <StyledButton open={open} onClick={() => setOpen(!open)}>
      Sobre Tecnologias Emergentes
    </StyledButton>
  );
};
SideButton.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default SideButton;
