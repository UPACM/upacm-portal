# `CommitteeCard({ member })`
The `CommitteeCard` displays a portrait of a committee head, along with their name and position/s.

- **Source:** src\components\committees\subcomponents\committee-card.js

---

## Dependencies
`React` from "react"

### Library
 - `Fade` from 'react-reveal/Fade'
    - Children of this component will do an animation (based on fed properties) on render.

## Local
 - `./committee-card.scss`
     - Allows custom styling for the presentation of the respective committee head.

---

## Properties

### `member` `Object`

#### Keys 
 - `name`: `(String)`
     - Holds the full name of the respective committee head
 - `position`: `(Array of String)`
     - Holds the titles of the respective committee head
 - `portraitSrc`: `(String)`
     - Holds the relative directory of the respective committee head's portrait 

#### Example
```JSON
{
	"name": "Name name",
	"position": ["Position Position"],
	"portraitSrc": "/committee-head-portraits/1920_position.webp",
}
```

---

## Component 

### `BoldItalic({ name, text })`

Shorthand component for returning a paragraph component with bold and italic style

> *Should be a common component in the future or implemented in SCSS*

```javascript
function BoldItalic({ name, text }) {
  return (
    <p className={name}>
      <b>
        <i>{text}</i>
      </b>
    </p>
  )
}
```

---

## Composition

### Fade on render Wrapper
Component for applying a fade-in (from the `bottom`) to the `CommitteeCard` component after 0.1 seconds of `delay`, for a `duration` of half a second. The `ssrFadeout` property enables support for server side rendering without flicker from Javascript. The `fraction` sets the treshold of the component before it starts the animation (a 0.5 fraction means the animation will start when half the component is visible).

```javascript
<Fade ssrFadeout bottom duration={650} delay={100} fraction={0.5}>
```

### Content Wrapper
Wrapper component for the portrait and texts of the committee head.

```javascript
 	...
	 <div className="committee-card">
	 	...
```

### Portrait Wrapper
Wrapper component for add extra adjustment to the committee image

#### Committee Head Portrait
Loads and renders the image referenced by the prop `portraitSrc` of `member`.

```javascript
    	...
		<div className="portrait-wrapper">
			<img alt="member" className="portrait" src={member.portraitSrc} />
				...
```

### Committee Head Name
Displays the name of the committee head from the `name` prop of `member`.

```javascript
			...
			<p className="name">
				<b>{member.name}</b>
			</p>
			...
```

### Committee Head Title Generator
Iterates through the `position` prop of `member` and displays each with a `BoldItalic` component.

```javascript
			...
			{member.position.map(position => (
					<BoldItalic key={position} name="position" text={position} />
			))}
			...
```

---

## Styling

- **Source:** src\components\committees\subcomponents\committee-card.scss

Loads the default styling for the text
```css
@import "../../../styles/global.scss";
```

Allows for browser safe scaling
```css
@import "../../../styles/animation.scss";
```

### Top Level Wrapper
Sets the variables for later styling, makes the images keep its aspect ratio but will scale down to given dimension, and sets the dimension of the `CommitteeCard`.

`.committee-card`
```css
...
.committee-card {
	/* Variables */
	$text-color: black;
	$subtext-color: var(--acm-blue);


	/* Keep aspect ratio but scale down */
	object-fit: contain;

	$image-dimension: calc(2vw + 180px);

	/* Layout */
	padding: 30px;

	width: 280px;
	height: 320px;
...
```

### Portrait Wrapper
Sets the layout and shape of the actual committee head img

`.committee-card` `.portrait-wrapper`
```css
...
	.portrait-wrapper {
		/* Layout */
		overflow: hidden;
		border-radius: 100%;

		padding: 30px;

		/* Centering */
		display: block;
		margin: auto;

		/* Dimensions */
		width: $image-dimension;
		height: $image-dimension;
	}
...
```

### Committee Head Portrait Settings
Ensures portrait follows its wrapper behavior and applies its own layout and style.

`.committee-card` `.portrait`
```css
...
	.portrait {
		/* Dimensions */
		width: 100%;
		height: 100%;

		/* Centering */
		display: block;
		margin: auto;

		/* Follow up with `committee-card.portrait-wrapper` border */
		border-radius: 100%;
	}
...
```

### Committee Head Name Text

Set the color and layout of the committee head's name

`.committee-card` `.name`
```css
...
	.name {
		color: $text-color;

		/* Layout */
		text-align: center;

		margin: auto;
		display: block;
	}
...
```

### Committee Positions Settings
Set the style and layout of the council's position. Since it uses the same component as the committee head's name, scale it relative to the default for heirarchy and to ensure it fits better (it can be more than one line).

`committee-card` `.position`
```css
...
	.position {
		color: $subtext-color;

		/* Layout */
		text-align: center;
		margin-bottom: -5px;

		/* Heirarchy and allowance */
		@include transform-safe(scale(0.75));
	}
...
```

### Emphasis on First Committee Card Child
Ensures the first instance of `CommiteeCard` takes the full width (has no neighbor components) since the first instance is assumed to be the overall head of the council.

`.committee-card:nth-child(1)`
```css
...
/* First child takes full width */
.committee-card:nth-child(1) {
	width: 100vw;
}
	
```

### Notes
Most of the adjustments for the committee page is assummed to be in this component as it has the responsibility of setting the style for displaying the committee heads. 

For quick style adjustments, variables were utilized but the components are modular enough to allow more sophisticated styling. 

Avoid putting logic in this component (that's for the `CommitteeCards`) unless if it has to be individually placed per instance of this component.
