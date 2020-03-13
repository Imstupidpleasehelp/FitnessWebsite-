import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Blogbox from '../subcomponents/blogboxes'
import Testimonial from '../subcomponents/testimonialbox'

const TestimonialScroller = () => (
<Carousel className="blogbox">
  <Carousel.Item>
     <Testimonial />
  </Carousel.Item>
  <Carousel.Item>
     <Testimonial />
  </Carousel.Item>
  <Carousel.Item>
     <Testimonial />
  </Carousel.Item>
  
</Carousel>
)
export default TestimonialScroller