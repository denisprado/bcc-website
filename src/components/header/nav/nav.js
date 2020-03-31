import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import Burger from 'components/burger';
import Menu from 'components/menu';

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </Container>
  );
}

export default Nav;
