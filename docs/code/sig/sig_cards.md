# `SigCards({ groups })`
The `SigCards` generates a `SigCard` for every Object in the `groups` prop array. Special Interest Group will now be refered to as SIG.

- **Source:** src\components\sig\sig-cards.js

---

## Dependencies
`React` from "react"

### Local
- `SigCard` from "./subcomponents/sig-card"
    - Component for displaying an image and label representing a SIG group and, when hovered, also shows the description and head of the special interest group.  
- `./sig-cards.scss`
    - Allows custom styling for layouting, and to wrap the `PartnerCard` components

---

## Properties

### `groups` `(Array of Objects)`
Each object holds a SIG's information (`name`, `head`, `description`, `portraitSrc`)

#### Example (with special cases)
```JSON
[
    {
      "name": "Special Interest Group",
      "head": "Head head",
      "description": [
        "Descriptive text", "Another descriptive text"
      ],
      "portraitSrc": "/sig/group_name.webp"
    },
	{
		"name": "",
		"head": "",
		"description": [],
		"portraitSrc": ""
	},
		...
	{
		"description": []
	}
]
```

---

## Composition

### SigCard Generator
Logic wrapper for rendering the `SigCard` components, each recieving the data from an Object from `groups` as its property. 

```javascript
<div id="sig-cards">
	{groups.map(group => (
	<SigCard key={group.name} group={group} />
	))}
</div>
```

## Styling

- **Source:** src\components\sig\sig-cards.js

For loading the default styling of components.
```css
@import "../../styles/global.scss";
...
```

## `#sig-cards`
Given that the SIG's are only four, sets the `SigCard` components layout with a padded grid.

`#sig-cards`
```css
#sig-cards {
	padding: 3%;
	padding-top: 6%;

	display: grid;

	grid-gap: 1%;
	grid-auto-rows: 1fr;
}
```

## Small screen adjustments
With small screens, the `SigCard` layout uses flex instead so that each SIG takes a single row.

```css
@media (max-width: 1000px) {
	#sig-cards {
		display: flex;

		flex-direction: column;
		> * {
			margin: 1% 0;
		}
	}
}
```

---

## Notes
The main purpose of this `SigCards` is to to generate the `SigCard` and apply wrapping effects. This is where extra logic for rendering (like filtering or sorting) should go to. The `SigCard` components are rendered by the order of Objects in the `groups` prop. 
