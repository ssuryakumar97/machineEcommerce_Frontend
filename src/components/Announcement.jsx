import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    height: 30px;
    background-color: purple;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    ${mobile({width : "100%", padding: "5px", fontSize: "12px"})}
`

function Announcement() {
  return (
    <Container>
        Super Deal! Get Free accessories for Orders More than 10 Machines
    </Container>
  )
}

export default Announcement
