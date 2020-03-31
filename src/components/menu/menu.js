// Menu.js
import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './menu.css';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">Sobre</a>
      <a href="/">Novidades</a>
      <a href="/">Contato</a>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
