import React, { Component } from 'react'
import Collapsible from 'react-collapsible';

 
class Blog extends Component {
    constructor() {
      super();
  
      this.state = {
        loading: true,
        blogitems: null 
      } 
    }



render() {
    if (this.props.propdata) {
      var blogitems = this.props.propdata.blog.blogitems.map(function(
        blogitems
      ) {
        return (
          <div key={blogitems.title} className="">
            
                <div className="blog-item">
                  <img src={blogitems.image} className="blog-image" alt={blogitems.title}></img> 
                  
                 
                  <Collapsible className="blog-item-tagline" trigger={blogitems.tagline}>
                  <p className="blog-item-fulltext">{blogitems.fulltext}</p>
                </Collapsible>
                </div>
          </div>
        );
      });
    } else return <h1>Loading...</h1>;
  
      return (
        <div className="blogtitle">
  <h1>My blog</h1>
           <div className="col-xl-12 bloggrid">
           

         <div className="row blogbox">
              
  
              
                {blogitems}
              </div>
  </div>
              
            </div>
      )
      }
    }
    
      


export default Blog