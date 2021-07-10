# Contact Page

## Description
The Contacts page provides ways to contact the organization. This includes a Google Map of the organization's headquarters, email (with form), and social media links.

- **Source:** src\pages\contact.js

---

## Dependencies
`React` from "react"
   
### Common
- `Header` from "../components/header.js"
	- Reusable component for providing links to the other major pages of the site
- `SiteMeta` from "../components/site-meta.js"
	- Reusable component for providing meta data on the corresponding component.
- `Opening` from "../components/opening.js"
    - Reusable component for displaying a header and header message/text and also acts as a wrapper

### Local
- `CommData` from "../data/contact.json"
    - JSON file that holds all the assets of the page 
- `ContactSocial` from "../components/contact/contact-social.js"
    - Displays a set of buttons with icons that represent the social media utilized by the organization. Each button redirects to the organization's page/space for that platform.
- `ContactFooter` from "../components/contact/contact-footer.js"
    - A copy of the footer that doesn't have the contact links and references (since this page is solely for that already).
- `ContactMap` from "../components/contact/contact-map.js"
    - A wrapped component for displaying a Google Map of the organization's headqaurters.
- `ContactForm` from "../components/contact/contact-form.js"
    - A component that displays the contact email of the site and a functional form for accepting emails within the page.

---

## Composition

### Site Metadata
Provides metadata about the page, informing that it is the Contact page. Property `isIndex` is *false* since index has a different behavior for SiteMeta.

```javascript
<SiteMeta pageName="Contact us" sitePage="/contact/" isIndex={false} />
	...
```

### Header
Set to notify the header that the Contact Page is currently being displayed. Property `isIndex` is *false* so the header stays in a "scrolled" state (header color visible).

```javascript
	...
	<Header isIndex={false} active="Contact" />
	...
```

### Contact Opening Message
Displays a welcoming message for the Contact page. Header (title) and opening message loaded from `ContactData.opening`.

```javascript
	<Opening
        header={ContactData.opening.header}
        headerInfo={ContactData.opening.headerInfo}
    />
```

### Contact Google Maps
Displays a google map embed of the organization's headquarters. Header (title) and opening message loaded from `ContactData.header`.

```javascript
    <Opening
	    header={ContactData.map.header}
	    headerInfo={ContactData.map.headerInfo}
	>
        <ContactMap />
      </Opening>
```

### Contact Email and Form
Displays the email for contacting the organization and a form where users can send their emails within the site. Header (title) and opening message loaded from `ContactData.email`.

```javascript
    ...
	<Opening
        header={ContactData.email.header}
        headerInfo={ContactData.email.headerInfo}
      >
    	<ContactForm />
    </Opening>
	...
```

### Contact Social Media Links
Displays the social media links/redirects of the organization through circular buttons with icons. Each icon corresponds to the logo of the respective social media platform. Also has a transitory opening, loaded from `ContactData.social`.

```javascript
    ...
	<Opening
        header={ContactData.social.header}
        headerInfo={ContactData.social.headerInfo}
    >
    	<ContactSocial />
    </Opening>
	...
```

### Contact Footer
A copy of the [default footer](../commons/commons_footer.md) but without the extra references. Is basically just the copyright notice.

```javascript
	...
    <ContactFooter />
...
```

---

## Notes
The layout simply follows from the other pages of the site but it's very much open for change. This page is supposed to be just for that: layout. The styling and processes of each section should be defined in them.
