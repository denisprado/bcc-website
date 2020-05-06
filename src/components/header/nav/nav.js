import React, { useState } from 'react';
import { Container } from './nav.css';
import SideButton from 'components/sideButton';
import SideContainer from 'components/sideContainer';

function Nav() {
  const [open, setOpen] = useState(true);
  return (
    <Container>
      <SideButton open={open} setOpen={setOpen} />
      <SideContainer open={open} setOpen={setOpen} />
    </Container>
  );
}

export default Nav;
