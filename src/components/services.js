import React from "react";

import Collapsible from 'react-collapsible';
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.min.css";
import "font-awesome/css/font-awesome.min.css";


class Services extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartAmount: null,
      cart: null,
     propdata: {}
    };
    
    document.addEventListener('click', e => {
      if (e.target.classList.contains('button')) {
   
        this.props.addToCart(e)
        
      }
    });
  }
  
  componentWillUnmount() {
    document.removeEventListener('click', e => {
      if (e.target.classList.contains('button')) {
   
        this.props.addToCart(e)
        
      }
    });
  

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
                <img src={serviceitems.image} alt={serviceitems.title} className="db bg-center cover aspect-ratio--object"></img>
            </div>
                <h5 className="servicetitle" >{serviceitems.title}</h5>
                <p id={serviceitems.description} className=" servicedesc" >{serviceitems.description}</p>
                <p  className=" serviceprice">${serviceitems.price}</p>
                <p id ={serviceitems.amount} className=" serviceamount">Duration:{serviceitems.amount} week(s)</p>
                <button name={serviceitems.title} id= {serviceitems.image} value={serviceitems.price} className="button">Add to cart</button>
                <Collapsible trigger={<p className="readmore">Read more</p>}>{serviceitems.fulldescription} </Collapsible>
               
                </article>
              </section>
           
      );
    });
  } else return <h1>Loading...</h1>;

    return (
      <div>
     <h1 className="servicestitle">Some services I offer</h1> 
      <div className="container">

<div className="row">
  <div className="col-sm-4">
   {serviceitems}
        </div>
      </div>
   </div>
   </div>
    );
  }
}

export default Services;