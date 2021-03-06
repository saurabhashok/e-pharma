import React from 'react';
import styled from "styled-components";
import { mobile } from '../responsive';

const  Container = styled.div`
flex:1;
margin:3px;
height:70vh;
position: relative;
`;

const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
${mobile({height: "20vh"})}
`;

const Info = styled.div`
position:absolute;
top:0;
left:0;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;
height:100%;
transition: all 0.05s ease;

&:hover{
  transform:scale(1.05);
}
`;

const Title = styled.h1`
color:white;
margin-bottom:20px;
font-weight:600;
`;

const Button = styled.button`
border:none;
padding:10px;
background-color:white;
color:dark gray;
cursor:pointer;
font-weight:600;
`;


const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src ={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>BOOK NOW</Button>
    </Info>
    </Container>
  )
}

export default CategoryItem
