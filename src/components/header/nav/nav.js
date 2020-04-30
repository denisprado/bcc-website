import React, { useState } from 'react';
import { Container, BurgerContainer } from './nav.css';
import Menu from 'components/menu';
import SideButton from 'components/sideButton';
import SideContainer from 'components/sideContainer';
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <SideButton open={open} setOpen={setOpen} />
      <SideContainer open={open} setOpen={setOpen} />
    </Container>
  );
}

export default Nav;
