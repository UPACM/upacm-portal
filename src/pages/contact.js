import React from "react"

import ContactData from "../json/contact.json"

import Header from "../components/header.js"

import ContactOpening from "../components/contact/contact-opening.js"
import ContactSocial from "../components/contact/contact-social.js"
import ContactFooter from "../components/contact/contact-footer.js"
import ContactMap from "../components/contact/contact-map.js"
import ContactForm from "../components/contact/contact-form.js"

export default function Home() {
	return (
		<>
			<Header isIndex={false} active="Contact"/>
				<ContactOpening 
				alt={true}
					header={ContactData.opening.header} 
					headerInfo={ContactData.opening.headerInfo}/>
				<ContactOpening 
					header={ContactData.map.header} 
					headerInfo={ContactData.map.headerInfo}/>
				<ContactMap/>
				
				<ContactOpening 
				alt={true}
					header={ContactData.email.header} 
					headerInfo={ContactData.email.headerInfo} />
				<ContactForm />

				<ContactOpening 
					header={ContactData.social.header} 
					headerInfo={ContactData.social.headerInfo}>
				</ContactOpening>
				<ContactSocial />
				<ContactFooter />
		</>
	)
}
