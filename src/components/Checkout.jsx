import axios from 'axios';
import React, { useEffect, useState } from 'react'

function CheckOut() {
    // const [stripeToken, setStripeToken] = useState(null)

    const paymentHandler = async(e) => {
        try{
            const res = await axios.post("http://localhost:5000/api/payment/createOrder", 
            {
                amount: 4000,
                currency: 'INR',
                receipt: "receipt#1"
            });
            const order = await res.data
            // console.log(order)
            var options = {
                "key": "rzp_test_FdZ3cLLXw5m5Cq", // Enter the Key ID generated from the Dashboard
                "amount": "4000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "Euler Automation", //your business name
                "description": "Test Transaction",
                "image": "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg",
                "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "handler": async function (response){

                    const {razorpay_payment_id,razorpay_order_id,razorpay_signature} = response;

                    const verifyPayment = await axios.post("http://localhost:5000/api/payment/verifyPayment",{
                        order_id: razorpay_order_id,
                        payment_id: razorpay_payment_id
                    },{ headers: {
                        "x-razorpay-signature":razorpay_signature
                    }}
                    )
                    const jsonres =await verifyPayment.data;
                    console.log(jsonres)
                    
                    // alert(response.razorpay_payment_id);
                    // alert(response.razorpay_order_id);
                    // alert(response.razorpay_signature)
                },
                "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                    "name": "Surya Kumar", //your customer's name
                    "email": "suryakumar@gmail.com", 
                    "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };
            var rzp1 = new window.Razorpay(options);
            rzp1.on('payment.failed', function (response){
                    alert(response.error.code);
                    alert(response.error.description);
                    alert(response.error.source);
                    alert(response.error.step);
                    alert(response.error.reason);
                    alert(response.error.metadata.order_id);
                    alert(response.error.metadata.payment_id);
            });
                rzp1.open();
                e.preventDefault();
            
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

export default CheckOut
