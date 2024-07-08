import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { mobile } from '../responsive'
import { userRequest } from '../requestMethods'


const Wrapper = styled.div``

const Bottom = styled.div`
  margin-top: 40px;
  ${mobile({ flexDirection: "column" })}
`;

const OrdersDiv = styled.div`
  margin: 15px 5px;
  padding: 10px;
  border-radius: 10px;
   box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
   cursor: pointer;
`



const Orders = () => {
    const [orders, setOrders] = useState([])
    const user = useSelector(state => state.user.currentUser)
    // console.log(user)

    useEffect(() => {
        const getOrders = async() =>{
            const res = await userRequest.get(`orders/find/${user._id}`)
            // console.log(res.data)
            setOrders(()=> [...res.data])
        }
        getOrders()
    },[])

    // console.log(orders)
  return (
    <div>
        <Navbar />
        <Announcement />
        <Wrapper>
        <Bottom>
          {orders.map((val, ind) =>  {

            return ( 

              <OrdersDiv key={ind}>
                <div><strong>ID:</strong> {val._id}</div>
                <div><strong>Products:</strong> {val.products.map((data, index) => {
                  return (
                    <span key={index}>
                      {data.title} &nbsp;|| &nbsp;
                    </span>
                  )
                })}</div>
                <div><strong>Price :</strong> ₹{val.finalPrice}</div>
                <div><strong>Delivery Status:</strong> {val.deliveryStatus}</div>             
           </OrdersDiv>
            )
          })}
        
         
        </Bottom>
        </Wrapper>

        <Footer />
      
    </div>
  )
}

export default Orders
