# Parterns Subpage
The Partners subpage simply showcases the visual representation (logos, titles, etc.) of recognizable entities that have supported the organization in its events.

- **Source:** src\pages\partners.js

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
 - `PartnersData` from "../data/partners.json"
    - JSON file that holds all the assets of the page 
 - `Partnercards` from "../components/partner/partner-cards"
    - Displays all the partner companies' visual representations

---

## Composition

### Page Meta Data
Provides metadata about the page, informing that it is the partners page.  Property `isIndex` is set to false since index has a default behavior for SiteMeta.

```javascript
<SiteMeta pageName="Our Partners" sitePage="/partners/" isIndex={false} />
	...
```

### Header
Displays a header to the site for linking other pages. Property `isIndex` is set to false so the header stays in a "scrolled" state.

```javascript
	...
    <Header isIndex={false} />
	...
```

### Opening
Displays the title of the page and the opening message, loaded from the `PartnersData`.

```javascript
	...
	<Opening
    	header={CommData.council.header}
        headerInfo={CommData.council.headerInfo}>
		...
```

### PartnerCards
Displays the partner visual representations, referencing `PartnersData.partnerList` to `partners`.

```javascript
		...
		{<PartnerCards partners={PartnersData.partnerList} />}
	</Opening>
	...
```

### Footer
Provides links to other pages, subpages, and references the organization's contacts.

```JS
    ...
	<Footer />
	...
```

---

## Notes
This component isn't wrapped by a div with className `wrapper incompressible` that hard limits the size of the page. This will make `Opening` still occupy the full width of the page at low zoom levels. The visual representations are expectedly not the same sizes so be careful with the layout.
