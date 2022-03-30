import styled from 'styled-components';
import Announcement from '../components/Announcements';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
padding:20px;
`;

const Title = styled.h1`
font-weight: 300;
text-align: center;
`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border:${props => props.type === "filled" && "none"};
background-color:${(props) => props.type === "filled" ? "black" : "transparent"};
color:${props => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;`;

const Info = styled.div`
flex: 3;
`;

const Product = styled.div`
display:flex;
justify-content: space-between;
`;

const ProductDetail = styled.div`
flex:2;
display:flex;
`;

const Image = styled.img`
width:200px;
object-fit: contain;
`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction:column;
justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductQuantity = styled.span``;

const PriceDetail = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items: center; 
justify-content: center;
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;

const ProductAmount = styled.div`
font-style: 24px;
margin: 5px;
`;

const ProductPrice = styled.div`
font-size:30px;
font-weight: 200;
`;

const Hr = styled.div`
background-color: #eee;
border:none;
height: 1px;
`;

const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding: 20px;
height: 50vh;
`;

const SummaryTitle = styled.h1`
font-weight: 200;
`;

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${(props) => props.type === "total" && "500"};
font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
width:100%;
padding:10px;
background-color: white;
color:black;
font-weight:600;
`;

export const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>
                    YOUR  BAG
                </Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText> Shopping Bag (2)</TopText>
                        <TopText> Your Wishlist Bag (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://5.imimg.com/data5/SELLER/Default/2021/3/OG/ZN/PV/93806650/bcs-omega-3-fish-oil-500x500.png" />
                                <Details>
                                    <ProductName>Omega-3 Fish Oil</ProductName>
                                    <ProductId>
                                        <b>ID:</b> 12233632312
                                    </ProductId>
                                    <ProductQuantity>
                                        <b>Quantity:</b> 1
                                    </ProductQuantity>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>₹ 6000</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="https://cdn.shopify.com/s/files/1/0023/0440/9666/products/US_CreatinePowder_60srv_Unflavored.png?v=1608886799" />
                                <Details>
                                    <ProductName>On Creatine</ProductName>
                                    <ProductId>
                                        <b>ID:</b> 12243632312
                                    </ProductId>
                                    <ProductQuantity>
                                        <b>Quantity:</b> 1
                                    </ProductQuantity>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>₹ 700</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>₹ 6,000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Fee</SummaryItemText>
                            <SummaryItemPrice>₹ 100</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Discount</SummaryItemText>
                            <SummaryItemPrice>₹ 100</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>₹ 6000</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;
