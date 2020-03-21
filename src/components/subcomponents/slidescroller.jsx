import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Blog from '../blog'

const Sidescroller = () => (
<Carousel activeIndex={0}className="blogpreview">
  <Carousel.Item>
     <Blog />
  </Carousel.Item>
  
  
  
</Carousel>
)
export default Sidescroller

