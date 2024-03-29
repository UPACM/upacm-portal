import React from "react"

import "./contact-footer.scss"

/* Component for displaying custom contact footer */
export default function ContactFooter() {
  return (
    <div id="footer-bottom">
      <div className="wrapper">
        <span>
          © {new Date().getFullYear()} Association for Computing Machinery -
          University of the Philippines Diliman Student Chapter, Inc.
        </span>
      </div>
    </div>
  )
}
