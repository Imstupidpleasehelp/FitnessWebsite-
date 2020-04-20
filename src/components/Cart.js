import React, { Component } from 'react';

import  { NavLink } from 'react-router-dom'

class Cart extends Component {
    constructor(props){
        super(props);    
    this.state = { 
        cart: null,
        propdata: null
     }
     
     }
componentDidMount() {

}
     

    render() { 
        
        if (this.props.propdata) {
            var serviceitems = this.props.propdata.main.serviceitems.map(function(
              serviceitems
            ) 
            
            {
              return (
                  
                      <section className="cf w-100 pa2-ns" key={serviceitems.title}>
                      <article className="fl w-100 w-50-m  w-25-ns pa2-ns" > 
                      <div className="aspect-ratio aspect-ratio--1x1 ">
                        <img src={serviceitems.image} alt={serviceitems.title} id={serviceitems.image} className="db bg-center cover aspect-ratio--object"></img>
                    </div>
                        <h5 className="ph2 ph0-ns pb3 link db" >{serviceitems.title}</h5>
                        <p id={serviceitems.description} className="f5 f4-ns mb0 black-90">{serviceitems.description}</p>
                        <p id={serviceitems.price} className="f6 f5 fw4 mt2 black-60">${serviceitems.price}</p>
                        <p id ={serviceitems.amount} className="f6 f5 fw4 mt2 black-60">Duration:{serviceitems.amount} week(s)</p>
                        <button className="button">Add to cart</button>
                        
                       
                        </article>
                        <nav>
            <NavLink to='/Checkout'><button className="btn btn-success" >CheckOut</button></NavLink>
            </nav>
                      </section>
                   
              );
            });
          } else return <h1>Add items to your cart and they will appear here.</h1>;
        
          return (
            <div> 
            <div className="">
      
      <div className="cart-item-grid">
        <div className="cart-item">
         {serviceitems}
              </div>
            </div>
         </div>
         </div>
          )
    }
}
 
export default Cart;