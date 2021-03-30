import React from "react"
import "./partner-cards.scss"

import PartnerCard from "./subcomponents/partner-card"

/* Component for loading all partner cards */
export default function PartnerCards({ partners }) {
  return (
    <div id="partner-cards">
      {partners.map(partner => (
        <PartnerCard partner={partner} />
      ))}
    </div>
  )
}
