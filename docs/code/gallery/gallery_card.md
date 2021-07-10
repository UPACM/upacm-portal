# `GalleryCard({ source })`
The `GalleryCard` is just an additional wrapper to a simple img component for additional layout and styling options in the SCSS file. The img here is expected to be displayed with other img's in a slideshow.

- **Source:** src\components\committees\subcomponents\gallery-card.js

---

## Dependencies
`React` from "react"

## Local
- `./gallery-card.scss`
    - Allows custom styling for the presentation of the respective partner company

---

## Properties

### `partner` `(source)`
Holds the relative directory of an image file to be displayed as part of a gallery section. 

#### Common Example
```JSON
{
	"imageSource": "../gallery-images/gallery_eventseries1.webp",
}
```

---

## Composition
The component is relatively simple. We have a top level div wrapper just to allow selection and an img component inside it to display the image directed by the component's `source` property.

```javascript
<div className="gallery-card">
	<img src={source} alt="" />
</div>
```

---

## Styling

- **Source:** src\components\committees\subcomponents\gallery-card.scss

Allows for (hopefully) broswer safe animations and transitions. Currently not used.
```css
@import "../../../styles/animation.scss";
...
```

### Top Level Wrapper
Sets the layout and dimensions of the component. 

`.gallery-card`
```css
...
.gallery-card {
	/* Sizing */
	flex: 1 1 calc(88% / 3);
	min-height: 320px;
	height: 25vw;
	max-height: calc(1920 * .2);
	
	/* Spacing */
	overflow: hidden;
	margin: 3% 2%;
	position: relative;

	/* Alignment */
	text-align: left;
	align-content: flex-end;
	justify-content: flex-end;	
...
```

### 
Ensures that the image follows the size of its parent. `object-fit` is set to cover so there won't be any background visible.

`.gallery-card` `img`
```css
...
 	img {
		object-fit: cover;
		width: 100%;
		height: 100%;

		margin: auto;
	}
}
```

---

## Notes
The component can be scrapped altogether and instead be included in the `GalleryCards` since it's relatively simple but that's a code design choice left to the future developers.