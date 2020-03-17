import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Testimonial1 from './testimonial1'


const TestimonialScroller = () => (
<Carousel className="blogbox">
  <Carousel.Item>
     <Testimonial1 />
  </Carousel.Item>
  
</Carousel>
)
export default TestimonialScroller