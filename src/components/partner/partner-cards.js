import React from "react"
import PartnerCard from "./subcomponents/partner-card"

import "./partner-cards.scss"

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
