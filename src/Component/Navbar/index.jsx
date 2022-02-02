import React from "react";
import { Container, Item, Logo, NavItems, Headers, Button } from "./style";

export const Navbar = () => {
  return (
    <Container>
      <NavItems>
        <Logo />
        <Headers>antools.</Headers>
      </NavItems>

      <NavItems>
        <Item>Home</Item>
        <Item>Categories</Item>
        <Item>My Collection</Item>
        <Item>Blog</Item>
      </NavItems>

      <NavItems>
        <Button nones>Login</Button>
        <Button>Sign up</Button>
      </NavItems>
    </Container>
  );
};

export default Navbar;
