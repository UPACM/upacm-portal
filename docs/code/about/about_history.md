# `History`
This component provides an introduction to the history of the organization and displays a scrollable timeline of the organization's historical events or milestones (along with their date and context).

**Source:** src\components\about\history.js

---

## Dependencies
`React` from "react"

### Local
- `HistoryTimestamp` from "./subcomponents/history-timestamp.js"
	- Component for displaying a historical event, along with its data (`date`, description: `event`) 
- `AboutData` from "../../data/about.json"
    - Holds all the textual data needed by the history section of the *About Us* page (actually, all the data of the page in general). This includes the `historyIntro`, and `history` (holds all the data of the historical events in the organization).
- `./history.scss`
	- Allows custom styling and layout to the components.

---

## Component

### `HistoryTimestamp` 

Component for displaying a historic event's description and year (relative to the organization). Has a stylistic component `.timestamp-dot` that marks it by the side (like in a bullet list).

- **Source:** src\components\about\subcomponents\history-timnestamp.js

#### Dependencies
- import `React` from "react"
- `../../../styles/var.scss`
    -  Allows access to the global style variables.
- `../../../styles/global.scss`
	- Loads the default style and layout for common components.


```javascript
export default function HistoryTimestamp({ date, event }) {
  	return (
    	<div className="history-timestamp">
      		<div className="timestamp-dot"></div>
      		<span className="date">{date}</span>
      		<span className="event">{event}</span>
    	</div>
  )
}
```

---

## Composition

### Top Level Wrapper
For extra selection during the styling and layout in the scss file.

```javascript
<div className=" wrapper" id="history-section">
	...
```

A redundant wrapper is present (possibly put here from an earlier system of css selection).

```javascript
    ...
	<div className="wrapper">
		...
```

### History Opening
Displays a header text and a set of paragraphs to introduce the history section of the *About Us* page (paragraps loaded from elements in `AboutData.historyIntro`)

```javascript
		...
		<div id="history-intro">
        	<h1>History</h1>
        	{AboutData.historyIntro.map(paragraph => (
            	<p key={paragraph}>{paragraph}</p>
          	))}
        </div>
		...
```

### History Timeline Generator
Inside the `#timeline-container` wrapper, each Object from the `AboutData.history` array are used to create a `HistoryTimestamp` component. These objects hold the year of the event `AboutData.history[key].date.getFullYear()` and the details of the event `AboutData.history[key].event`.

```javascript
		<div id="timeline-container">
        	{AboutData.history.map(data => {
            	var d = new Date(data.date)
            	return (
              	<HistoryTimestamp
                	key={data.event}
                	date={d.getFullYear()}
                	event={data.event} />
            )})}
        </div>
```

---

## Styling

**Source:** src\components\about\core-values.scss

Loads the default styling and layout for the common components.
```css
@import "../../styles/global.scss";
...
```

Allows maximum, allowable cross-browser compatibility when using transform.
```css
...
@import "../../styles/animation.scss";
...
```

### Top Level Wrapper
Sets the theme, padding, and width of the entire section.

`div#history-section`
```css
...
div#history-section {
	color: white;
	background: var(--acm-blue);

	padding: 8vh 0;
	max-width: 100%;
	...
```

### Centering Wrapper
Simply forces the other components to center by default.

`div#history-section` `div.wrapper`
```css
	div.wrapper {
		width: 80%;

		align-items: center;
		justify-content: center;
	}
```

### History Opening Settings
The wrapper sets the allowable width (80%) and reinforces the centering of the components. The `p` and `h1` selector simply adjust their own layout.

`div#history-section` `div#history-intro`
```css
	div#history-intro {
		width: 80vw;

		margin: auto;
		display: block;

		justify-content: center;
		text-align: center;

		h1 {
			padding: 3% 0;
			padding-top: 0;
		}
		p {
			max-width: 80%;

			margin: auto;
			display: block;
			padding-bottom: 3%;
		}
	}
```

### Scrollable Timeline Wrapper 
Centers the scrollable timeline, defines the dimensions, and adds a gradient for a transition from the history background color to the timeline.

`div#history-section` `div#timeline-container`
```css
	...
	div#timeline-container {
		margin: auto;
		display: block;

		width: 60%;
		height: 75vh;

		overflow-y: scroll;
		mask-image: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(0, 0, 0, 1) 25%,
			rgba(71, 71, 71, 1) 75%,
			rgba(255, 255, 255, 0) 100%
		);
		...
```

### Historical Event Wrapper
Sets the layout through flex, alignment and padding. Also adds a border that becomes a straight line when connected with other instances (a stylistic choice). 

`div#history-section` `div#timeline-container` `div.history-timestamp`
```css
		...
		div.history-timestamp {
			font-size: 1.5em;

			display: flex;
			align-items: center;

			padding: 4vh 0;
			padding-left: 2vw;
			border-left: 3px solid rgb(100, 100, 100);
			...			
```

### History Marker
Adds a marker or pointer for each history timestamp as a stylistic choice, mimicing a bullet point. To assume an simple arrow shape, a box is set with a color and rotated 45 degrees (margins accounted for with negative values). 

`div#history-section` `div#timeline-container` `div.history-timestamp` `div.timestamp-dot`
```css
		...
			div.timestamp-dot {
				width: 3vh;
				height: 3vh;

				background: var(--history-section-color);

				margin-left: calc(-2vw - 1.5vh - 1.5px);
				margin-right: 2vw;

				@include transform-safe(rotate(45deg));
			}
			...
```

`div#history-section` `div#timeline-container` `div.history-timestamp` `span.date`
`div#history-section` `div#timeline-container` `div.history-timestamp` `span.event`

### History Timestamp Layout
Sets the layout for each timestamp's date and event. A white border was added to make a visible seperation of the date and event.

```css
			span.date {
				padding-right: 1.5vw;
			}
			span.event {
				width: 75%;

				padding-left: 1.5vw;
				border-left: 1px solid white;
			}
		...
```

### Top Bottom Timeline Offset
To make the transition from earlier noticeable, an offset (through padding) was added in the first and last timestamp.

```css
	...
		div.history-timestamp:first-of-type {
			padding-top: 37.5vh;
		}
		div.history-timestamp:last-of-type {
			padding-bottom: 37.5vh;
		}
	}
...
```

### Scrollbar Settings
Explicit scrollbar settings are given. The timeline initally didn't have a scrollbar since the lining defined in its left already guided scrolling. However, this was added in case broswers had trouble loading the designs.

```css
	...
	div#timeline-container::-webkit-scrollbar {
		width: 5px;
	}
	div#timeline-container::-webkit-scrollbar-thumb {
		background: var(--history-section-color);
		border-radius: 2.5px;
	}
}
...
```

## Large Screen Adjustment
Sets the scaling of the components to fixed pixels for larger screens.

```css
...
@media (min-width: 1920px) {
	div#history-section {
		div#history-intro {
			width: 80%;
			padding: 0 1vw;
		}
		div#timeline-container {
			height: calc(1920px * 0.5);

			div.history-timestamp:first-of-type,
			div.history-timestamp:last-of-type {
				padding-top: calc(960px * 0.5);
			}
		}
	}
}
...
```

## Small Screen Adjustment
Maximizes the screen estate for smaller screen.

```css
...
@media (max-width: 768px) {
	div#history-section {
		div.wrapper {
			flex-direction: column;
		}
		div#history-intro {
			width: 100%;
		}
		div#timeline-container {
			width: 100%;
			height: 50vh;

			div.history-timestamp:first-of-type {
				padding-top: 25vh;
			}
			div.history-timestamp:last-of-type {
				padding-bottom: 25vh;
			}
			div.history-timestamp {
				font-size: 1em;
			}
		}
	}
}
```

---

## Notes
Consider testing a design setup where the contents alternate from left, right, and the lining with the timestamp dot is centered. This was the initially suggested design but it could be made in time so it was (temporarily) scrapped. Its component can also have its own scss file for its own style, instead of giving such responsibility to this component.
