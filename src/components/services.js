import React from 'react';

class Services extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
     propdata: {}
    };
  }
  componentDidMount() {
   async function getitem(){
      
      
    }
  getitem();
  }
  

render() {
  const { loading} = this.state;
  if (loading ) {
    return (<p>loading...</p>)
  }
  if(this.props.propdata){
    var serviceitems = this.props.propdata.map(function(serviceitems){
      return <div key={serviceitems.title} className="">
         <div className="">
             <div className="">
                <div className="">
               <h5>{serviceitems.title}</h5>
                   <p>{serviceitems.category}</p>
                </div>
              </div>
        </div>
      </div>
    })
  }
  else 
  return (
    <h1>That's all, folks!</h1>
  )

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