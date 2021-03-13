import React, {useEffect} from "react"
import "./contact-social.scss"
import SocialWidget from "../../components/subcomponents/social-widget.js"

// On scroll animations
import AOS from "aos";
import "aos/dist/aos.css";

/* Component for displaying all available social links */
export default function ContactSocial() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return <div id="contact-social"
			data-aos="fade-up"
			data-aos-delay="40"
			data-aos-duration="500">	
        <SocialWidget social="twitter" href="https://twitter.com/upacm" />
		<SocialWidget social="facebook" href="https://twitter.com/upacm" />
		<SocialWidget social="linkedin" href="https://www.linkedin.com/company/upacm/" />
		<SocialWidget social="youtube" href="https://www.youtube.com/user/upacmYT" />
	</div>
}