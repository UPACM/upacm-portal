# Committee Page
The Committee page is the topmost component that shows the members of UP ACM's executive board per batch or academic year. Heads of the Executive Board are generally responsible for certain functions and existing committee of the organization. 

- **Source:** src\pages\committee.js

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
- `CommData` from "../data/committees.json"
    - JSON file that holds all the assets of the page 
- `CommitteeTabs` from "../components/committees/committee-tabs.js"
    - Displays all loaded council members by academic year 

---

## Composition

### Site Metadata
Provides metadata about the page, informing that it is the committee page. Property `isIndex` is *false* since index has a different behavior for SiteMeta.

```javascript
<SiteMeta pageName="Committees" sitePage="/committees/" isIndex={false} />
```

### Header
Set to notify the header that the Committee Page is currently being displayed. Property `isIndex` is *false* so the header stays in a "scrolled" state (header color visible).

```javascript
	...
	<Header isIndex={false} active="Committees" />
	...
```

### Width Limiting Wrapper
Triggers a global SCSS effect wherein the component is forced to be 300px - 1920px wide.
```javascript
	...
	<div className="wrapper incompressible">
		...
```

### Opening
Displays the title of the page and the opening message, loaded from the `CommData.council`.

```javascript
		...
		<Opening
    		header={CommData.council.header}
        	headerInfo={CommData.council.headerInfo}>
			...
```

### Committee Batch Generator
Displays the councils provided in its property `batches`.

```javascript
    		...
			<CommitteeTabs batches={CommData.council.batch} />
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

This provides an abstract layout of the site's committee page. Hence, it will naturally have many common imports and should refrain from having exposed logic (those are its children's responsibility.
 
This page relies on the global scss and site theme for its background but its children's styling are open for change.
