# `GalleryCards({ images })`
The `GalleryCards` generates a `GalleryCard` for every Object in the `images` property: `Array`.

- **Source:** src\components\gallery\gallery-cards.js

---

## Dependencies
`React` from "react"

### Local
 - `GalleryCard` from "./subcomponents/committee-card"
    - Renders a photo of a respective committee head, with their name and position/s.
 - `./gallery-cards.scss`
     - Allows custom styling for applying center and wrap to the `GalleryCard` components.

---

## Properties

### `images` `(Array of Strings)`
Each String in this Array is a relative directory to an image file. 

#### Common Example
```JSON
	[
      "/gallery-images/gallery_eventseries1.webp",
      "/gallery-images/gallery_eventseries2.webp",
      "/gallery-images/gallery_eventseries3.webp",
      "/gallery-images/gallery_eventseries4.webp"
	]
```

---

## Variables

### `settings`	
Sets the behavior of the slideshow to be used. With the current settings, the images will scroll back to the start when it reaches the end (`infinite`). The transition between images will be half a second (`speed: 500`) and the slideshow will only display two at a time (for readability on small screens, `slidesToShow: 2`) but will only scroll one event at a time (`slidesToScroll: 1`). 

Like carousel components in other sites, dots are shown below the slideshow (`dots: true`). Each dot represents an event in the list of events that, when selected, switches the view of the slideshow to that event.

```javascript
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1
	  };	
```

---

## Composition

### Top Level Wrapper
Allows selection for the custom styling.

```javascript
<div id="gallery-cards">
	...
```

### Featured Event
Immediate assumption of a featured event above other unfeatured events, with its own wrapper.

```javascript	
	...
	<div className="featured">
    	<EventsFeaturedCard event={events.featured} />
    </div>
	...
```

### GalleryCard Generator

#### Fade In Wrapper `Fade`

This applies a 650 millisecond long fade from bottom animation on the components after 100 milliseconds from render time. The `ssrFadeout` enables server side rendering.

#### Slideshow Wrapper `Slider`

This component loads the earlier settings for the slideshow and wraps the generated `GalleryCard` components with data from objects in the `images` property.

```javascript
	...
	<Fade ssrFadeout bottom duration={650} delay={100}>
    	<Slider {...settings}>
        	{images.map(imageSource => (
            	<GalleryCard key={imageSource} source={imageSource} />
			))}
		</Slider>
	</Fade>
	...
```

## Styling

- **Source:** src\components\gallery\gallery-cards.scss

Loads the default styling for common components such as headers.
```css
@import "../../styles/global.scss";
...
```

### Top Level Wrapper
Sets the width of the entire slideshow (component) and centers it relative to the page.

`#gallery-cards`
```css
...
#gallery-cards {
	display: block;
	margin: auto;

	padding: 5%;
	margin-top: -5%;

	width: 80%;
	min-width: 270px;
...
```

### Gallery Card Default Settings
Applies default layout to the generated `GalleryCard` components.

`#gallery-cards` `.gallery-card`
```css
	.gallery-card {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
}
```

### Exposed `react-slick` styling
Due to an unresolved import problem for `react-slick` library's default styling, the contents of the library's css file is imported here as a quick fix. Since this isn't supposed to be exposed in the first place, no elaboration will be given (be careful not to adjust anything).

```css
...
slick-slider {
	position: relative;
	display: block;
	...
```