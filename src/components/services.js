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
  }
  componentDidMount() {
    console.log(this.props.cartAmount)
    
  }
 
  

render() {

  if (this.props.propdata) {
    var serviceitems = this.props.propdata.main.serviceitems.map(function(
      serviceitems
    ) {
      return (
          
              
              <article className="" key={serviceitems.title}> 
              
                <img src={serviceitems.image} alt={serviceitems.title} width="150vw" height="200vh" className=""></img>
            
                <h5 className="" >{serviceitems.title}</h5>
                
                
                <p className="">{serviceitems.description}</p>
                <p className="">${serviceitems.price}</p>
                <button  className="">Add to cart</button>
                <Collapsible trigger={<p className="">Read more</p>}>{serviceitems.fulldescription} </Collapsible>
               
                </article>
              
             
        
      );
    });
  } else return <h1>Loading...</h1>;

    return (
      <section >
<h1 className="servicestitle">Some services I offer</h1>
      <div className="col-xl-12 ">

         <div className="row servicebox">

            

            
              {serviceitems}
            </div>

            
          </div>
    
   </section>
    );
  }
}

export default Services;