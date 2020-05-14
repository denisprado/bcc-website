import React from 'react';
import { bool, func } from 'prop-types';
import { StyledButton } from './sideButton.css';
import Text from 'components/text';
import { DownBtn, UpBtn, TextBtn } from './sideButton.css';

const SideButton = ({ open, setOpen }) => {
  return (
    <StyledButton open={open} onClick={() => setOpen(!open)}>
      <Text size={'small'}>
        <TextBtn open={open}>Sobre Tecnologias Emergentes</TextBtn>
      </Text>
      <DownBtn open={open} />
      <UpBtn open={open} />
    </StyledButton>
  );
};
SideButton.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default SideButton;
