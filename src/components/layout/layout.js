import React from "react";

import {
  Container,
  Navbar,
  NavbarLeftMenu,
  NavbarRightMenu,
  NavbarFooter
} from "./layout.css.js";

const Layout = () => (
  <Container>
    <Navbar>
      <NavbarLeftMenu>BCC</NavbarLeftMenu>
      <NavbarRightMenu>|||</NavbarRightMenu>
    </Navbar>
    <NavbarFooter>
      <NavbarRightMenu>face - insta - linkedin</NavbarRightMenu>
    </NavbarFooter>
  </Container>
);

export default Layout;
