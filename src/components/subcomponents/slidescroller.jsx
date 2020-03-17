import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Blog from '../blog'

const Sidescroller = () => (
<Carousel className="blogpreview">
  <Carousel.Item>
     <Blog />
  </Carousel.Item>
  <Carousel.Item>
     <Blog />
  </Carousel.Item>
  <Carousel.Item>
     <Blog />
  </Carousel.Item>
  
  
</Carousel>
)
export default Sidescroller

