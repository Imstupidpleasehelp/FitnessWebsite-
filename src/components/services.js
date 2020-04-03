import React from 'react';

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
              <div className="service-item-item">
                <img src={serviceitems.image} alt={serviceitems.title} className="service-item-image"></img>
                <div className="service-item-text">
                <h5 className="service-item-title" >{serviceitems.title}</h5>
                <p className="service-item-price">{serviceitems.price}</p>
                <p className="service-item-description">{serviceitems.description}</p>
                <button className="service-item-button btn btn-info">Add to cart</button></div>
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