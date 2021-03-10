import React from "react"

import ContactData from "../json/contact.json"

import Header from "../components/header.js"

import Opening from "../components/opening.js"
import ContactSocial from "../components/contact/contact-social.js"
import ContactFooter from "../components/contact/contact-footer.js"
import ContactMap from "../components/contact/contact-map.js"
import ContactForm from "../components/contact/contact-form.js"

export default function Home() {
	return (
		<>
			<Header isIndex={false} active="Contact"/>
				<Opening 
					header={ContactData.opening.header} 
					headerInfo={ContactData.opening.headerInfo}/>
				
				<Opening 
				style={{backgroundColor: "unset"}}
					header={ContactData.map.header} 
					headerInfo={ContactData.map.headerInfo}>
					<ContactMap/>
				</Opening>

				<Opening 
				alt={true}
					header={ContactData.email.header} 
					headerInfo={ContactData.email.headerInfo}>
					<ContactForm />
				</Opening>

				<Opening 
					style={{backgroundColor: "unset"}}
					header={ContactData.social.header} 
					headerInfo={ContactData.social.headerInfo}>
					<ContactSocial />
				</Opening>
	

				<ContactFooter />
		</>
	)
}
