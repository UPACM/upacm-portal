# `Events({ eventsSectionText })`
The `Events` displays the landing video and message of the index page. It's described as "landing" because the user "lands" on this section immediately after opening the site in their browser. 

- **Source:** src\components\index\events.js

---

## Dependencies
- `React` from "react"
- `{ Link }` from "gatsby"
    - A component that redirects to a subsection or page in the site. 

### Library
 - `Fade` from "react-reveal/Fade"
	- Library component that allows a fade-in effect to its children upon render.

### Local
- `././events.scss`
    - Allows custom styling for setting the layout and styling of its components.
- `EventData` from "../../data/events.json"
    - Holds all the event information of the Events Page. This component will be the source for the representative images of the organization's featured events.

---

## Properties
- `eventsSectionText` `(String)`
    - A paragraph for explaining the events of the organization.

---

## Components

### `EventDiamond({ event })`
Displays a featured event from a section or category in the Events page. Wrapped by a `Link` component so it can redirect the user to the corresponding section of the event page when the component is selected.

#### Properties
- `event` `Object`
    - The keys of this Object contain various information about a corresponding, featured event. Notable keys are `imageSource` (holds the relative directory of the featured event's representative image), and `header` (for differentiating between featured events).

#### Common Example
```JSON
	{
      "header": "Event Name",
      "subheader": "Year of Event", 	// Unused
      "imageSource": "/events-images/event-eventname-year.webp",
      "info": "Description description" // Unused
    }
```

```javascript
function EventDiamond({ event }) {
  return (
    <Link className="diamond" to={"/events/#" + event.header}>
      <div className="diamond-content">
        <img
          className="diamond-img"
          src={event.imageSource}
          alt={event.header}
        />
      </div>
    </Link>
  )
}
```

---

## Composition

### Top Level Wrapper


```javascript
<div id="events">
	...
```

### 'Fade In from Bottom' Wrapper
This applies a 550 millisecond long fade from bottom animation on the components after 100 milliseconds from render time. The `ssrFadeout` enables server side rendering.

```javascript
	...
	<Fade ssrFadeout bottom duration={550} delay={100}>
		...
```

### Event Opening Section
Initially introduces the featured events of the organization through a header and a paragraph. Also has a `Link` (button) that redirects the user to the Events page of the site when selected.

```javascript
	...
		<div className="events-opening">
        	<h1 className="title">Events</h1>
          	<p className="text">{eventsSectionText}</p>
          	<Link to="/events/" className="events-page-link">
            	LEARN MORE
          	</Link>
        </div>
		...
```

### EventDiamond Generator
For each featured event accessible in `EventData`, an `EventDiamond` component is generated to showcase the featured events' images to the user.

```javascript
		...
		<div className="showcase-container">
        	<div id="showcase">
        		{Object.keys(EventData).map(type => (
            		<EventDiamond
              			key={EventData[type].featured.header}
              			event={EventData[type].featured}
            		/>
          		))}
        	</div>
      </div>
```

---

## Styling

- **Source:** src\components\index\events.js

Loads the cross-broswer function for transforming and scaling components.

```css
@import "../../styles/animation.scss";
...
```

Loads the global variables of the code base, commonly used in themeing.
```css
...
@import "../../styles/var.scss";
...
```

### Top Level Wrapper
Sets the background color of the entire component. Its children now have a centered, flex layout.

```css
...
#events {
	background-color: $acm-blue;
	display: flex;
	align-items: center;
	justify-content: space-between;
	...
```

### Events Section Opening
Sets the font color, text alignment, and sizing of the opening text.

```css
	...
	.events-opening {
		background: none;
		color: white;
		width: 40%;
		padding: 0 5%;
		text-align: left;
		...
```

### Events Page Redirect Settings
Stylizes the event link that redirects to the event page. It will render as a circular button that scales up when hovered.

`#events` `.events-opening` `events-page-link` 
```css
		...
		.events-page-link {
			/* Centering */
			display: flex;
			align-items: center;
			justify-content: center;
			
			/* Sizing */
			width: 80%;
			margin-top: 3%;
			height: 50px;
			
			border-radius: 25px;
			
			/* Theme */
			background-color: white;
			color: rgb(46, 46, 46);
			font-weight: bolder;
			box-shadow: 2px 2px 10px rgb(46, 46, 46);
			
			/* Adds easing to transitions */
			@include transition-single(transform);
		}

		.events-page-link:hover {
			cursor: pointer;
			@include transform-safe(scale(1.1));
		}
	}
	...
```

### Event Diamonds Top Level Wrapper
Centers the components inside it and ensures the diamonds take up half the screen.

```css
	...
	.showcase-container {
		width: 50%;
		display: flex;
		justify-content: center;
		...
```

```css
	...
		#showcase {
			/* Dimensions */
			width: 30vw;
			height: 30vw;
			max-width: calc(1920px * 0.3);
			max-height: calc(1920px * 0.3);
			
			/* Layout */
			display: grid;
			grid-auto-rows: 1fr;
			gap: 3%;
			
			/* Rotates the components so they assume the form of a diamond. */
			@include transform-safe(rotate(45deg));
			...
```

### Event Diamonds Grid Layout
Utilizes the grid layout to position the diamonds into a 2x2 grid. Accounting for their diamond shape, four diamonds side by side form another bigger diamond. A reference to Jammond and our organization's logo.

```css
			...
			.diamond:nth-child(1) {
				grid-row: 1;
				grid-column: 1;
			}
			.diamond:nth-child(2) {
				grid-row: 1;
				grid-column: 2;
			}
			.diamond:nth-child(3) {
				grid-row: 2;
				grid-column: 1;
			}
			.diamond:nth-child(4) {
				grid-row: 2;
				grid-column: 2;
			}
			...
```

### Event Diamond Settings
Centers the componentds of an Event Diamond and adds a box-shadow to the component for better outline.

```css
			...
			.diamond {
				/* Centering */
				display: flex;
				align-items: center;
				justify-content: center;
				
				overflow: hidden;
				@include transition-all;
				box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
				...
```

### Event Diamond Content Settings
Makes the components maximize the full width and height but hides any overflows (that will usually arise from the rotations). 

The wrapper of the diamond container is rotated 45 degrees to assume a diamond shape. However, this means the images of the featured events are rotated as well. Thus, a corrective rotation is added to negate this.To make sure the img doesn't show a background color, it's size is enlarged to overflow and its `object-fit` is cover and centered. For the price of showing the representative image less, the layout looks better.

Also, hovering on the EventDiamonds applies a light overlay and scales the image to signal hovering. 

```css
			...
				.diamond-content {
					width: 100%;
					height: 100%;
					overflow: hidden;

					.diamond-img {
						width: 150%;
						height: 150%;
						
						margin-left: -25%;
						margin-top: -25%;

						@include transform-safe(rotate(-45deg));
						
						object-fit: cover;
						object-position: center center;
						mix-blend-mode: lighten;

						@include transition-single(transform);
					}
				}
			}

			.diamond:hover {
				background: rgba(11, 146, 236, 0.52);
				@include transform-safe(scale(1.1));
				cursor: pointer;
			}
		...
```

## Medium to Small Screen Adjustment
On smaller screens, the diamond effect is removed. This means clearing transform rotations and clearing margins so that the events are displayed as a normal square 2x2 grid.

 All the components are now centered and displayed in flex-column layout. 

```css
@media only screen and (max-width: 1280px) {
	#events {
		flex-direction: column;
		margin: auto;
		text-align: center;
		overflow-x: visible;
		padding: 5% 0;
		min-width: 280px;
		.events-opening {
			width: 90%;
			text-align: center;

			> * {
				margin: min(10%, 50px) 0;
			}

			.events-page-link {
				margin: auto;
			}
		}
		.showcase-container {
			width: 100%;
			margin: 10% 0;
			#showcase {
				width: 75vw;
				height: 75vw;
				margin: 0;
				padding-bottom: 5%;
				@include transform-safe(rotate(0deg));

				.diamond {
					border-radius: 20px;

					.diamond-content {
						.diamond-img {
							width: 100%;
							height: 100%;
							margin: 0;
							@include transform-safe(rotate(0deg));
							object-fit: cover;
						}
					}
				}
			}
		}
	}
}
```

---

## Notes
This component is heavily reliant on `transform`. Due to differences on browser implementations of CSS, the site may not load as designed so make sure to further test this section when possible.
