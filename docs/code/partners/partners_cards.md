# `PartnerCards({ partners })`
The `PartnerCards` generates a `PartnerCard` for every Object in the `partners` property.

- **Source:** src\components\partners\partners-cards.js

---

## Dependencies

`React` from "react"

### Local
- `PartnerCard` from "./subcomponents/partner-card"
    - Displays a visual representaion (i.e. logo) of a partner entity that has supported the organization in its activities.  
- `./partner-cards.scss`
    - Allows custom styling for applying center, layouting, and wrap to the `PartnerCard` components

---

## Properties

### `partners` `(Array of Objects)`

Holds a partner's information (`imageSource`, `website`)

#### Example (with special cases)
```JSON
[
    {
	  "website": ""
    },
	{
      "imageSource": "",
    },
		...
    {
      "imageSource": "../partner-images/company.webp",
	  "website": "https://www.company.net/"
    }
```

---

## Composition

### PartnerCard Generator
Logic wrapper for rendering the `PartnerCard` components, each recieves data from an Object from `partners` as its prop.

```javascript
<div id="partner-cards">
	{partners.map(partner => (
		<PartnerCard key={partner.imageSource} partner={partner} />
	))}
</div>
```

## Styling

- **Source:** src\components\partners\partners-cards.scss

For loading the default styling of components.
```css
@import "../../styles/global.scss";
...
```

## Partner Cards Settings (Layout and Spacing)
Sets some spacing, allows wrapping, and centers the `PartnerCard` components

`#partner-cards`
```css
...
#partner-cards {
	padding: 75px;
	padding-bottom: 0px;

	display: flex;
	flex-wrap: wrap;

	justify-content: center;
	align-items: center;
	overflow: hidden;
}
```

## Notes
The main purpose of this `PartnerCards` is to to generate the `PartnerCard` and apply wrapping effects. This is where extra logic for rendering (like filtering or sorting) the partner cards should go to. The `PartnerCard` components are rendered by the order of Objects in the `partners` property. 
