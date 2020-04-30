import React, { useState } from 'react';
import { Container, BurgerContainer } from './nav.css';
import Menu from 'components/menu';

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <BurgerContainer open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </Container>
  );
}

export default Nav;
