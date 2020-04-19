import React, { Component } from 'react';


class Cart extends Component {
    state = { 
        cart: null
     }
     componentDidMount() {
         console.log(this.props.cart)
     }
    render() { 
        if (this.props.cart.length !== 0) 
        return ( <div> 
            <ul>{
                this.props.cart.map(cart => <li > <h1>{cart.title} </h1>
                   
                    
                    </li>)
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