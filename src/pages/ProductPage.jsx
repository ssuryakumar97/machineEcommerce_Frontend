import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from '../responsive'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { BASE_URL, publicRequest } from '../requestMethods'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../redux/cartRedux'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px", flexDirection: "column"})}

`
const ImgContainer = styled.div`
    flex:1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: contain;
    ${mobile({height: "40vh"})}
`
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile({padding: "10px", display: "flex", flexDirection: "column"})}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width: "100%"})}

`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.div`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``


const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: "100%"})}

`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`

function ProductPage() {
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [goToCart, setGoToCart] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {products: cartProduct} = useSelector((state) => state.cart)
    // console.log(cartProduct)

    useEffect(()=>{
        const getProduct = async () => {
            try{
                const res =await publicRequest.get("/products/find/"+id)
                // console.log(res.data)
                setProduct(res.data)
                
            } catch(error){
                console.log(error)
            }
        }
        getProduct();
        
    }, [id])

    useEffect(() => {
        const filteredProduct = cartProduct.filter((val) => id == val._id)
        if(filteredProduct[0]?._id == id) {
            setGoToCart(true)
        } else{
            setGoToCart(false)
        }
    },[cartProduct])
    // console.log(product)

    const handleQuantity = (type) =>{
        if(type === "dec") {
           quantity>1 && setQuantity(quantity-1)
        } else{
            setQuantity(quantity+1)
        }
    }
    
    const handleClick = () => {
        dispatch(addProduct({...product, quantity, totalProductPrice: product.price * quantity}))
    }

    const handleGoToCart = () => {
        navigate("/cart")
    }

  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
            <Image src={`${BASE_URL}/image/download/${product.img}`}/>
        </ImgContainer>
        <InfoContainer>
            <Title>{product?.title}</Title>
            <Desc>{product?.desc}</Desc>
            <Price>₹{product?.price}</Price>
            <FilterContainer>
                {/* <Filter>
                    <FilterTitle>Color</FilterTitle>
                    {product.color?.map((c)=> 
                        (<FilterColor color={c} key={c} onClick={()=>setColor(c)}/>)
                    )}
                </Filter> */}
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>{product.size?.length > 0 && product.size[0].charAt(0).toUpperCase() + product.size[0].slice(1)}</FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                {!goToCart && <AmountContainer>
                    <RemoveIcon onClick={() => handleQuantity("dec")}/>
                    <Amount>{quantity}</Amount>
                    <AddIcon onClick={() => handleQuantity("inc")}/>
                </AmountContainer>}
                
                {goToCart ? <Button onClick={handleGoToCart}>GO TO CART</Button>: <Button onClick={handleClick}>ADD TO CART</Button>}
                {/* <Button onClick={handleClick}>ADD TO CART</Button> */}
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      {/* <Newsletter/> */}
      <Footer/>
    </Container>
  )
}

export default ProductPage
