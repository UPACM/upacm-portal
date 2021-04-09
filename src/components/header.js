import React, { useState, useEffect } from "react"
import Navlink from "../components/subcomponents/navlink.js"
import { Link } from "gatsby"

import siteLogo from "../assets/images/logo.png"
import hamburgerIcon from "../assets/images/hamburger-icon.png"

import "./header.scss"

const Header = ({ isIndex, active }) => {
  const [scrolled, setScrolled] = useState(false)
  const [navbarVisible, setNavbarVisible] = useState(false)

  useEffect(() => {
    const vh =
      Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      ) / 2
    const handleScroll = () => {
      const isScrolled = window.scrollY > vh
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }
    document.addEventListener("scroll", handleScroll)
  })

  return (
    <>
      <div
        className={
          scrolled || !isIndex
            ? " header incompressible scrolled"
            : " header incompressible"
        }
      >
        <div className="wrapper incompressible">
          <Link to="/" className="home-link">
            <img className=" logo" src={siteLogo} alt="logo" />
          </Link>

          <div
            className="navbar-button-container"
            onClick={function () {
              setNavbarVisible(!navbarVisible)
            }}
            aria-hidden="true"
          >
            <img
              className="navbar-button"
              src={hamburgerIcon}
              alt="hamburger"
            />
          </div>

          <div
            className={
              navbarVisible
                ? "nav-bar incompressible visible"
                : "nav-bar incompressible"
            }
            id={scrolled ? "scrolled" : "noscrolled"}
          >
            <Navlink to="/about/" name="About" active={active === "About"} />
            <Navlink
              to="/committees/"
              name="Committees"
              active={active === "Committees"}
            />
            <Navlink to="/sig/" name="SIG" active={active === "SIG"} />
            <Navlink to="/events/" name="Events" active={active === "Events"} />
            <Navlink
              to="/gallery/"
              name="Gallery"
              active={active === "Gallery"}
            />
            <Navlink
              to="/contact/"
              name="Contact"
              active={active === "Contact"}
            />
          </div>
        </div>
      </div>

      {!isIndex ? <div className=" header-spacer"></div> : <></>}
    </>
  )
}

export default Header
