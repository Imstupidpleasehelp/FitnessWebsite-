import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Blogbox from '../subcomponents/blogboxes'


const Sidescroller = () => (
<Carousel className="blogbox">
  <Carousel.Item>
     <Blogbox />
  </Carousel.Item>
  <Carousel.Item>
    <Blogbox /> 
  </Carousel.Item>
  <Carousel.Item>
    <Blogbox /> 
  </Carousel.Item>
  
</Carousel>
)
export default Sidescroller