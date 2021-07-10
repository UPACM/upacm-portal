# Special Interest Groups Page
The Special Interest Groups (hereon referred to as "SIG") Page shows the description and head of the organization's special interest group. These are research groups that research on a topic related to Computing and Computer Science.

- **Source:** src\pages\sig.js

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
- `../styles/var.scss`
    - Loads the common variables across components in the code base.
- `../styles/global.scss`
	- Loads the common design and layout of certain components in the code base

### Local
- `SigData` from "../data/sig.json"
    - JSON file that holds all the assets of the page 
- `SigCards` from "../components/sig/sig-cards.js"
    - Dsiplays all the SIG's in the organization, along with their description and head.

--- 

## Composition

### Page Meta Data
Provides metadata about the page, informing that it is the special interest groups page. Property `isIndex` is set to false since index has a default behavior for SiteMeta.

```javascript
<SiteMeta pageName="SIGs" sitePage="/sig/" isIndex={false} />
	...
```

### Header
Set to notify the header that the SIG's Page is currently being displayed. Property `isIndex` is set to false so the header stays in a "scrolled" state.

```javascript
	...
	<Header gap={true} active="SIG" />
	...
```

### Width Limiting Wrapper
Triggers a global SCSS effect wherein the component is forced to be 300px - 1920px wide.

```javascript
	..,
	<div className="wrapper incompressible">
		...
```

### Opening
Displays the title of the page and the opening message, loaded from the `SigData.opening`.

```javascript
		...
		<Opening
			header={SigData.opening.header}
			headerInfo={SigData.opening.headerInfo}>
			...
```

### SigCards
Displays the SIG's from the data provided in its property `SigData.groups`.

```javascript
    		...
				<SigCards groups={SigData.groups} />
			</Opening>	
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
This component is the top level representation of the SIG Page layout so the logic and styling of the site should be applied in the `SigCard` (for individal SIG's adjustment) and `SigCards` (shared design, layout adjutsments) components.



