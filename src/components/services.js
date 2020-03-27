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
        <div key={serviceitems.title} className="serviceitemlayout">
          
              <div className="serviceitem">
                <img src={serviceitems.image} alt={serviceitems.title}></img>
                <h5>{serviceitems.title}</h5>
                <p>{serviceitems.description}</p>
                <button>Add to cart</button>
              </div>
        </div>
      );
    });
  } else return <h1>Something has gone wrong, contact your software guy</h1>;

    return (
      <section >

      <div className="">

         <div className="serviceitems">

            <h1>Some services I offer</h1>

            
              {serviceitems}
            </div>

            
          </div>
    
   </section>
    );
  }
}

export default Services;