# `CommitteeTabs({ batches })`

The `CommitteeTabs` is the actual functional component that renders to display the council heads per academic year. By its top are buttons that, when pressed, changes the displayed council depending on their label. They label of the buttons are the keys of the batches property.

- **Source:** src\components\committees\committee-tabs.js

---

## Dependencies
- `React, { useState }` from "react"
    - Allows the functional component to retain variables when rerendering

### Local
- `CommitteeCards` from "./committee-cards"
    - Displays photos of committee heads, with their names and position/s 
- `"./committee-tabs.scss"`
    - Allows custom styling for the buttons of the component

---

## Properties

### `batches` `(Object)`
Its keys (corresponding to academic years) hold an array of `Objects`, containing information about the respective committee head. 
	
#### Example (with special cases)
```JSON
{
	"2021 - 2022": [
	{
		"name": "Name name",
		"position": ["position"],
		"portraitSrc": "/committee-head-portraits/8889_position.webp"
	},
	{
		"name": "Another name",
		"position": ["position", "position"],
		"portraitSrc": "/committee-head-portraits/2324_position.webp"
	},
		...
	],
	"2020 - 2021": [
	{
		"name": "",
		"position": [""],
		"portraitSrc": "/committee-head-portraits/9899_position.webp"
	},
		...
	{
		"position": [],
		"portraitSrc": "/committee-head-portraits/2021_membership.webp"
	},
	]
}
```

---

## Variables

- `visibleBatch` `(String)` `state`
    - Keeps track of which council to render (by batch or academic year)
    - Defaults to the current academic year 
- `currentYear` `(Date())`
    - Holds the current year so we don't have to call `new Date()` twice when we set a d.

---

## Composition
	
### Button Generators

### `div #committee-batches`
If there is at least more than one batch, it iterates through the keys (which are academic years in context) and generates a button labeled for each. It also serves as a wrapper for the generated buttons.

#### `<button>`
Labels one academic year and, when pressed, changes the `visibleBatch` state to the button's held academic year. It also gains a className `"selected"` when pressed for more options in styling.
 
```javascript
	...
	<div id="committee-batches">
    	{Object.keys(batches).length > 1 
			&& Object.keys(batches).map(batch => (
        	<button key={batch} 
				onClick={() => setVisibleBatch(batch)}
				className={visibleBatch === batch && "selected"}>
            	<h6>{batch}</h6>
          	</button>
        ))}
    </div>
	...
```

### CommitteeCards
Renders the `CommitteeCard` components from the Objects in the `batches` property, with the key held by `visibleBatch`.

```javascript
		...
    	<CommitteeCards members={batches[visibleBatch]} />
		...
```

---

## Styling

- **Source:** src\components\committees\committee-tabs.scss

Allows for browser safe scaling
```css
@import "../../styles/animation.scss";
```

### Top Level Wrapper

The applied wrapper styling of the buttons. Makes the buttons centered and position-dynamic relative to the screen width.

`#committee-batches`
```css
...
#committee-batches {
	/* Adjust to screen width by wrapping */
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;

	/* Centering */
	align-items: center;
	justify-content: center;

	/* For better readability */
	padding-top: 50px;
	...
```


### Committee Batch Buttons
Sets the shape and style of the button.

`#committee-batches` `.button`
```css
...
	.button {
		/* Dimensions */
		width: 250px;
		height: 75px;
		margin: 15px;

		/* Style */
		color: white;
		background-color: #2b2b2b;

		/* Smooth edge */
		border: none;
		border-radius: 40px;

		/* Default for applying transition delays */
		@include transition-all;
	}
...
```
#### Button Effects Effects

Apply transition or animation effects for selected and hovered buttons

```css
...
	/* Default for applying transition delays */
	button.selected {
		background-color: var(--acm-blue);
		color: white;
	}

	/* Visually show when a button is selected */
	button:hover {
		color: var(--acm-blue);
		@include transform-safe(scale(1.08));
	}

	button.selected:hover {
		color: #2b2b2b;
		@include transform-safe(scale(1.08));
	}
}
```

## Notes
This component is a logic wrapper for changing the council to display. The styling and components it's responsible for is the buttons. It can adjust the positioning and layout of the `CommitteeCards` if necessary. If you need to adjust the component extensively, be careful with changing the state.