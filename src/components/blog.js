import React from 'react'

 
class Blog extends React.Component {
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
            
                <div className="">
                  <img src={blogitems.image} alt={blogitems.title}></img> 
                  <h5>{blogitems.tagline}</h5>
                  <p>{blogitems.fulltext}</p>
                </div>
          </div>
        );
      });
    } else return <h1>Loading...</h1>;
  
      return (
        <div className="blogtitle">
  <h1>My blog</h1>
           <div className="col-xl-8 bloggrid">
           

         <div className="row blogbox">
              
  
              
                {blogitems}
              </div>
  </div>
              
            </div>
      )
      }
    }
    
      


export default Blog