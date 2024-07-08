import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Footer from '../components/Footer'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({width: "50%"})}
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({ display: "flex", flexDirection: "column"})}

`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({width:"100%", margin: "10px 0px"})}
`
const Option = styled.option``

function ProductList() {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState('newest');
    
    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        })    
    }
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>{cat.charAt(0).toLocaleUpperCase() + cat.slice(1)}</Title>
      <FilterContainer>
        <Filter>
            <FilterText>Filter Products:</FilterText>
            {/* <Select name='color' onChange={handleFilters}>
                <Option disabled>Color</Option>
                <Option>Red</Option>
                <Option>Green</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
            </Select> */}
            <Select name='size' onChange={handleFilters}>
                <Option disabled selected>Machine capacity</Option>
                <Option value="small">Small</Option>
                <Option value="medium">Medium</Option>
                <Option value="large">Large</Option>
            </Select>
        </Filter>
        <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
                <Option value="newest">Newest</Option>
                <Option value="asc">Price(asc)</Option>
                <Option value="desc">Price(desc)</Option>
            </Select>    
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      {/* <Newsletter/> */}
      <Footer/>
    </Container>
  )
}

export default ProductList
