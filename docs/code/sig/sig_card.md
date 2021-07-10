# `SigCard({ group })`
The `SigCard` displays a special interest group's (hereon referred to as SIG) representative image and title, along with its description and head when hovered on.

- **Source:** src/components/sig/subcomponents/sig-card.js

---

## Dependencies
`React` from "react"

### Library
 - `Fade` from 'react-reveal/Fade'
    - Children of this component will do an animation (based on fed properties) on render.

## Local
 - `./sig-card.scss`
     - Allows custom styling for the presentation of the respective SIG.

---

## Properties

### `group` `Object`

#### Keys 
- `name`: `(String)`
    - holds the name of the respective SIG
- `head`: `(String)`
    - holds the name of the respective SIG's head
- `description`: `(Array of String)`
    - holds the overview of the respective SIG's main research topic, motivation, and function
- `portraitSrc`: `(String)`
    - holds the relative directory of the respective SIG's representative stock image 

#### Example
```JSON
{
	"name": "Special Interest Group",
    "head": "Head head",
    "description": [
        "Descriptive text", "Another descriptive text"
      ],
    "portraitSrc": "/sig/group_name.webp"

}
```

---

## Composition

### Fade on render Wrapper
Component for applying a fade-in (from the `bottom`) to the `CommitteeCard` component after 0.1 seconds of `delay`, for a `duration` of 0.65 seconds. The `ssrFadeout` property enables support for server side rendering without flicker from Javascript.

```javascript
<Fade ssrFadeout bottom duration={650} delay={100}>
	...
```

### Top level Background and Wrapper
This component wraps the entire component and sets the representative image from the `group.portraitSrc` property as the background of the component.

```javascript
	...
	<div className="sig-card"
		style={{ backgroundImage: "url(" + group.portraitSrc + ")" }}>
		...
```

### Another Content Wrapper
For more options on selectability and a product of minimizing changes during developments.

```javascript
        
		...
		<div className="info">
		...
```

### SIG Name
Displays the name of the SIG in thicker font from the `group.name`. Visible even if component isn't hovered on.

```javascript
			...
			<h2 className="name">
				<b>{group.name}</b>
			</h2>
			...
```

### SIG Head
Displays the respective SIG's head from the `group.head` property. Should only be visible when hovered.

```javascript
			...
			<h3 className="head">
				<i>{group.head}</i>     
			</h3>
		</div>
		...
```

### SIG Description Generator
Generates every element in the `group.description` property as a paragraph. Should only be visible when component is hovered on.

```javascript
		...
		{group.description.map(paragraph => (
			<p key={paragraph} className="description">
				{paragraph}{" "}
			</p>
		)}
		...
```

### Hover Me Signal
Displays a ripple animation from three circles that enlarge and shrink on different intervals. This signals the site viewer that the SigCard should be hovered on for more details (without adding text).

```javascript
		...
		<div className="ripples">
			<div className="ripple" />
			<div className="ripple" />
			<div className="ripple" />
		</div>
		...
```

---

## Styling

- **Source:** src/components/sig/subcomponents/sig-card.js

Allows access to global variables.
```css
@import "../../../styles/var.scss";
...
```

Applies the default styling and layout for common layouts such as header texts

```css
...
@import "../../../styles/global.scss";
...
```

Custom library for maximizing cross-broswer effects and animations.
```css
...
@import "../../../styles/animation.scss";
...
```

### Grid Layout for SigCards
Given a fixed amount of SIG's, components used a grid layout instead of the common flex.

```css
...
.sig-card:nth-child(1) {
	grid-row: 1;
	grid-column: 1;
	background-color: var(--acm-blue);
}

.sig-card:nth-child(2) {
	grid-row: 1;
	grid-column: 2;
    background-color: var(--acm-purple);
}

.sig-card:nth-child(3) {
	grid-row: 2;
	grid-column: 1;
	background-color: var(--acm-purple);
}

.sig-card:nth-child(4) {
	grid-row: 2;
	grid-column: 2;
    background-color: var(--acm-blue);
}
...
```

### Top Level Wrapper

Sets the styling for the background image (already setup on the js file), applies the browser safe application of transition behavior and sets the layout to allow the current position of the head and description (relative).

`.sig-card`
```css
...
.sig-card {
	/* Theme */
    color: white;

	/* Background setup */
    background-size: cover;
    background-blend-mode: multiply;
    background-position: center center;

	position: relative;

    $background-transition: 0.4s;
	@include transition-all($background-transition);

	text-align: left;

	overflow: hidden;
	...
```

### Wrapper for Textual Content
Sets the useable dimension of all its children and sets common and default properties.

`.sig-card` `.info`
```css
...
	.info {
		padding: 5%;
		
		width: 90%;
		height: 90%;
		
		display: block;
		
		background: rgba(0,0,0,0);

		$info-transition: 0.7s;
		@include transition-all($info-transition);
	...
```

### SIG Name Settings
Sets the font properties and applies a custom transition speed for the SIG name/title.

 `.sig-card` `.info` `.name`
```css
	...
		.name {
			font-weight: bolder;
			font-size: calc(1.4em + 0.4vw);

			@include transition-all(0.6);
		}
	...
```

### SIG Head Settings
Sets the font properties and layout of the SIG head. 

`.sig-card` `.info` `.head`
```css
	...
		.head {
			font-size: calc(1em + 0.2vw);
			font-weight: bold;

			width: fit-content;
			margin-top: 10px;
		}
	...
```

### SIG Description Settings
Sets the font properties and layout of the SIG description. 

 `.sig-card` `.info` `.description`
```css
	...
		.description {
			font-size: calc(0.9em + 0.2vw);

			// Spacing from local header
			margin-top: 20px;
		}
	}
...
```

### Animation Behavior for Most Browsers
Broswers call for different properties with their animations so all the known settings are used to make the ripple ease on its animation and do it indefinitely.

```css
...
	@mixin rippleSetup($speed) {
		animation: ripple ease $speed infinite;
		-webkit-animation: ripple ease $speed infinite;
		-moz-animation: ripple ease $speed infinite;
		-o-animation: ripple ease $speed infinite;
		-ms-animation: ripple ease $speed infinite;
		...
		 
```

### Ripple's Animation Process
The ripple starts normal, then quickly becomes big, then back to normal on the same duration as its growth. From the second normalization, the ripple slowly dissapears and the animation should repeat.

```css
	...
		@keyframes ripple {
			0%  {transform: scale(2);}
			12.5%  {transform: scale(4);}
			25%  {transform: scale(2);}
			100%   {transform: scale(0);}
		}
	}
...
```

### Ripple Settings
Sets the dimension of the circular ripple. The positions are set as absolute and at the center bottom of the relative top-level component. Being absolute, it shouldn't take space in block sizing and should be visibly at front by default.

`.sig-card` `.ripple`
```css
	...
	.ripple {
		/* Small Circle */
		$dimension: 10px;
		width: $dimension;
		height: $dimension;
		border-radius: 100%;

		/* Center */
		position: absolute;
		left: 50%;
		bottom: 15%;

		/* Ensure no overtaking */
		z-index: -1;
		overflow: hidden;
		position: absolute;

		/* Remove space taken */ 
		margin-bottom: -$dimension;

		opacity: 1;
		scale: 2;
		background-color: rgba(160, 160, 160, 0.438);
		@include transition-all(0.35s);
		@include rippleSetup(1.7s);
	}
...
```

### Ripple Effect Through Delay
If four circles that overlap, and follow the same animation process for growing and shrinking, they will simulate a ripple if each starts increasingly later than the previous. Imagine how a real water ripple starts with a small circle. This small circle grows and another small circle follows, and so on.

```css
	...
	.ripple:nth-child(1){
		@include animation-delay(0.0s);
	}
	.ripple:nth-child(2){
		@include animation-delay(0.2s);
	}
	.ripple:nth-child(3){
		@include animation-delay(0.4s);
	}
}
...
```

### Hide SIG Head, Description by Default
Applies the reveal transition behavior and hides them when no hover happens

```css
...
/* Will reveal on hover */
.head, .description {
    opacity: 0;
    transition: 0.8s ease;
}
...
```

### SigCard Hover Effects
On hover, show the head and description of the SIG and hide the ripples.

```css
...
.sig-card:hover{
	.info{
		// For better readability
		background: rgba(0,0,0,0.5);
		
		// Reveal
		.head, .description {
			opacity: 1;
		}
	}
	// Remove ripple
	.ripple{
		opacity: 0;
	}
}
...
```

### Small Screen Lasyout
Each SigCard takes a full row on smaller screens

```css
@media (max-width: 1000px){
	.sig-card{
		width: 100%;
	}
}
```

---

## Notes

Animations are very risky to implement on any component as its behavior can vary with browsers and can easily be disrupted on render delays. While the styling uses a custom library to account for most browsers, nothing is ever guaranteed in the web.