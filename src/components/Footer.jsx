import styled from 'styled-components'
import {Room, MailOutline, Phone, Facebook, Instagram, Twitter, YouTube} from '@material-ui/icons';

const Container = styled.div`
display:flex;
`

const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
margin:20px 0px;
`;

const SocialContainer = styled.div`
display:flex;
`;

const SocialIcon = styled.h1`
width:40px;
height:40px;
color:white;
border-radius:50%;
background-color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`;

const Center = styled.div`
flex:1;
padding:20px;
`;

const Title = styled.h3`
  margin-bottom:30px;
`;

const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`;

const ListItem =styled.div`
width:50%;
margin-bottom:10px;
`

const Right = styled.div`
flex:1;
padding:20px;
`;

const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`;

const Payment = styled.img`
width:50%`
;

const Footer = () => {
  return (
    <Container>
    <Left>
    <Logo>Medicare.</Logo>
    <Desc>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Imperdiet nulla malesuada pellentesque elit eget.
    </Desc>
    <SocialContainer>
      <SocialIcon color="3B5999">
        <Facebook/>
      </SocialIcon>
      <SocialIcon color="E4405F">
        <Instagram/>
      </SocialIcon>
      <SocialIcon color="55ACEE">
        <Twitter/>
      </SocialIcon>
      <SocialIcon color="E60023">
        <YouTube/>
      </SocialIcon>
    </SocialContainer>
    </Left>
    <Center>
    <Title>
    Useful links
    </Title>
    <List>
    <ListItem>About Us</ListItem>
    <ListItem>FAQs</ListItem>
    <ListItem>Find a Pharmacy</ListItem>
    <ListItem>Blogs</ListItem>
    <ListItem>Health queries</ListItem>
    <ListItem>Health Checkups</ListItem>
    <ListItem>Terms and Conditions</ListItem>
    <ListItem>Privacy Policy</ListItem>
    </List>
    </Center>
    <Right>
      <Title>
      </Title>
      <ContactItem>
        <Room style={{marginRight:"10px"}}/> Basapura, Lassya Lake View, Bangalore
      </ContactItem>
      <ContactItem>
        <Phone style={{marginRight:"10px"}}/> +91-9900123450
      </ContactItem>
      <ContactItem>
        <MailOutline style={{marginRight:"10px"}}/>manjunathamh@gmail.com
      </ContactItem>
      <Payment src="https://d6xcmfyh68wv8.cloudfront.net/assets/payments/cp_modes_wallets.png"/>
    </Right>
    </Container>
  )
}

export default Footer;
