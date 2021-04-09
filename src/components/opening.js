import React from "react"
import "./opening.scss"

/* General component for opening a page section */
export default function Opening({
  name,
  header,
  headerInfo,
  children,
  style,
  headerStyle,
  headerInfoStyle,
}) {
  return (
    <div style={style} className="opening" id={name}>
      <div className="wrapper incompressible">
        <h2 style={headerStyle} id="header">
          {header}
        </h2>
        <p style={headerInfoStyle} id="header-info">
          {headerInfo}
        </p>
        {children}
      </div>
    </div>
  )
}
