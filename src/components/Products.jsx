import styled from "styled-components"
// import { popularProducts } from "../data"
import Product from "./Product"
import { mobile } from "../responsive"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

const Container = styled.div`
    margin: 20px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${mobile({width: "100%", diplay: "flex", flexDirection: "column", margin:"10px 0px"})}

`


function Products({cat, filters, sort}) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async() => {
      try{
        const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products");
        setProducts(res.data)
        console.log(cat)
      } catch(err){
        console.log(err)
      }
    }
    getProducts()
    
  },[cat]);

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter(item => Object.entries(filters).every(([key,value]) => 
        item[key].includes(value)
      ))
    );
  },[products,cat, filters])

  console.log(products)
  console.log(filteredProducts)

  useEffect(() => {
    if(sort === "newest"){
      setFilteredProducts(prev =>
        [...prev].sort((a,b) => {
          return Date.parse(a.createdAt) - Date.parse(b.createdAt) })
        )
    } else if (sort === "asc") {
      setFilteredProducts(prev => 
        [...prev].sort((a,b) => a.price - b.price)
        )
    } else {
      setFilteredProducts(prev => 
        [...prev].sort((a,b) => b.price - a.price)
        )    
    }
  }, [sort])
  
  
  return (
    <Container>
      {cat ? filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      )) 
    : products.slice(0,8).map((item) => (
      <Product item={item} key={item._id} />
    )) 
    }
    </Container>
  )
}

export default Products
