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
        <div key={serviceitems.key} >
          <div >
              <div className="service-item-item">
                <img src={serviceitems.image} alt={serviceitems.title} className="service-item-image"></img>
                <h5 className="service-item-title" >{serviceitems.title}</h5>
                <p className="service-item-description">{serviceitems.description}</p>
                <button className="service-item-button">Add to cart</button>
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