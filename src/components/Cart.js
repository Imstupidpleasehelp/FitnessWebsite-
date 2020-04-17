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
                this.props.cart.map(c => <li key={c.title}>Name: {c.title} Amount: {c.amount} </li>)
            }
            </ul>
            <button className="btn btn-success">CheckOut</button>
            {
                
            }
            
            
            </div> 
            ); else return (<h4 className="servicestitle">Add items to your cart and they will appear here.</h4>)
    }
}
 
export default Cart;