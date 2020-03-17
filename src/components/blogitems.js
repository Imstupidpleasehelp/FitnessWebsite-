import React from 'react';
import { withRouter } from 'react-router-dom';

  const BlogItem = ({ title, imageUrl, description}) => (
    <div className="bloggrid container"> 
      <div className='blogitem'> 
        <img src={imageUrl}></img>
        <h1 className='blogitemtitle'>{title}</h1>
        <p className="blogitemdesc">{description}</p>
        <button className="btn btn-info">Read more</button>
      </div>
    </div>
  );

export default BlogItem;