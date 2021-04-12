import React from "react"

import AboutData from "../../data/about.json"

import "./core-values.scss"

export default function CoreValues() {
  return <div id="core-values">
    <h1 id="header">{AboutData.coreValues.header}</h1>
	<p id="header-info">{AboutData.coreValues.headerInfo}</p>
	<div id="values">
		{AboutData.coreValues.list.map(
			value => <p key={value} className="value">{value}</p> )}
	</div>
  </div>
}