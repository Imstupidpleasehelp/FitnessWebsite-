  
import React, { Component } from 'react';

import  { NavLink } from 'react-router-dom'

class Cart extends Component {
    constructor(props){
        super(props);    
    this.state = { 
        cart: null,
        propdata: null,
        priceamount: 0,
        prices: document.getElementsByClassName('cartprice').value
     };
  
    }
     componentDidMount() {

console.log(this.state.prices)
     }
     
    
    
    

     

    render()
    
   
    { 
        
        if (this.props.cart.length !== 0) { 
            var cartitems = this.props.cart.map(function(
              cartitems
            ) 
            
            {
              return (
                  
                      <div className="row" key={cartitems[1]}>
                      <div className="column">
                        <img src={cartitems[2]}  id={cartitems[2]} width="20%" height="25%" alt={cartitems[1]} className=""></img>
                    
                        <h5 className="" >{cartitems[1]}</h5>
                       
                        <p  className="cartprice">${cartitems[0]}</p>
                        <p  className="">Duration: 0week(s)</p> <button >+1</button>
                      
                        </div>
                       
                        
                        
                      </div>
                      
                   
              );
            });
          } else return <h1 className="nocart">Add items to your cart and they will appear here.</h1>;
        
          return (
            <div>
      
      
        
         {cartitems}
         
           
      
       <nav>   
        <NavLink to='/Checkout'><button className="btn btn-success checkoutbutton" >CheckOut</button></NavLink>
            </nav>
              
         </div>
          )
    }
    
    
    
    
  }
 
export default Cart;