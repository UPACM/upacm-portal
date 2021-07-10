# `ContactMap`

The `ContactMap` is a container for a wrapped iframe that loads a Google Map onscreen. This is just to avoid exposing the iframe on the [Contact Page](contact_page.md) and permit adding more styling options in the future (if necessary).

- **Source:** src\components\contact\contact-map.js

---

## Dependencies
`React` from "react"

## Local
 - `../contact-map.scss`
     - Allows custom styling for the layout and sizing of the component.

---

## Composition

Inside the top level wrapper `#contact-map`, is an iframe (also with its id) from GoogleMaps. The src hardcodes the location of the organization's headquarters.

```javascript
<div id="contact-map">
    <iframe
    	id="map"
        title="map"
        src="https://maps.google.com/maps?q=Department%20of%20Computer%20Science,%20University%20of%20the%20Philippines%20-%20Diliman%201101%20Quezon%20City,%20Philippines&t=&z=13&ie=UTF8&iwloc=&output=embed"
    />
</div>
```

---

## Styling

- **Source:** src\components\contact\contact-map.scss

The top level wrapper simply adds a padding on top to account for the Opening component to be rendered above it (on the [Contact Page](contact_page.md)). In the selector for the iframe, the maximum width is set to 80 percent of 1920px (the default large screen limit) and 80 percent in general (to simulate padding). The ifram adds a border by default and that is also removed here.

```css
#contact-map {
	padding-top: 5%;

	#map {
		display: block;
		margin: auto;

		width: 80vw;
		max-width: calc(1920px * 0.8);
		height: 80vh;
		max-height: calc(1080px * 0.8);
		border: none;
	}
}
```

---

## Notes
While the location of the organization is very much not likely to change, one can just make a reference and place it in the [Contact Data JSON](contact_assets.md) file to make changing it convenient.