import React from 'react';

import ServiceItem from './serviceitem';

class Services extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Test item 1',
          imageUrl: './serviceImages/cat.jpg',
          description: 'blah blah',
          linkUrl: 'www.google.com'
        },
        {
          title: 'Test item 2',
          imageUrl: './serviceImages/cat.jpg',
          description: 'blah blah',
          linkUrl: 'www.google.com'
        },
        /* copy from here */ 
        {
          title: 'Test item 3',
          imageUrl: './serviceImages/cat.jpg',
          description: 'blah blah',
          linkUrl: 'www.google.com'
        } 
        /* copy to here */
      ]
    };
  }

  render() {
    return (
      <div className='row'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <ServiceItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Services;