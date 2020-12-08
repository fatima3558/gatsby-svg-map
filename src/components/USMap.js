import React, { useState, useEffect } from "react"
import { SVGMap } from "react-svg-map"
import USStatesTerritories from "../images/svg/index.js"

const mouseOver = (event) => {
  const current = event.target
  if(current.id !== "frames") {
    current.setAttribute('style', 'fill:grey;stroke:black')
  }
}

const mouseOut = (event, activeRegion, setActiveRegion, tooltipStyle, setTooltipStyle) => {
  const current = event.target
  current.setAttribute('style', '')
  const newActiveRegion = event.target.getAttribute('name')
  const newTooltipStyle = {display: 'none'}
  setActiveRegion(newActiveRegion)
  setTooltipStyle(newTooltipStyle)
}

const mouseMove = (event, activeRegion, setActiveRegion, tooltipStyle, setTooltipStyle) => {
  const newActiveRegion = event.target.getAttribute('name')
  const newTooltipStyle = {
    display: 'block',
    position: 'fixed',
    top: event.clientY + 10,
    left: event.clientX + 10,
    backgroundColor: 'white',
    border: '1px solid red',
    color: 'black',
    minHeight: '40px',
    minWidth: '100px',
    textAlign: 'center'
  };
  setActiveRegion(newActiveRegion)
  setTooltipStyle(newTooltipStyle)
}

const getClass = (location, index) => {
  if (location.id === "frames") {
    return `svg-map__location`
  } else {
    let color
    if (location.name.includes("North")) {
      color = "lavender"
    } else if (location.name.includes("South") || location.name.includes("West")) {
      color = "green"
    }
    return `svg-map__location state ${color}`
  }
}

const USMap = () => {
  const [activeRegion, setActiveRegion] = useState(null)
  const [tooltipStyle, setTooltipStyle] = useState({display: 'none'})
  const [data, setData] = useState({USStatesTerritories})
  const [mapType, setMapType] = useState("normal")

  return (
    <div>
      <div style={tooltipStyle}>
        <span>{activeRegion}</span>
      </div>
      <select onChange={(e) => {
        if (mapType === "normal") {
          setMapType("choropleth")
        } else {
          setMapType("normal")
        }
      }}>
        <option value="normal" default>Normal</option>
        <option value="choropleth">Choropleth</option>
      </select>
      <div className="svg-div">
        { mapType === "choropleth" ? 
        <SVGMap
          map={USStatesTerritories}
          locationClassName={getClass}
          onLocationMouseOver={(e) => mouseOver(e)}
          onLocationMouseOut={(e) => mouseOut(e, activeRegion, setActiveRegion, tooltipStyle, setTooltipStyle)}
          onLocationMouseMove={(e) => mouseMove(e, activeRegion, setActiveRegion, tooltipStyle, setTooltipStyle)}
        /> : 
        <SVGMap
          map={USStatesTerritories}
          onLocationMouseOver={(e) => mouseOver(e)}
          onLocationMouseOut={(e) => mouseOut(e, activeRegion, setActiveRegion, tooltipStyle, setTooltipStyle)}
          onLocationMouseMove={(e) => mouseMove(e, activeRegion, setActiveRegion, tooltipStyle, setTooltipStyle)}
        />
        }
      </div>
    </div>
  )
}

export default USMap