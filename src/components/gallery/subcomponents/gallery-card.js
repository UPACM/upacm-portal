import React, {useEffect} from "react"
import "./gallery-card.scss"

// On scroll animations
import AOS from "aos";
import "aos/dist/aos.css";

/* Subcomponent for rendering a special interest group */
export default function GalleryCard({image}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });

	return <div class = "gallery-card" 
        data-aos="fade-up"
        data-aos-delay="70"
        data-aos-duration="550">
			<img src={image.source} />
			<p class="caption">{image.caption}</p>
    </div>
}