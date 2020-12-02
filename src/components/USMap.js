import React, { useState } from "react"
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

const mouseOver = (event, initialState, setState) => {
  const current = event.target
  current.setAttribute('style', 'fill:red')
}

const mouseOut = (event, initialState, setState) => {
  const current = event.target
  current.setAttribute('style', '')

  const activeRegion = event.target.getAttribute('name')
  const tooltipStyle = {display: 'none'}

  setState({ activeRegion, tooltipStyle})
}

const mouseMove = (event, initialState, setState) => {
  const activeRegion = event.target.getAttribute('name')
  const tooltipStyle = {
    display: 'block',
    top: event.clientY + 10,
    left: event.clientX - 100
  };

  setState({ activeRegion });

}

const USMap = () => {
  const [state, setState] = useState({
    activeRegion: null,
    tooltipStyle: {
      display: 'none'
    }})
  return (
    <div>
      <div style={state.tooltipStyle}>
        {state.activeRegion}
      </div>
      <SVGMap 
        map={newMap()}
        onLocationMouseOver={(e) => mouseOver(e, state, setState)}
        onLocationMouseOut={(e) => mouseOut(e, state, setState)}
        onLocationMouseMove={(e) => mouseMove(e, state, setState)}
      />
    </div>
    )
}

export default USMap
