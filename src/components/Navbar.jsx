import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../responsive";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


const Container = styled.div`
    min-height: 30px;
    ${mobile({width: "100%",height : "50px"})}
    
`
const Wrapper = styled.div`
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding : "10px 0px"})};
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    align-items: center;
    ${mobile({display : "none"})}

`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px; 
    padding: 5px;
    ${mobile({marginLeft : "10px"})}
`
const Input = styled.input`
    border: none;
    ${mobile({ width : "40px"})}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h3`
    font-weight: bold;
    ${mobile({marginLeft: "10px", fontSize : "14px"})}

`
const Image = styled.img`
    width: 40px;
    height: 40px;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent : "center", marginRight: "10px"})}
`

const MenuItem = styled.div`
    font-size: 14px;
    
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize : "12px", marginLeft: "5px"})}
`

const LinkItem = styled(Link)`
    text-decoration: none;
    color: black;
`


function Navbar() {
    const quantity = useSelector(state => state.cart.quantity)

    const navigate= useNavigate()

    const handleLoginLogout = () => {
        localStorage.removeItem("persist:root");
    navigate("/login");
    window.location.reload()
    }


    return (
    <Container>
        <Wrapper>
            <Left>
                {/* <Language>EN</Language> */}
                <Image src='/logoicon.jpg' />
                <Logo>EULER'S 360 AUTOMATION</Logo>
            </Left>
            <Center></Center>
            <Right>  
            <LinkItem to="/">
                    <MenuItem>HOME</MenuItem>
                </LinkItem>
                <LinkItem to="/register">
                    <MenuItem>REGISTER</MenuItem>
                </LinkItem>
                <LinkItem to="/orders">
                <MenuItem>ORDERS</MenuItem>
                </LinkItem>
                
                <MenuItem onClick={handleLoginLogout}>SIGN IN</MenuItem>
                <MenuItem onClick={handleLoginLogout}>LOGOUT</MenuItem>
                <Link to="/cart">
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
                </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
