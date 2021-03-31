import React from "react"

import Header from "../components/header.js"
import Opening from "../components/opening.js"
import Footer from "../components/footer.js"

import EventData from "../json/events.json"
import EventsShowcase from "../components/events/events-showcase.js"
export default function Home() {
	return (
		<>
			<Header isIndex={false} active="Events" />
				<Opening 
					header="Events"
					headerInfo="Nisi pariatur ut commodo minim minim labore laboris anim veniam veniam commodo qui irure. Sit sint culpa veniam excepteur duis est excepteur eu ex in nostrud sit. Voluptate duis Lorem sunt eu. Excepteur sunt quis proident nisi." />
				{Object.keys(EventData).map(type =>
					<Opening 
						header={EventData[type].header}
						headerInfo={EventData[type].headerInfo}>
						<EventsShowcase events={EventData[type]}/>		
					</Opening> )}	

      <Footer />
    </>
  )
}
