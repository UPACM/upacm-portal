import React from "react"
import { withPrefix } from "gatsby"
import "./partner-card.scss"

/* Subcomponent for rendering a partner */
export default function PartnerCard({ partner }) {
  return (
    <a
      href={partner.website}
      className="partner-card"
    >
      <img src={withPrefix(partner.imageSource)} alt={partner.header} />
      <h6 className="header">{partner.header}</h6>
      <p className="subheader">{partner.subheader}</p>
    </a>
  )
}
