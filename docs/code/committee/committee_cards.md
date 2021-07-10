# `CommitteeCards({ members })`
The `CommitteeCards` generates a `CommitteeCard` for every Object in the `members` property: `Array`.

- **Source:** src\components\committees\committee-cards.js

---

## Dependencies
`React` from "react"

### Local
- `CommitteeCard` from "./subcomponents/committee-card"
    - Renders a photo of a respective committee head, with their name and position/s.
- `./committee-cards.scss`
    - Allows custom styling for applying center and wrap to the `CommitteeCard` components.

---

## Properties

### `members` `(Array of Object)`
Holds each committee head's information (`name`, `position`, `portraitSrc`)

#### Example (with special cases)
```JSON
[
	{
		"name": "Name Name",
		"position": ["position", "position"],
		"portraitSrc": "/committee-head-portraits/2122_position.webp",
	},
		...
	{
		"name": "",
		"position": [],
		"portraitSrc": "/committee-head-portraits/2021_position.webp"
	}
]
```

---

## Composition

### CommitteeCard Generator
Generates the `CommitteeCard`, each recieving the data from an Object from `members` as its prop.

```Javascript
	<div id="committee-cards">
		{members.map(member => (
			<CommitteeCard key={member.name} member={member} />
		))}
	</div>
```

---

## Styling

### Top Level Wrapper
Applies centering and wrapping to the committee cards.

`#committee-cards`
```css
...
#committee-cards {
	padding: 20px;

	display: flex;
	flex-wrap: wrap;

	justify-content: center;
...
```

---

## Notes
The main purpose of this `CommitteeCards` is to to generate the `CommitteeCard` components and apply wrapping effects. This is where extra logic (like filtering or sorting) should go to.

The `CommiteeCard` components are rendered by the order of Objects in the `members` prop. 