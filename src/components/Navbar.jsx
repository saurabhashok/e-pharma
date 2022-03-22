import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import {Badge} from "@material-ui/core";

const Container = styled.div`
  height:60px;
  /* background-color:black; */
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-item:center;
  `;

const Language = styled.span`
  font-size: 14px;
  cursor:pointer;
  `;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
    `;

const Input = styled.input`
  border:none;
`

const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`;

const Center = styled.div`flex:1`

const Logo = styled.h1`
font-weight:bold;
text-align:center;
`;

const Right = styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
flex:1`;

const MenuItem = styled.div`
font-size:14;
margin:25px;
`;



const Navbar = () => {
  return (
    <Container>
      <Wrapper>
      <Left><Language>EN</Language>
      <SearchContainer>
        <Input />
        <Search style={{color:"gray", fontsize:16}}/>
      </SearchContainer>
      </Left>
      <Center><Logo>Medicare.</ Logo></Center>
      <Right>
        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined/>
          </Badge>
      </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
