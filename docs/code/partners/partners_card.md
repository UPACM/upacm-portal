# `PartnerCard({ partner })`
The `PartnerCard` displays a visual representation of partner entities that have supported the organization in its events. This visual representation also redirects the site to the partners' sites when selected.

- **Source:** src\components\partner\subcomponents\partner-card.js

---

## Dependencies
`React` from "react"

## Local
- `./partner-card.scss`
    - Allows custom styling for the presentation of the respective partner company

---

## Properties

### `partner` `(Object)`

#### Keys
- `imageSource` `(String)`
    - holds the directory of the partner's portrait (relative to the root) (can be either empty or removed but there won't be an image to display).
- `website` `(String)`
    - holds the url of the partner's main site or reference (can be either empty or removed).

#### Example 
```JSON
{
	"imageSource": "../partner-images/company_name.webp",
	"website": "https://www.company.net/"
}
```

---

## Composition

### Link Wrapper
Makes the component redirect to the partner's main site or reference when selected.

```javascript
<a href={partner.website} className="partner-card">
	...
```

### Visual Representation
The visual representation of the partner entity. Can be their logo, text, icon, etc.

```javascript
	...
	<img src={partner.imageSource} alt={partner.header} />
	...
```

### Header below Visual Representation (unused)
Displays a small header under the `img` from earlier.

```javascript
    ...
	<h6 className="header">{partner.header}</h6>
	...
```

### Subheader below Visual Representation (unused)
Displays some text under the header from earlier

```javascript
	...
    <p className="subheader">{partner.subheader}</p>
	...
```

---

## Styling

- **Source:** src\components\partner\subcomponents\partner-card.scss

Allows for browser-safe scaling of elements.

```css
@import "../../../styles/animation.scss";
...
```

### Top Level Wrapper
Sets the dimensions of the `PartnerCard`

`.partner-card`
```css
...
.partner-card {
	width: 30vw;
	height: 200px;
	min-width: 290px;

	margin: 2vh 4vw;
...
```

### Partner Visual Representation Sizing
Scales the image of the `PartnerCard` while keeping its aspect ratio. Also maximizes its space.

`.partner-card` `img`
```css
...
	img {
		object-fit: contain;

		width: 100%;
		height: 100%;
	}
...
```

###  Partner Cards Header Settings
Styling for the header part of the partner (currently just to set spacing). This is currently unused.

`.partner-cards` `.header`
```css
...
	.header {
	 	padding-top: 2%;
	}
...
```

### Partner Cards Subheader Settings
Applies style and sizing to the subheader for text heirarchy. This is currently unused.

`.partner-cards` `.subheader`
```css
...
	.subheader {
		font-style: italic;
		font-weight: bold;
		opacity: 0.7;
		@include transform-safe(scale(0.8));
	}
}
```

---

## Notes

The purpose of the partners page is just to showcase the partner visual representations so one can expect that there won't be much styling nor logic to apply. If there are, it will mostly be in `PartnerCards` (i.e. seperation of partners by type). 

Note that there are some unused properties here that you may delete or expand upon. This was left as a quickfix for some suggestions during development. As of now, the styling for img covers these unused properties.


