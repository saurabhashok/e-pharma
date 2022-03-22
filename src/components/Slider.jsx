import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import {sliderItems} from  "../data";
import {useState} from 'react';


const Container = styled.div`
  width:100%;
  height:100vh;
  display: flex;
  /* background-color:Coral; */
  position:relative;
  overflow:hidden;
`

const Arrow = styled.div`
  width:50px;
  height:50px;
  background-color:#fff7f7;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  top:0;
  bottom:0;
  left:${props=> props.direction === "left" && "10px"};
  right:${props=> props.direction === "right" && "10px"};
  margin:auto;
  cursor: pointer;
  opacity:0.5;
  z-index:2;
`;

const Wrapper = styled.div`
  height:90%;
  display:flex;
  transition: all 1.5s ease;
  transform:translateX(${props => props.slideIndex *-100}vw);
`;

const Slide = styled.div`
  background-color:#${props => props.bg};
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center
 `;
const ImgContainer = styled.div`
  flex:1;
  height:100%;
`;

const Image = styled.img`
  height:80%;
`;

const InfoContainer = styled.div`
flex:1;
padding:50px;`;

const Title = styled.h1`
font-size:70px;
`;

const Desc = styled.p`
margin: 50px 0px;
font-size:20px;
font-weight:500;
lettwe-spacing:3px;
`;

const Button = styled.button`
  padding:10px;
  font-size:20px;
  background-color:transparent;
  cursor:pointer;
`


const  Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick= (direction)=>{
      if (direction ==="left"){
        setSlideIndex(slideIndex > 0 ? slideIndex - 1: 2)
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 :2)
      }
  };


  return (
    <Container>
      <Arrow direction="left" onClick={() => (handleClick("left"))}>
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
       {sliderItems.map((item) => (
         <Slide bg={item.bg} key={item.id}>
           <ImgContainer>
             <Image src={item.img}/>
           </ ImgContainer>
           <InfoContainer>
             <Title>{item.title}</Title>
             <Desc> {item.desc}</Desc>
             <Button>Shop now</Button>
           </ InfoContainer>
         </Slide>
       ))}
      <Slide bg="f5fafd">
        <ImgContainer>
          <Image src="https://i.ibb.co/W2Cvxmk/doc.png"/>
        </ ImgContainer>
        <InfoContainer>
          <Title>HAPPY HEALTH, HAPPY LIFE!</Title>
          <Desc> MEGA CASHBACK UPTO 30% ON FIRST ORDER</Desc>
          <Button>Shop now</Button>
        </ InfoContainer>
      </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => (handleClick("right"))}>
        <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
}

export  default  Slider