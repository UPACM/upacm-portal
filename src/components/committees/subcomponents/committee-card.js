import React, {useEffect} from "react"
import "./committee-card.scss"

// On scroll animations
import AOS from "aos";
import "aos/dist/aos.css";

/* Subcomponent for rendering one member of a committee type*/
export default function CommitteeCard({name, member}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });

	return <div class = {name} 
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="650">
        <div class="portrait-wrapper">
              <img class = "portrait" src={member.portraitSrc}/>
        </div>
        <h1 class = "name">{member.name}</h1>
        <div class = "position">{member.position}</div>
        <p class = "description">{member.description}</p>
    </div>
}