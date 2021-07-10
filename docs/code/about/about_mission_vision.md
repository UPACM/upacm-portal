# `MissionVision`
The About page provides an overview of UP ACM as a formal student organization that's driven by its Mission, Vision, and Core Values. It also goes through the history of the event

**Source:** src\components\about\mission-vision.js

---

## Dependencies
`React` from "react"

### Local
- `AboutData` from "../../data/about.json"
    - Holds all the textual data needed by the mission & vision section of the *About Us* page (actually holds all the data of the *About Us* page). This includes the `mission` and `vision` keys which hold the organization's mission and vision statement.
- `./mission-visions.scss`
	- Allows custom styling and layout to the components.

---

## Composition

### Width Limiting Wrapper
This wrapper forces the entire component to only have width's \[300, 1920\] px.

```javascript
<div className="wrapper incompressible" id="mission-vision-section">
	...
```

A redundant wrapper. Will hopefully be removed in the future.

```javascript
	...
	<div className="wrapper incompressible">
		...
```

### Mission Subsection
Displays a header text, statement, and the representative image for the organization's mission. Loads the mission statement from the `AboutData.vision` property.

```javascript
		...
		<div className="mission-vision-part" id="mission">
        	<div className="text">
            	<h1>Mission</h1>
            	<p>{AboutData.mission}</p>
          	</div>
          	<img
            	className="showcase-image"
            	src="/about-images/about_mission.webp"
            	alt="mission" />
        </div>
		...
```

### Vision Subsection
Displays a header text, statement, and the representative image for the organization's vision. Loads the vision statement from the `AboutData.vision` property.

```javascript
		...
		<div className="mission-vision-part" id="vision">
          	<div className="text">
            	<h1>Vision</h1>
            	<p>{AboutData.vision}</p>
          	</div>
          	<img
            	className="showcase-image"
            	src="/about-images/about_vision.webp"
            	alt="vision" />
        </div>
		...
```

---

## Styling

**Source:** src\components\about\mission-vision.js

Loads the default styling and layout for common components.
```css
@import "../../styles/global.scss";
...
```

## Top Level Wrapper
Sets the size, background color, and spacing of the section. `overflow` is set to hidden for layout sensitive design choices in the later components (just a precaution). 

`div#mission-vision-section`
```css
...
div#mission-vision-section {
	max-height: 1280px;
	padding: 8% 0;
	background: white;
	overflow: hidden;
	max-width: 100%;

	...	
```

## Common Settings for Mission and Vision
Sets an explicit flex row layout for components in a subsection and defines the spacing and height's (which also define the width implicitly) of the inner components of a subsection. The showcase image takes up half the page, is stuck in a direction (in default settings) and uses cover to ensure there's no background color.


`div#mission-vision-section` `div.mission-vision-part`

```css
	...
	div.mission-vision-part {
		display: flex;
		flex-direction: row;
		height: 400px;
		padding: 50px 0;

		div.text {
			width: 44%;
			padding: 3%;
		}
		img.showcase-image {
			width: 50%;
			object-fit: cover;
		}
	}
	...
```

## Mission Subsection Settings
Sets the border radii of the image on the left since the right side sticks to the page. Also sets the color of the header.

`div#mission-vision-section` `div.mission-vision-part#mission`
```css
	...
	div.mission-vision-part#mission {
		color: black;

		h1 {
			color: var(--acm-green);
			padding-bottom: 4%;
		}
		img.showcase-image {
			border-bottom-left-radius: 100px;
			border-top-left-radius: 100px;
		}
	}
	...
```

## Vision Subsection Settings
Flex direction is reversed so that the vision's showcase image is on the left. Sets the border radii of the image on the right since the left side sticks to the page. Also sets the color of the header.

`div#mission-vision-section` `div.mission-vision-part#vision`
```css
	...
	div.mission-vision-part#vision {
		flex-direction: row-reverse;
		color: black;

		h1 {
			color: var(--acm-purple);
			padding-bottom: 4%;
			margin-top: -15%;
		}
		div.text {
			text-align: right;
		}
		img.showcase-image {
			border-bottom-right-radius: 100px;
			border-top-right-radius: 100px;
		}
	}
}
...
```

## Small Screen Adjustment
In smaller screens the layout of the mission & vision section of the *About Us* page changes greatly. The showcase image now becomes the background for each subsection (with a dark overlay for readability) and the text by its side (originally) is now in its front. A lot of layout settings (flex, justification, dimensions, padding) are changed to make the layout feasible. 

```css
@media (max-width: 768px) {
	/* */
	div#mission-vision-section {
		padding: 0;

		div.mission-vision-part {
			flex-direction: column-reverse;
			height: auto;
			padding: 0;

			/* Make the text relative. The negative scaling is to offset the
			text towards the position of the showcase image. */
			div.text {
				display: flex;
				flex-direction: column;
				justify-content: center;
				height: 50vh;
				width: 90%;
				padding: 0 5%;
				position: relative;
				top: -50vh;
				margin-bottom: -50vh;
				color: white;
				font-size: 0.8em;
			}
			/* Take the full width since it's now the background of the section.*/
			img.showcase-image {
				width: 100%;
				height: 50vh;
			}
		}

		/* Remove the circular border and add a dark overlay for better text readability. */

		div.mission-vision-part#mission {
			div.text {
				background: linear-gradient(270deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.25) 100%);
			}
			img.showcase-image {
				border-radius: 0 0 0 0;
				box-shadow: 0 0 0 black;
			}
		}

		div.mission-vision-part#vision {
			flex-direction: column-reverse;

			img.showcase-image {
				border-radius: 0 0 0 0;
				box-shadow: 0 0 0 black;
			}
			div.text {
				background: linear-gradient(90deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.25) 100%);
			}
		}
	}
}

```

---

## Notes
The adjustment to small screen becomes greatly unstable as the screen size increases or the text lengthens. If the mission and vision statement of the organization does change, this component may have to be tested further on Safari and smaller screens. There may be a better ways (ie. make the showcase images the actual background per section) to adjust for smaller screens.