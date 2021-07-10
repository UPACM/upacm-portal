# `EventsCard({ event })`
The `EventsCard` displays the representative image of a respective major or latest event, along with its title, subtitle, and description.

- **Source:** src\components\committees\subcomponents\events-featured-card.js

---

## Dependencies
`React` from "react"

### Library
 - `Fade` from "react-reveal/Fade"
	 - Applies reveal animartions to its children on render, with given settings.  

### Local
 - `./events-featured-card.scss`
     - Allows custom styling for the presentation of the respective featured event.

---

## Properties

### `event` `Object`

#### Keys 
 - `header`: `(String)`
     - holds the full name of the respective event, presented as a title. Can be empty or removed.
 - `subheader`: `(String)`
     - holds the secondary title or brief information of the respective event, displayed below the header. It's often the year of the event. Can be empty or removed.
 - `imageSource`: `(String)`
     - holds the relative directory of the respective event's representative image. Can be empty or removed (although, the layout wouldn't be okay since this is the acting background as well).
 - `info` `(String)`
     - holds extra information about the respective event such as motivation, process, or functions. Can be empty but shouldn't be removed.

#### Example
```JSON
{
	"header": "Featured event Name",
	"subheader": "Subtitle (Often the year of the event)",
	"imageSource": "/events-images/event_event-name-year.webp",
	"info": "Description fo the event"
}
```

---

## Composition

### Fade from Bottom On Render 
Wrapper that applies a fade in from bottom animation that lasts for 750 milliseconds, 150 milliseconds after render, on the children.

```javascript
<Fade ssrFadeout bottom duration={750} delay={150}>
	...
```

### Top Level Wrapper
Allows for top level or general selection for custom styling in css.

```javascript
    ...
	<div className="events-featured-card" id={event.header}>
		...
```

### Event Image
Gives an insight to the event. It's often the main pub material or a snapchat of the event (from the documentation). The title and subtitle should be displayed in front of this (making this act like a background).

```javascript
		...
		<img src={event.imageSource} alt={event.header} />
		...
```

### Text Content
The `#info` wrapper div holds the component implementations of the header, subheader, and info/description. Responsibility for the layout is now on the scss file.

```javascript
		...
		<div id="info">
			<h5 id="header">{event.header}</h5>
			<h6 id="subheader">
            	<i>{event.subheader}</i>
			<p id="description">{event.info}</p>
		</div>
	...
```		

---

## Styling

- **Source:** src\components\committees\subcomponents\events-featured-card.scss

Allows for browser safe scaling (targets every scaling trigger available in css).
```css
	@import "../../../styles/animation.scss";	
```

### Top Level Wrapper
Sets up the layout of the entire component. Is larger than the normal unfeatured event but follows the same principles.

`.events-card`
```css
...
.events-card {
	z-index: 2;

    /* Sizing */
	width: fit-content;
    min-height: 600px;
	height: 40vw;
	max-height: calc(1920px * .4);
	
	/* Spacing */
	margin: 5% 2%;
	overflow: hidden;

    /* Background Setup - For better readability*/
	background-blend-mode: multiply;
	background-color: rgba(0, 0, 0, 0.5);
	@include transition-all(0.3s);


	/* Alignment */
	text-align: left;
	align-content: flex-end;
	justify-content: flex-end;
	position: relative;	

	/* Themeing */
	color: white;

	...
```

### Featured Event Image Settings
Sets up the event image as the full background of the component

`.events-card` `img` 
```css
...
	img{
		/* Follow container size but keep aspect ratio */
		object-fit: scale-down;
		width: 100%;
		height: 100%;

		/* Dark overlay for better readability on text */
		background-color: rgba(0, 0, 0, 1);
		mix-blend-mode: multiply;

		@include transition-all(0.3s);

		margin: auto;
	}
...
```

### Featured Event Text Information Settings
Applies the layout and default properties of the text content of the event. This component is absolute to display on top of the event img. A maximimum width is also set for layout safety. The specific selectors for the `#header`, `#subheader`, and `#description` are just design and layout choices.

`.events-card` `#info`
```css
...
	#info{
		padding: 7%;

		display: block;

		position: absolute;
		bottom: 5%;

		max-width: 800px;

		$info-transition: 0.7s;
		@include transition-all($info-transition);

		#header {
			color: white;
			font-weight: bolder;
			font-size: calc(1em + 0.4vw);
		}

		#subheader {
			display: inline-block;
			font-size: calc(1em + 0.2vw);
			font-weight: bold;

			width: fit-content;
			margin-top: 10px;
		}

		#description {
			font-size: calc(0.9em + 0.2vw);

			// Spacing from local header
			margin-top: 20px;
		}
	}	
...
```

### Hover Effects
Hover effects darken the overlay of the img for better readability. This is why the styling has a lot of transition property setting. The img is also scaled up to indicate a hover has indeed occured.

```css
	.events-featured-card:hover {
		background-size: 107%;
		background-color: rgba(0, 0, 0, 0.80);

		img {
			@include transform-safe(scale(1.05));
		}

}
```

---

## Notes

This component code is very similar to the unfeatured version: `EventCard`. The only difference is the inclusion of the description property and the reveal wrapper. Hopefully the similarity can be resolved to merge the components into one and lessen the complexity of the code base.