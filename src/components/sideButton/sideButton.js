import React from 'react';
import { bool, func } from 'prop-types';
import { StyledButton } from './sideButton.css';
import Text from 'components/text';
import { DownBtn, UpBtn, TextBtn } from './sideButton.css';

const SideButton = ({ open, setOpen }) => {
  return (
    <StyledButton open={open} onClick={() => setOpen(!open)}>
      <Text size={'medium'}>
        <TextBtn open={open}>Sobre Tecnologias Emergentes</TextBtn>{' '}
        <DownBtn open={open} />
        <UpBtn open={open} />
      </Text>
    </StyledButton>
  );
};
SideButton.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default SideButton;
