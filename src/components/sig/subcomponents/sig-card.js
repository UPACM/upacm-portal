import React, {useEffect} from "react"
import "./sig-card.scss"

// On scroll animations
import AOS from "aos";
import "aos/dist/aos.css";

/* Subcomponent for rendering a special interest group */
export default function SigCard({group}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });

	return <div class = "sig-card" 
        style={{backgroundImage: "url("+group.portraitSrc+")"}}        
        data-aos="fade-up"
        data-aos-delay="80"
        data-aos-duration="650">
        <div class="info">
            <h2 class = "name">{group.name}</h2>
            <h3 class = "head">{group.head}</h3>
            <p class = "description">{group.description}</p>
        </div>  
    </div>
}