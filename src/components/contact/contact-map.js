import React from "react"

import "./contact-map.scss"

/* Component for presenting a google map */
export default function ContactMap() {
  return (
    <div id="contact-map">
      <iframe
        id="map"
        title="map"
        src="https://maps.google.com/maps?q=Department%20of%20Computer%20Science,%20University%20of%20the%20Philippines%20-%20Diliman%201101%20Quezon%20City,%20Philippines&t=&z=13&ie=UTF8&iwloc=&output=embed"
      />
    </div>
  )
}
