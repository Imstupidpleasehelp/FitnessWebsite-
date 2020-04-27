import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'
import axios from "axios";


class Checkout extends Component {
    state = { 
        cart: null
     }
    render() { 
      async  function handleToken(token) {
const response = await axios.post('http://localhost/2000',{
    token,
    
})
const {status} = response.data
if (status === 'success') {
alert('yes')

}
else {
    alert('no')
}
        }


        return ( <div><StripeCheckout
        stripeKey="pk_test_OAJFPwbj0kmyHhQmbcIJWm1R00qNoh5R9N"
        token={handleToken}
        
        amount={1}
         /></div> );
    }
}
 
export default Checkout;