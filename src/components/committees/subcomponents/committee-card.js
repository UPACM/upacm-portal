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
        <div class="committee-card">
            <div class="portrait-wrapper">
                <img class = "portrait" src={member.portraitSrc}/>
            </div>
            <p class = "name"><b>{member.name}</b></p>
            <p class = "position"><b><i>{member.position}</i></b></p>
        </div>
    </div>
}