import React from "react"

import AchievementItem from "./subcomponents/achievement-item.js"
import AboutData from "../../json/about.json"

import "../../styles/var.css"
import "../../styles/global.css"
import "./achievements.css"

export default function Achievements(){
	return (
		<div class="wrapper" id="achievements-section">
			<div class="wrapper">
				<h1>Achievements</h1>
				<div id="achievements-list">
					{AboutData.achievements.map((data) => {
						var d = new Date(data.date);
						return <AchievementItem date={d.getFullYear()} name={data.name} event={data.event} />
					})}
				</div>
			</div>
		</div>
	)
}
