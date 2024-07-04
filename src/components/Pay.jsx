import axios from 'axios';
import React, { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';

const KEY = "pk_test_51OEr1BSBHiMWZB6wfyebq2XJZOPnlEnfk3hvr14rBbiFPrIgqBqsu9YwBa9Q6CFYX8oxmgb0NDUmxPTeFQUiSyIl00foue47N3"

function Pay() {
    // const [stripeToken, setStripeToken] = useState(null)

    const paymentHandler = async(e) => {
        try{

            const res = await axios.post("http://localhost:5000/api/payment/createorder", 
            {
                amount: 4000,
                currency: 'INR',
                receipt: "receipt#1"
            });
            console.log(res.data)
        } catch(e) {
            console.log(e)
        }
    }


    
  return (
    <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }}>
        
        
        <button style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
        }} onClick={paymentHandler}>
      Pay Now
      </button>
    
    </div>
  )
}

export default Pay
