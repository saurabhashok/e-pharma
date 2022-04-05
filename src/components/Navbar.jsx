import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import { mobile } from '../responsive';

const Container = styled.div`
  height:60px;
  ${mobile({height: "50px", padding:"20px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-item:center;
  ${mobile({padding: "10px 0px" })}
  `;

const Language = styled.span`
  font-size: 14px;
  cursor:pointer;
  ${mobile({ display:"none" })}
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
  width:200px;
  padding:5px;
  ${mobile({width:"50px"})}
`;

const Left = styled.div`
flex:1;
display:flex;
align-items:center;
${mobile({width:"25%"})}
`;

const Center = styled.div`flex:1
`;

const Logo = styled.h1`
font-weight:bold;
text-align:center;
${mobile({fontSize: "20px", justifyContent:"center"})}
`;

const Right = styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
flex:1;
${mobile({ flex:1, justifyContent: "center" })}
`;

const MenuItem = styled.div`
font-size:14;
margin:25px;
${mobile({fontSize: "10px" , marginLeft:"10px" })}
`;



const Navbar = () => {
  return (
    <Container>
      <Wrapper>
      <Left><Language>EN</Language>
      <SearchContainer>
        <Input placeholder="Search"/>
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
