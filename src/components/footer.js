import React from "react"
import { Link } from "gatsby"
import SocialWidget from "../components/subcomponents/social-widget.js"

import "../styles/var.scss"
import "../styles/global.scss"
import "./footer.css"

export default function Footer() {
  return (
    <div id="footer">
      <div id="footer-top">
        <div class="wrapper">
          <div class="footer-section">
            <h1>UP ACM</h1>
            <div class="footer-section-links portal-links">
              <div class="link-col">
                <span>
                  <Link to="/about/">About</Link>
                </span>
                <span>
                  <Link to="/events/">Events</Link>
                </span>
                <span>
                  <Link to="/committees/">Committees</Link>
                </span>
              </div>
              <div class="link-col">
                <span>
                  <Link to="/partners/">Partners</Link>
                </span>
                <span>
                  <Link to="/privacy-policy/">Privacy Policy</Link>
                </span>
              </div>
            </div>
          </div>

          <div class="footer-section">
            <h1>Contact Us</h1>
            <div class="footer-section-links contacts">
              <span>
                <a href="mailto:contactus@upacm.net" id="email">
                  contactus@upacm.net
                </a>
              </span>
              <span>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=14.70521%2C121.06235&fbclid=IwAR19Fe1Rg_c-Znfm6NwYfa9Lc6eSMy6aoT4F8RJ11bdGwW3BhSGCG0owFUE"
                  id="email"
                >
                  Department of Computer Science, University of the Philippines
                  Diliman, Quezon City, Philippines
                </a>
              </span>
              <div class="clear"></div>
            </div>
          </div>

          <div class="footer-section">
            <h1>Connect with us!</h1>
            <div class="footer-section-links socials">
              <SocialWidget
                elementClass="footer-social-widget"
                social="twitter"
                href="https://twitter.com/upacm"
              />
              <SocialWidget
                elementClass="footer-social-widget"
                social="facebook"
                href="https://facebook.com/upacm"
              />
              <SocialWidget
                elementClass="footer-social-widget"
                social="linkedin"
                href="https://www.linkedin.com/company/upacm/"
              />
              <SocialWidget
                elementClass="footer-social-widget"
                social="youtube"
                href="https://www.youtube.com/user/upacmYT"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="footer-bottom">
        <div class="wrapper">
          <span>
            © {new Date().getFullYear()} Association for Computing Machinery -
            University of the Philippines Diliman Student Chapter, Inc.
          </span>
        </div>
      </div>
    </div>
  )
}
