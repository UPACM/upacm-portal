# About Page
The About page provides an overview of UP ACM as a student organization driven by its Mission, Vision, and Core Values. It also goes through the history of the event.

- **Source:** src\pages\committee.js

---

## Dependencies
`React` from "react"
   
### Common
- `Header` from "../components/header.js"
	- Reusable component for providing links to the other major pages of the site.
- `Footer` from "../components/footer.js"
    - Reusable component for providing contacts and links to other pages. 
- `SiteMeta` from "../components/site-meta.js"
	 - Reusable component for providing meta data on the corresponding component.

### Local

- `AboutIntro` from "../components/about/about-intro.js"
    - Component that provides a formal introduction to the organization.
- `MissionVision` from "../components/about/mission-vision.js"
    - Component that displaysthe organization's mission and vision statements.
- `CoreValues` from "../components/about/core-values.js"
    - Component that displays the organization's core values.
- `History` from "../components/about/history.js"
    - Component that provides a laid out summary of the organization's history, along with a scrollable list of it's important milestones or events.
- `Achievements` from "../components/about/achievements.js"
    - Component that displays a scrollable list of the organization's achievements.
- `../styles/var.scss`
    - Allows access to the global design variables of the code base.
- `../styles/global.scss`
    - Applies all the default styling and layout for common components.

---

## Composition

### Site Metadata
Provides metadata about the page, informing that it is the About Us page. Property `isIndex` is *false* since index has a different behavior for SiteMeta.

```JSX
<SiteMeta pageName="Committees" sitePage="/committees/" isIndex={false} />
	...
```

### Header
Set to notify the header that the About Us Page is currently being displayed. Property `isIndex` is *false* so the header stays in a "scrolled" state (header color visible).

```JS
	...
	<Header isIndex={false} active="Committees" />
		...
```

### Width Limiting Wrapper
Triggers a global SCSS effect wherein the component is forced to be 300px - 1920px wide.

```JS
	...
	<div className="wrapper incompressible">
		...
```

### Actual composition of Page
These are the contents displayed in the About Us page, ordered exactly as below. Each apply their own styling and import their needed data so this page doesn't access any data.

```javascript
		....
		<AboutIntro />
		<MissionVision />
		<CoreValues />
		<History />
		<Achievements />
	</div>
	...
```


### Footer

Provides links to other pages, subpages, and references the organization's contacts.

```JS
    <Footer />
```

---

## Notes
The global imports are just to ensure the hildren called in this component gets the default layouts and styles. However, some of these children access the same imports in their designs so it may be redundant to an extent. Notice as well that this page doesn't import data like the other pages. Each component imports on their own which may be worse for render time (by a small margin).