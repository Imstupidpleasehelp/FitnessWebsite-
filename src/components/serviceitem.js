import React from 'react';
import { withRouter } from 'react-router-dom';


const ServiceItem = ({ title, imageUrl, description, linkUrl }) => (
  <div className="servicesgrid container"> 
    <div className='serviceitem'> <a href={linkUrl}>
      <img src={imageUrl}></img>
      <h1 className='serviceitemtitle'>{title.toUpperCase()}</h1>
      <p className="serviceitemdesc">{description}</p>
      <button className="btn btn-info">Shop now</button></a>
    </div>
  </div>
);
    
export default withRouter(ServiceItem);
