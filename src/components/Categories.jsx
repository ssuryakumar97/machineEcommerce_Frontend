import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 20px;  
    justify-content: space-between;
    ${mobile({padding : "0px", flexDirection: "column", width: "100%"})};
`
function Categories() {
  return (
    <Container>
      {categories.map(item=>(
        <CategoryItem item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Categories
