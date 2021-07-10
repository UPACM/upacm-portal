# `EventsShowcase({ events })`
The `EventsShowcase` is the component for generating the events of a given category. It displays the featured event first in its own row and then uses a library component for making a slideshow with the unfeatured events (assumed to be more than two).

- **Source:** src\components\events\event-showcase.js

---

## Dependencies
 - `React, { useState }` from "react"
     - Allows the functional component to retain variables when rerendering

## Library
 - `Slider` from "react-slick";
	- Lightweight react library component for displaying its children components as elements in a slideshow (mobile safe).
 - `Fade` from "react-reveal/Fade"
	- Library component that allows a fade-in effect to its children upon render.

### Local
- `EventsCard` from "./subcomponents/events-card.js"
    - Displays a category by making a card with the event's image, title, and subtitle.
- `EventsFeaturedCard` from "./subcomponents/events-featured-card.js"
    - Displays the forefront event of a category. Like the `EventsCard`, includes the image, title, and subtitle of the event but it also has a description.
- `"/events-showcase.scss`
    - Allows for custom styling. Used to setup the layout of the events.

---

## Properties

### `events` `(Object)`
This holds all the needed information or context on a event category.

#### Category Context
- `header` `(String)`
    - Holds the title of the event category to display in the topmost part of the section.
- `headerInfo` `(String)`
    - Holds the context or description of the event category to display below the header/title.

#### Individual Event Data
The `featured` object and the objects in the `unfeatured` array share the same properties so that an unfeatured event can easily be turned into an featured one and vice versa.
- `header` `(String)`
    - Holds the title of the event, displayed on the lower left in front of the event's image. Can be empty or removed.
- `subheader` `(String)`
    - Holds the subtitle of the event (often the year of the event), displayed under the event title. Can be empty or removed.
- `imageSource` `(String)`
    - Holds the relative directory of the event's representative image. Can be empty or removed (but that wouldn't make sense).
- `info` `(String)`
    - Holds the context, description or motivation of the event. Can be empty but must not be removed. Recommended to be empty for unfeatured events since they don't show the info. 

#### Example (Common)
```JSON
{
    "header": "Event Category",
    "headerInfo": "Event Category description",
    "featured": {
      "header": "Featured event",
      "subheader": "subtitle (often the year of the event)",
      "imageSource": "/events-images/event-featured_event-year.webp",
      "info": "Description of featured event"
    },
    "unfeatured": [
      {
        "header": "Unfeatured event",
        "subheader": "subtitle (still often the year of the event)",
        "imageSource": "/events-images/event-unfeatured_event-year.webp",
        "info": "Unfeatured event description"
      },
	  ...
	]
```

---

## Variables
Sets the behavior of the slideshow to be used. With the current settings, the events will scroll back to the start when it reaches the end (`infinite`). The transition between events will be half a second (`speed: 500`) and the slideshow will only display two at a time (for readability on small screens, `slidesToShow: 2`) but will only scroll one event at a time (`slidesToScroll: 1`). 

Like carousel components in other sites, dots are shown below the slideshow (`dots: true`). Each dot represents an event in the list of events that, when selected, switches the view of the slideshow to that event.

```javascript
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1
	  };	
```

---

## Composition

### Top Level Wrapper
Allows selection for the custom styling.

```javascript
<div className="events-showcase">
	...
```

### Featured Event
Immediate assumption of a featured event above other unfeatured events, with its own wrapper.

```javascript	
	...
	<div className="featured">
    	<EventsFeaturedCard event={events.featured} />
    </div>
	...
```

### Unfeatured Event Generator

#### Fade In Wrapper `Fade`
This applies a 650 millisecond long fade from bottom animation on the components after 100 milliseconds from render time. The `ssrFadeout` enables server side rendering.

#### Slideshow Wrapper `Slider`
This component loads the earlier settings for the slideshow and wraps the generated (unfeatured) `EventsCard` components with data from objects in the `events.unfeatured` property.

```javascript
	...
	<div className="">
		<Fade ssrFadeout bottom duration={650} delay={100}>
			<Slider {...settings}>
				{events.unfeatured.map(event => (
					<EventsCard key={event.header} event={event} />	
				))}
			</Slider>
		</Fade>
	</div>
	...
```

---

## Styling

- **Source:** src\components\events\event-showcase.scss


Loads the default styling and layout for common elements.
```css
@import "../../styles/global.scss";
...
```

### Top Level Wrapper
Provides the layout of the entire component.

`.events-showcase`
```css
.events-showcase{
	/* Centering */
	display: block;
	margin: auto;

	padding: 5%;

	/* Width behavior */
	width: 80%;
	min-width: 270px;
...
```

### Event Cards Layout
Provides the common layout for the featured and unfeatured event cards.

`.events-showcase` `.featured` `.unfeatured`
```css
...
	.featured, .unfeatured{
		/* Width and element sensitive flecibility */
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;

		/* Centering */
		align-items: center;
		justify-content: center;
	}
...	
```

### Showcase Setup
The `react-slick` library has its custom styling that should be importable to the js file. But for still unresolved reasons, the js file can't import the css so here's the contents of said default styling. This isn't supposed to be exposed to begin with so no elaboration will be given.

```css
/* Slider */

.slick-slider {
	position: relative;
	display: block;
	...
```

---

## Notes
There seems to be an unnamed wrapper inside the component that doesn't serve any purpose. The reason for its existance is an puzzling but it's safe to remove. As mentioned, the slider default style importing doesn't work but it really should. 

For the meantime, the slider css can either stay in its current position or be turned into a common scss file to be imported like global.scss.