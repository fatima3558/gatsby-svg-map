import React from "react"
import { SVGMap } from "react-svg-map"
import SouthKorea from "@svg-maps/south-korea"

const newMap = () => {
  const regions = {
    ...SouthKorea,
    locations: SouthKorea.locations.map((location, index) => {
      return location
    })
  }
  return regions
}

const mouseOver = (event) => {
  const current = event.target
  current.setAttribute('style', 'fill:red')
}

const mouseOut = (event) => {
  const current = event.target
  current.setAttribute('style', '')
}

const USMap = () => {
  return <SVGMap map={newMap()} onLocationMouseOver={mouseOver} onLocationMouseOut={mouseOut}/>
}

export default USMap
