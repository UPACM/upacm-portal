import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import "../styles/var.css"
import "../styles/global.css"

export default function Home() {
	return (
		<>
			<Header gap={true}/>
			<Footer />
		</>
	)
}
