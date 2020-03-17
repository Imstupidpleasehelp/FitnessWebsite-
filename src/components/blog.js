import React from 'react'
import BlogItem from './blogitems';

 
class Blog extends React.Component {
    constructor() {
      super();
  
      this.state = {
        items: [
          {
            title: 'Blog Item 1',
            imageUrl: './serviceImages/cat.jpg',
            description: 'blah blah',

            key: 1,
          },
          {
            title: 'Blog Item 2',
            imageUrl: './serviceImages/cat.jpg',
            description: 'blah blah',
        
            key: 2,
          },
          /* copy from here */ 
          {
            title: 'Blog Item 3',
            imageUrl: './serviceImages/cat.jpg',
            description: 'blah blah',
        
            key: 3,
          },
          /* copy to here */
          /* copy from here */ 
          {
            title: 'Blog Item 4',
            imageUrl: './serviceImages/cat.jpg',
            description: 'blah blah',
            linkUrl: 'www.google.com',
            key: 4,
          } 
          /* copy to here */
        ]
      };
    }
    render() {
        return (
          <div>
            {this.state.items.map(({ id, ...otherSectionProps }) => (
              <BlogItem key={id} {...otherSectionProps} />
            ))}
          </div>
        );
      }
    }

export default Blog