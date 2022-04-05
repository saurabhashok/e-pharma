import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcements';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
padding:50px;
display:flex;
${mobile({padding:"10px", flexDirection:"column"})}
`;

const ImgContainer = styled.div`
`;

const Image = styled.img`
width:100%;
height:90vh%;
object-fit:cover;
${mobile({height: "40vh" })}
`;

const InfoContainer = styled.div`
flex:1,
padding:0px 50px;
${mobile({padding: "10px" })}
`;

const Title = styled.div`
font-weight:900;
font-size:20px;
`;

const Desc = styled.p`
margin:60px 0px;
`;

const Price = styled.span`
    font-weight:400;
    font-size:40px;
`;

const FilterContainer = styled.div`
width:50%;
margin:30px 0px;
display:flex;
justify-content:space-between;
${mobile({width: "100%" })}
`;

const Filter = styled.div`
display:flex;
align-items:center;
`;

const FilterTitle = styled.span`
font-size:20px;
font-weight:200
`;

const FilterQuantity = styled.select`
margin-left:10px;
padding:5px;
`;

const FilterQuantityOption = styled.option``;

const Button = styled.button`
  padding:10px;
  font-size:20px;
  background-color:teal;
  color:white;
  cursor:pointer;
  border:none;
  border-radius:5%;
  margin-top:10px;
`


const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://m.media-amazon.com/images/I/611PHgj6q4L._SL1500_.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder Double Rich Chocolate - 2Lbs</Title>
                    <FilterContainer>
                        <Filter>
                        <FilterTitle>Quantity</FilterTitle>
                        <FilterQuantity>
                            <FilterQuantityOption>1</FilterQuantityOption>
                            <FilterQuantityOption>2</FilterQuantityOption>
                            <FilterQuantityOption>3</FilterQuantityOption>
                            <FilterQuantityOption>4</FilterQuantityOption>
                            <FilterQuantityOption>5 (max)</FilterQuantityOption>
                        </FilterQuantity>
                        </Filter>
                    </FilterContainer>
                    <Button>ADD TO CART</Button>
                    <Desc>Optimum Nutrition's Gold Standard 100% Whey uses pure whey protein isolates as the primary ingredient. Combined with ultra-filtered whey protein concentrate, each serving provides 24 grams of all-whey protein and 5.5 grams of naturally occurring Branched Chain Amino Acids (BCAAs) which are prized by athletes for their muscle building qualities. You also get 4 grams of glutamine per serving. With 10 tempting flavours to choose from, ON Gold Standard 100% Whey gives you plenty of ways to keep workout recovery interesting.</Desc>
                    <Price>₹ 6,000/-</Price>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product;
