import React from "react"
import Hero from './Hero'
import Home from './Home'
import Refund from './Refund'
import BBB from './BBB'

const ImageComponent = ({ name }) => {
  switch (name.toLowerCase()) {
    case "hero":
      return <Hero />
    case "home":
      return <Home />
    case "refund":
      return <Refund />
    case "bbb":
      return <BBB />
    default:
      return null
  }
}

export default ImageComponent;
