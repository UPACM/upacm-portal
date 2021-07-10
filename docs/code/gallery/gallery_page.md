# Gallery Page
The Gallery page simply showcases various images from past events. 

- **Source:** src\pages\gallery.js

---

## Dependencies
`React` from "react"

### Common
- `Header` from "../components/header.js"
    - Reusable component for providing links to the other major pages of the site
- `Footer` from "../components/footer.js"
    - Reusable component for providing links to other parts of the site and for showing contacts 
- `SiteMeta` from "../components/site-meta.js"
	- Reusable component for providing meta data on the corresponding component.
- `Opening` from "../components/opening.js"
    - Reusable component for displaying a header and header message/text and also acts as a wrapper

### Local
 - `GalleryData` from "../data/gallery.json"
    - JSON file that holds all the assets of the page 
 - `GalleryCards` from "../components/gallery/gallery-cards.js"
    - Generates a component for displaying a set of images in a slideshow (uses a library).

## Composition

### Page Meta Data
Provides metadata about the page, informing that it is the gallery page.  Property `isIndex` is set to false since index has a default behavior for SiteMeta.

```javascript
<SiteMeta pageName="Gallery" sitePage="/gallery/" isIndex={false} />
	...
```

### Header
Displays a header to the site for linking other pages. Property `isIndex` is false so the header stays in a "scrolled" state.

```javascript
    ...
	<Header isIndex={false} active="Gallery" />
	...
```

### Opening
Displays the title of the page and the opening message.

```javascript
    ...
	<Opening header={GalleryData.header} headerInfo={GalleryData.headerInfo}/>
	...
```

### Gallery Section Generator
For each key (which represents a gallery category) in the `GalleryData.events` property, It generates a section of the gallery page.

#### Gallery Section 
Using a library, the images of a particular gallery section is loaded as a slideshow. This is wrapped with a `Opening` component to display the category's title before the slideshow (with some custom styling).

This is one of the few instances where the headerStyle property of the `Opening` component is used (which is a good thing). It simply applies the given inline css to the Opening's header or title.

```javascript
	...
	{Object.keys(GalleryData.events).map(category => 
		<Opening header={category} headerStyle={{"padding-bottom": "4%" }}>
			<GalleryCards images={GalleryData.events[category]} />
		</Opening>
	}
	...
```