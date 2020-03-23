import React from 'react';

  const BlogItem = ({ title, imageUrl, description}) => (
    <div className="bloggrid container"> 
      <div className='blogitem'> 
        <img className="blogimage" src={imageUrl} alt={title}></img>
        <h1 className='blogitemtitle'>{title}</h1>
        <p className="blogitemdesc">{description}</p>
        <button className="btn btn-info">Read more</button>
      </div>
    </div>
  );

export default BlogItem;