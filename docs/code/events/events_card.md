# `EventsCard({ event })`
The `EventsCard` displays the representative image of a respective event, along with its title and subtitle.

- **Source:** src\components\committees\subcomponents\events-card.js

---

## Dependencies
`React` from "react"

## Local
- `./events-card.scss`
    - Allows custom styling for the presentation of the respective (unfeatured) event.

---

## Properties

### `event` `Object`

#### Keys 
- `header`: `(String)`
    - holds the full name of the respective event, presented as a title. Can be empty or removed.
- `subheader`: `(String)`
    - holds the secondary title or brief information of the respective event, displayed below the header. It's often the year of the event. Can be empty or removed.
- `imageSource`: `(String)`
    - holds the relative directory of the respective event's representative image. Can be empty or removed (although, the layout wouldn't be nice sincer this is the acting background as well).

#### Example
```JSON
{
	"header": "Event Name",
	"subheader": "Subtitle (Often the year of the event)",
	"imageSource": "/events-images/event_event-name-year.webp",
}
```

---

## Composition

### Top Level Wrapper
Allows for top level or general selection for custom styling in css.

```javascript
<div className="events-card" id={event.header}>
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
The `#info` wrapper div holds the component implementations of the header and subheader. Responsibility for the layout is now on the scss file.

```javascript
	...
	<div id="info">
		<h5 id="header">{event.header}</h5>
		<h6 id="subheader">
            <i>{event.subheader}</i>
		</h6>
	</div>
	...
```

---

## Styling

- **Source:** src\components\committees\subcomponents\events-card.scss

Allows for broswer safe scaling (targets every scaling trigger available in css).
```css
	@import "../../../styles/animation.scss";	
```

### Top Level Wrapper
Sets up the layout of the entire component.

`.events-card`
```css
.events-card {
	z-index: 2;

	color: white;

    /* Sizing */
	flex: 1 1 calc(88% / 3);
	min-height: 320px;
	height: 20vw;
	max-height: calc(1920 * .2);
	
	/* Spacing */
	overflow: hidden;
	margin: 3% 2%;
	position: relative;

    /* Background Setup */
	background-color: rgba(0, 0, 0, 0.4);
    background-blend-mode: multiply;

	/* Transition setting for hover */
	@include transition-all(0.3s);

	/* Alignment */
	text-align: left;
	align-content: flex-end;
	justify-content: flex-end;	
...
```

### Event Image Settings
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

### Event Title and Description
Applies the layout and default properties of the text content of the event. This component is absolute to display on top of the event img. The specific selectors for the `#header` and `#subheader` are just design and layout choices. Note that `#description` is unused here.

`.events-card` `#info`
```css
...
	#info {
	padding: 5%;

	display: block;

	position: absolute;
	bottom: 5%;

	$info-transition: 0.7s;
	@include transition-all($info-transition);

		#header {
			color: white;
            font-weight: bolder;
            font-size: calc(1em + 0.4vw);
        }

        #subheader {
			display: inline-block;
            font-size: 1em;
            font-weight: bold;

            width: fit-content;
            margin-top: 10px;
        }

        #description {
            // Spacing from local header
            margin-top: 20px;
        }
	}
...
```

### Unused Layout Option
This doesn't apply anymore since the component is being used inside a slideshow library `react-slick`.

```css
/*
	//every 4th couple of cards will take up half the container each;
	//the rest take up a third each
	/*
	[][][]
	[ ][ ]
	[][][]
	[ ][ ]

	^ should give this look
*/
.events-card:nth-child(4n+0), .events-card:nth-child(4n+5){
	flex-basis: 46%;
}
```

### Hover Effect
When an event card is hovered, the image scales up (hence the transition setups and `overflow: hidden` earlier). The overlay on the image is also darker to better read the header and subheader.

```css
.events-card:hover {
	background-size: 107%; // Arbitrary scale
	background-color: rgba(0, 0, 0, 0.6);

	img {
		@include transform-safe(scale(1.1));
	}
}
```

---

## Notes

There are some unused components here that were made obselete from using a react library. This can be removed or possibly kept for reference.