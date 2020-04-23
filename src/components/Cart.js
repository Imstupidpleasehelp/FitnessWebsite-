import React, { Component } from 'react';

import  { NavLink } from 'react-router-dom'

class Cart extends Component {
    constructor(props){
        super(props);    
    this.state = { 
        cart: null,
        propdata: null,
        priceamount: 0,
        
     };
    
      
  } 
        
     componentDidMount() {
function makethetotal() {
  console.log('I worked')
}


     }
     
     
    
    

     

    render()
    
   
    { 
        
        if (this.props.cart.length !== 0) { 
            var cartitems = this.props.cart.map(function(
              cartitems
            ) 
            
            {
              return (
                  
                      <section className="cart-item" key={cartitems[1]}>
                      
                        <img src={cartitems[2]}  id={cartitems[2]}  width="15%" height="15%" className="cart-item-image"></img>
                    
                        <h5 className="cart-title" >{cartitems[1]}</h5>
                       
                        <p  className="cart-price">${cartitems[0]}</p>
                        <p  className="cart-duration">Duration: 0week(s)</p> <button >+1</button>
                      
                        
                       
                        
                        
                      </section>
                      
                   
              );
            });
          } else return <h1>Add items to your cart and they will appear here.</h1>;
        
          return (
            <div> 
            <div className="">
      
      <div className="cart-item-grid">
        <div className="cart-item col-sm-6">
         {cartitems}
         <nav>
            <NavLink to='/Checkout'><button className="btn btn-success checkoutbutton" >CheckOut</button></NavLink>
            </nav>
              </div>
            </div>
         </div>
         </div>
          )
    }
    
    
    
    
  }
 
export default Cart;