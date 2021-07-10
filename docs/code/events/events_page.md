# Events Page `Home()`
The Events page showcases the events of the organization using slideshows (from a Library) by categories: Competitions, Community Development, Workshops/Lecture Series, and Activities.

- **Source:** src\pages\events.js

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
- `EventData` from "../data/events.json"
    - JSON file that holds all the assets of the page 
- `EventsShowcase` from "../components/events/events-showcase.js"
    - Generates a component for displaying the featured event and slideshow of unfeatured events for a given category.

## Composition

### Page Meta Data
Provides metadata about the page, informing that it is the partners page.  Property `isIndex` is set to false since index has a default behavior for SiteMeta.

```javascript
<SiteMeta pageName="Events" sitePage="/events/" isIndex={false} />
	...
```

### Header
Displays a header to the site for linking other pages. Property `isIndex` is false so the header stays in a "scrolled" state.

```javascript
    ...
	<Header isIndex={false} active="Events" />
	...
```

### Opening
Displays the title of the page and the opening message.

```javascript
	...
	<Opening
        header="Events"
        headerInfo="The organization has ..."
    />
		...
```

### Event Section Generator
For every event category, generates a new `Opening` component with the category's `header` and `headerInfo` as its property. 

#### `EventsShowcase`
Displays the featured event in its own row. Below it is a slideshow that displays the unfeatured events. 

```javascript
		...
		{Object.keys(EventData).map(type => (
        	<Opening
        	  	key={EventData[type].header}
          		header={EventData[type].header}
          		headerInfo={EventData[type].headerInfo} >
          		<EventsShowcase events={EventData[type]} />
        	</Opening>
    	))}
		...
```

### Footer
Provides links to other pages, subpages, and references the organization's contacts.

```javascript
		...
    	<Footer />
		...
```

---

## Notes
You'll notice that there are a some unused or obsolete components in the same directory as this file. These were not removed during development in case the new updates would break in certain instances. These can be safely deleted. Also, there's some hardcoded data in the first `Opening` component which may have been forgotten to be transferred to the data json file. 
