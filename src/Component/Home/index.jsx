import React from 'react';
import { Container, Info, SubInfo,InputWrap, Input,Search, Button, IconWrap, Facebook,Insta, Twit } from './style';

const Home = () => {
    return (
      <Container>
        <Info>Awesome tools for Designer & Developer.</Info>
        <SubInfo>
          Antool is a web collection of information on paid or free Design and
          Development tools
        </SubInfo>

        <InputWrap>
          <Search/>
          <Input type='search' placeholder='find more than 430+ tools...' />
          <Button>Search</Button>
        </InputWrap>
        <IconWrap>
          <Facebook />
          <Insta />
          <Twit/>
        </IconWrap>
      </Container>
    );
};

export default Home;
