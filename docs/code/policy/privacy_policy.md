# `PrivacyPolicy({ data }`

- **Content Directory:** src\markdown\privacy-policy.md
- **Page Directory:** src\pages\privacy-policy.js

The Privacy Policy subpage details how UP ACM SC collects, uses, transfers, and discloses data.

---

## Content 

The contents of the page is in below the code shown here, in the markdown file:
**src\markdown\privacy-policy.md**.

```
---
title: "Privacy Policy"
date: "2019-04-15"
---

Content should be here
```
---

## Dependencies

- `React` from "react"
- `{ graphql }` from "gatsby"

### Common

 - `Header` from "../components/header.js"
	- Reusable component for providing links to the other major pages of the site
 - `Footer` from "../components/footer.js"
    - Reusable component for providing links to other parts of the site and for showing contacts 
 - `SiteMeta` from "../components/site-meta.js"
	 - Reusable component for providing meta data on the corresponding component.
 - `Opening` from "../components/opening.js"
    - Reusable component for displaying a header and header message/text and also acts as a wrapper
 - `../styles/global.scss`
    - Imports the default styling and layout for components of the site 

## Local

 - `PolicyLayout` from "../components/privacy-policy/policy-layout.js"
    - Allows for applying extra logic and styling to the privacy policy page by wrapping the component.

---

## Property / Variable

### `data`

Fetches the contents of `../markdown/privacy-policy.md` to be used as children or content of the privacy policy page. The children should be formatted as JSX when it reaches the `PolicyLayout` component.

```
export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "markdown/privacy-policy.md/" } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`
```

No example will be given as the contents are not supposed to be read nor edited directly.

---

## Composition

### `SiteMeta`  

Provides metadata about the page, informing that it is the privacy policy page.  Property `isIndex` is set to false since index has a default behavior for SiteMeta.
```JSX
      <SiteMeta pageName="Privacy Policy" sitePage="/privacy-policy/" isIndex={false} />
```

### `Header`

Displays a header to the site for linking other pages. Property `isIndex` is set to false so the header stays in a "scrolled" state.
```JS
    <Header isIndex={false} />
```

### `div content wrapper index`

Triggers the content and wrapper styling. This adds an offset on its top to give room for the header and does not allow the page to exceed 1920px

```javascript
    <div className="content wrapper index">

	// In ../styles/global.scss
	margin-top: calc(var(--header-height) * 1.5);
	max-width: 1920px;
	margin: auto;
```

### `PolicyLayout` 

Wraps the contents of the privacy policy to allow applying extra logic and styling.

#### `div dangerouslySetInnerHTML`

Forcibly sets its contents to the data obtained from the earlier graphql fetch. This allows the privacy policy subpage to display the contents of the markdown file from earlier.

```javascript
	<PolicyLayout>
        <div
            dangerouslySetInnerHTML={{
              __html: data.allMarkdownRemark.edges[0].node.html,
            }}
          />
    </PolicyLayout>
```

---

## Note

Using graphql, the privacy policy subpage `PrivacyPolicy({ data }` acts as a markdown to HTML converter, making it convenient to write and format the content. However, if the site where to pass through a third party, this will make the site vulnerable so use sparingly or opt for an alternative. The styling can be adjusted at the `PrivacyLayout` component's scss file.



