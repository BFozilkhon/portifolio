import React from 'react';

import {
  Wrapper,
  Container,
  Title,
  Description,
  Button,
  Box,
  Icon,
  BoxTitle,
} from './style';

export const NewComer = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Newcomer Tools</Title>
        <Description>
          Wow! see the latest update of the most recommended tools from reliable
          designers and developers
        </Description>
        <Button>Explore Home</Button>
      </Wrapper>
      <Wrapper>
        <Box>
          <Icon />
          <BoxTitle>Zeplin</BoxTitle>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default NewComer;
