import React from "react";

import Collapsible from 'react-collapsible';
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.min.css";
import "font-awesome/css/font-awesome.min.css";


class Services extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
  
     propdata: {}
    };
  }
 
  

render() {

  if (this.props.propdata) {
    var serviceitems = this.props.propdata.main.serviceitems.map(function(
      serviceitems
    ) {
      return (
        <div key={serviceitems.title} >
          <div >
              <div className="cf ">
              <article className="fl w-50 w-20-ns tc pv5 bg-black-05" > 
              <div className="">
                <img src={serviceitems.image} alt={serviceitems.title} width="100vh" height="100vh" className=""></img>
                </div>
                <div className="">
                <h5 className="" >{serviceitems.title}</h5>
                
                <Collapsible trigger={<p className="readmore">Read more</p>}> 
                <p className="service-item-description">{serviceitems.description}</p>
                <p className="service-item-price">${serviceitems.price}</p><button className="service-item-button btn btn-info">Add to cart</button>
                </Collapsible>
                </div>
                </article>
              </div>
              </div>
        </div>
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