import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection : "column"})}
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${mobile({display: "flex", textAlign: "start"})}

`
const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({display : "none"})}
`
const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({backgroundColor : "#fff8f8", flexDirection: "column"})}
`
const Title =  styled.h3`
    margin-bottom: 30px;
`
const List =  styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem =  styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Logo = styled.h1``;

const Desc = styled.p``;

const SocialContainer = styled.div`
    display: flex;

`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

 
function Footer() {
  return (
    <Container>
        <Left>
            <Logo>EULER</Logo>
            <Desc> Various machines are available, from assembly, manufacturing to automation. Tools support and 2D drawing's for each and every product's are available. Machine's with high quality can be expected.</Desc>
            <SocialContainer>
                <SocialIcon color="385999">
                    <FacebookIcon />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <TwitterIcon />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <PinterestIcon />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Assembly machines</ListItem>
                <ListItem>Processing Machines</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><LocationOnIcon style={{marginRight: "10px"}}/>Ambathur, Chennai - 600 058</ContactItem>
            <ContactItem><CallIcon style={{marginRight: "10px"}}/>+91 44 2245 1124</ContactItem>
            <ContactItem><MailOutlineIcon style={{marginRight: "10px"}}/>contact@euler.in</ContactItem>
            <Payment src='https://user-images.githubusercontent.com/52581/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png'/>

        </Right>
    </Container>
  )
}

export default Footer
