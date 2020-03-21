import React from 'react';
import $ from 'jquery';


class Services extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
     serviceitems: {}
    };
  }
  
  componentDidMount() {
    async function setthing() {
    this.setState({loading: false})
    }
    setthing();
  }
render() {
  const { loading, data } = this.state;
  if (loading ) {
    return (<p>loading...</p>)
  }
  if(this.props.data){
    var serviceitems = this.props.data.serviceitems.map(function(serviceitems){
      return <div key={serviceitems.title} className="columns portfolio-item">
         <div className="item-wrap">
             <div className="overlay">
                <div className="portfolio-item-meta">
               <h5>{serviceitems.title}</h5>
                   <p>{serviceitems.category}</p>
                </div>
              </div>
        </div>
      </div>
    })
  }
  else 
  {console.log('service item failed')}

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns serviceitems">

            <h1>Some services I offer</h1>

            
              {serviceitems}
            </div>

            
          </div>
    
   </section>
    );
  }
}

export default Services;