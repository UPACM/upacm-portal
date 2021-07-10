# `CoreValues`
This component introduces and displays the core values of the organization, with emphasis for each.

**Source:** src\components\about\core-values.js

---

## Dependencies
`React` from "react"

### Local
- `AboutData` from "../../data/about.json"
    - Holds all the textual data needed by the core values section of the About Us page. This includes the `header`, `headerInfo`, and `list` of core values.
- `./core-values.scss`
	- Allows custom styling and layout to the components.

---

## Component

### `CoreVal({ valText })`
Displays the first letter of the `valText` `(String)` property as a letter background for emphasis (think the first letter in medieval letters vs the other letters but opaque and in the center). Then displays the full property in front. 

```javascript
function CoreVal({ valText }){
	return(
		<div className="value">
			<h1 className="bgLetter noselect">{valText[0]}</h1>
			<p className="val-text">{valText}</p>
		</div>
	);
}
```

---

## Composition

### Top Level Wrapper
For extra selection during the styling and layout in the scss file.

```javascript
<div id="core-values">
	...
```

### Core Value Opening
Introduces the section by displaying a centered header and an opening paragraph (for context), directly below the aforementioned header. All of this is inside another wrapper for better selection in styling.

```javascript
	...
	<div class="coreval-intro">
		<h1 id="header">{AboutData.coreValues.header}</h1>
		<p id="header-info">{AboutData.coreValues.headerInfo}</p>
	</div>
	...
```

### CoreVal Generator
For each core value in `AboutData.coreValues.list`, a component is generated to display it. 

```javascript
	...
	<div id="values">
		{AboutData.coreValues.list.map(
			value => <CoreVal valText={value} /> )}
	</div>
</div> 
```

---

## Styling

Loads the default style and layout for common components.
```css
@import "../../styles/global.scss";
```

Allows browser safe (hopefully) scaling of components.
```css
@import "../../styles/animation.scss";
```

### Top Level Wrapper
Sets the default layout of the entire component. Negative margin negates the padding added under the mission and vision component.

`#core-values`
```css
#core-values{	
	margin: auto;
	margin-top: -9%;
	padding-bottom: 10%;
	background-color: white;
```

### Core Value Opening
Sets the layout of the opening header and opening message for the core value section.

```css
...
	.coreval-intro{
		text-align: center;
		}

	#header {
		color: var(--acm-orange);
		padding: 2% 0;
	}

	#header-info {
		padding: 1% 0;
		width: 40%;
		margin: auto;
	}
	...
```

### Core Value Listing
Centers the core value components (auto margin is just to ensure center placement) and applies column flexing . Also sets the sizing of the components.

```css
	...
	#values {
		margin: auto;
		$value-font-size: 2em;

		.value {
			/* Centering */
			position: relative;
			display: flex;
			flex-direction: column;
			
			/* Centering */
			align-items: center;
			justify-content: center;
			text-align: center;
			
			font-size: 1.9em;
			height: 4em;
		}
```

### Emphasis Background Letter
Makes a letter big and opaque so it can act as a background.

`#core-values` `#values` `.value` `.bgLetter`
```css
	... 
			.bgLetter{
				position: absolute;
				opacity: .25;
				font-size: 4em;
			}
	...
```

## Medium Screen Layout Adjustments
Shrinks the components and lessens the sizing's, paddings, and margin to ensure a readable layout of the core values (primarily for the big letters, they're sensitive to adjustments).

```css
...
@media (max-width: 768px) {
	#core-values > *{
		@include transform-safe(scale(0.8));
	}
	.value:first-child {
		margin-top: -10%;
	}

	#core-values {
		margin-top: 0;
		padding-top: 10%;

		#header-info {
			width: 80%;
			min-width: 300px;
		}
	}
}
...
```

## Small Screen Layout Adjustments
Further shrinks the components and margins to ensure the layout still works for smaller screens.

```css
...
@media (max-width: 420px) {
	#values {
		.value {
			@include transform-safe(scale(0.7));
		}
		.value:first-child {
			margin-top: -28%;
		}
	}
}
```

--- 

## Notes
Component manually imports from the [reference json file](about_assets.md) for the assets of the About Us page. This responsibility can be offloaded to the *About Us* page component for better flexibility and convenience to editors.