import React, { Component } from 'react';



class Services extends Component {
  state = { Services: []
  }
  render() { 
     if(this.props.data){
         var Services = this.props.data.Services.map(function(Services){
           var projectImage = 'public/serviceImages'+Services.projectImage;
           return <div key={Services.name} className="columns service-item">
              <div className="item-wrap">
               <a href={Services.url} title={Services.name}>
                  <img  className="projectImage" alt={Services.title} src={projectImage} />
                  <div className="overlay">
                     <div className="service-item-meta">
                    <h5>{Services.name}</h5>
                        <p>{Services.description}</p>
                     </div>
                   </div>
                 
               </a>
             </div>
           </div>
         })
       }
      return ( <div>{Services}</div> );
  }
}
export default Services 