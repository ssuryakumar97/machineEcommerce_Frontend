import styled from "styled-components"
import { mobile } from "../responsive"
import { Link } from "react-router-dom"

const Container = styled.div`
    flex:1;
    margin: 3px;
    height: 60vh;
    position: relative;
    border: solid 2px gray;
    border-radius: 20px;
`
const Image = styled.img`
    width: 100%;
    height: 70%;
    object-fit: contain;
    margin-top: 40%;
    ${mobile({height : "30vh"})}
`
const Info = styled.div`
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
const Title = styled.h1`
    margin-bottom: 20px;
    text-align: center;
`
const Button = styled.button`
    padding: 10px;
    background-color: gray;
    color: white;
    cursor: pointer;
    font-weight: 600;
    border-radius: 15px;
`

function CategoryItem({item}) {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>ORDER NOW</Button>
      </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem
