# Index
This is the first page of the website. Also referred to as the home page. It provides an opening description of the organization, a reference to its events, and a preview of its social media feed/s.

- **Source:** src\pages\index.js

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
    - Reusable component for displaying a header, opening message, and also acts as a wrapper

### Local
- [`indexData`](index_assets.md) from "../data/index.json"	
    - JSON file that holds all the `String` assets of the page 
- `srcVid` from "../assets/videos/landing-video.mp4"
	- The landing video that acts as the background for the landing section of the index.
- [`Landing`](index_landing.md) from "../components/index/landing.js"
    - Displays the landing video and text of the home page.
- [`Events`](index_events.md) from "../components/index/events.js"
    - Displays the featured events of the organization and some contextual paragraph about it.
- [`SocialEmbed`](index_social_embeds.md) from "../components/index/social-embed.js"
    - Displays the available social media feeds of the organization. Currently, only has Twitter.

## Composition

### Page Meta Data
Provides metadata about the page, informing that it is the index or home page.  With `isIndex` enabled, the page gets a title statement that shows when the user hovers their tab in the browser.

```javascript
<SiteMeta pageName="Home" isIndex={true} />
	...
```

### Header
Displays a header to the site for linking other pages. With `isIndex` enabled, the header has a transparent background that only converts into its default when scrolled for the initial layout of the home page.

```javascript
    ...
	<Header isIndex={true} />
	...
```

### Landing Section
Displays the landing video and hero text to welcome the users. Loads the contents from `indexData.landing`.

```javascript
	...
	<Landing
        videoSrcObj={srcVid}
        introText={indexData.landing.title}
        introSubText={indexData.landing.text}
    />
	...
```

### Width Limiting Wrapper
Sets all the sections (except the landing section) to only have a width between 300px - 1920px. Triggered from a global scss effect.

```javascript
    ...
	<div className="wrapper incompressible">
		...
```

### Site Introduction Section
The first opening component of the site so the users can have a better idea of what the organization is. Loads the contents from `indexData.siteIntro`.

```javascript
		...
    	<Opening
        	header={indexData.siteIntro.title}
          	headerStyle={{ color: "#0182ac" }}
          	headerInfo={indexData.siteIntro.text}
        />
		...
```

### Featured Events Section
Component that showcases the organization's featured events. Also has a contextual paragraph, loaded from `indexData.eventsIntro`.

```javascript
		...
		<Events eventsSectionText={indexData.eventsIntro.text} />
		...
```

### Social Embeds Section
Displays a preview of the organization's feed on available social media platforms. Currently, only implements the Twitter embed.

```javascript
<Opening
          header={indexData.socialIntro.title}
          headerInfo={indexData.socialIntro.text}
          style={{ padding: "6% 0" }}
          aosEffect={true}
        >
          <SocialEmbed />
        </Opening>
```

### Page Footer
Provides references to other pages, subpages, and contacts of the organization.

```javascript
    ...
	<Footer />
	...
```
