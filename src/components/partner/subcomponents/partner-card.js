import React, {useEffect} from "react"
import "./partner-card.scss"

// On scroll animations
import AOS from "aos";
import "aos/dist/aos.css";

/* Subcomponent for rendering a partner */
export default function PartnerCard({partner}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });

	return <div class = "partner-card" 
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="550">
			<img src={partner.imageSource} alt={partner.header} />
			<h6 class="header">{partner.header}</h6>
			<p class="subheader">{partner.subheader}</p>
    </div>
}