import React from 'react';

class Services extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
     propdata: {}
    };
  }
 
  

render() {
  /*const { loading} = this.state;
  if (loading ) {
    return (<p>loading...</p>)
  } */
  if (this.props.propdata) {
    var serviceitems = this.props.propdata.main.serviceitems.map(function(
      serviceitems
    ) {
      return (
        <div key={serviceitems.title} className="">
          
              <div className="">
                <img src={serviceitems.image} alt={serviceitems.title}></img>
                <h5>{serviceitems.title}</h5>
                <p>{serviceitems.description}</p>
              </div>
        </div>
      );
    });
  } else return <h1>Something has gone wrong, contact your software guy</h1>;

    return (
      <section id="serviceitems">

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