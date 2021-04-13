import React from "react"

import AboutData from "../../data/about.json"

import "./core-values.scss"

function CoreVal({ valText }){
	return(
		<div className="value">
			<h1 className="bgLetter noselect">{valText[0]}</h1>
			<p className="val-text">{valText}</p>
		</div>
	);
}

export default function CoreValues() {
  return(
	<div id="core-values">
		<div class="coreval-intro">
			<h1 id="header">{AboutData.coreValues.header}</h1>
			<p id="header-info">{AboutData.coreValues.headerInfo}</p>
		</div>
		<div id="values">
			{AboutData.coreValues.list.map(
				value => <CoreVal valText={value} /> )}
		</div>
	</div>
  )
}