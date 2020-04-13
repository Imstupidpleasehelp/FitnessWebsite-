import React, { Component } from 'react';


class Cart extends Component {
    state = { 
        cart: null
     }
     componentDidMount() {
         console.log(this.props.cart)
     }
    render() { 
        if (this.props.cart)
        return ( <div> 
            <ul>{
                this.props.cart.map(c => <li key={c.title}>Name: {c.title} Quantity: {c.quantity} </li>)
            }
            </ul>
            {
                
            }
            
            
            </div> 
            ); else return (<p>Asss</p>)
    }
}
 
export default Cart;