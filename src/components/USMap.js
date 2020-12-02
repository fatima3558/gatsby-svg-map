import React from "react"
import { SVGMap } from "react-svg-map"
import SouthKorea from "@svg-maps/south-korea"

const newMap = () => {
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!")
  console.log(SouthKorea)
  const regions = {
    ...SouthKorea,
    locations: SouthKorea.locations.map((location, index) => {
      console.log(location.id)
      return location
    })
  }
  return regions
}

const mouseOver = (event) => {
  console.log(event.target.getAttribute('name'))
}

function componentDidMount() {
  for(let i = 0; i < SouthKorea.locations; i++) {
    const currentLocation = SouthKorea.locations[i]
    if(i % 5 === 0) {
      console.log("violet")
    } else if(i % 4 === 0) {
      console.log("blue")
    } else if(i % 3 === 0) {
      console.log("green")
    } else if(i % 2 === 0) {
      console.log("yellow")
    } else {
      console.log("red")
    }
  }
}

const USMap = () => {
  return <SVGMap map={newMap()} onLocationClick={mouseOver}/>
}

export default USMap
