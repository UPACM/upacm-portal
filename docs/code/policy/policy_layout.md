# `PolicyLayout({ children })` 
Wraps the true contents of the privacy policy subpage to allow extra logic (not utilized yet) or styling.

- **Source:** src/components/privacy-policy/privacy-policy.js

---

## Dependencies
`React` from "react"

## Local
- `./policy-layout.scss`
    - Custom styling for the different markdown header types and the subpage in general.

---

## Property

`children`
Allows the component to become a wrapper by encompassing its children. No example will be given as the contents are not supposed to be read nor edited directly.

---

## Composition

### Top Level Wrapper
Wraps the contents of the components for the aformentioned capability to add logic and styling.

```javascript
<div id="policy-layout">
	...
```
### Page Title
Adds a title to the privacy policy page.

```javascript
	...
    <h1 id="title">Privacy Policy</h1>
		...
```

Finally, the children of this component is injected.
```javascript
	...
    	{children}
	</h1>
	...
```

---

## Styling

- **Source:** src/components/privacy-policy/privacy-policy.scss

### Top Level Wrapper

Sets the background of the privacy policy subpage and adds some padding for its contents so it doesn't stick to the edges.

`div#policy-layout`
```css
div#policy-layout {
	background: white;
	padding: max(5%, 45px);
	padding-top: 40px;
	margin: auto;
...
```

### Title Header Settings
Styling for the privacy policy title text.

`div#policy-layout` `h1#title`
```css
...
	h1#title {
		font-size: 3.5em;
		text-align: center;
		padding-bottom: max(3%, 25px);
		padding-top: 5%;
	}
...
```

### Level 1 Header Settings
Styling for the first-level headers in the mardown file (#).

`div#policy-layout` `h1`
```css
...
	h1 {
		padding-top: 20px;
		padding-bottom: 10px;
		font-size: 2.5em;
	}
...
```

### Level 2 Header Settings
Styling for the second-level headers in the mardown file (##).

`div#policy-layout` `h2`
```css
...
	h2 {
		padding-top: 14px;
		font-size: 2em;
	}
...
```

### Level 3 Header Settings
Styling for the third-level headers in the mardown file (###).

`div#policy-layout` `h3`
```css
...
	h3 {
		padding-top: 14px;
		font-size: 1.5em;
	}
...
```

### Non Header Default Settings
Common styling for the normal text, links, and lists.

`div#policy-layout` `p`, `li`, `a`
```css
...
	p, li, a {
		margin: 18px 0;
		font-size: 1em;
	}
...
```
### Link Setttings
Removes the underline default from links.

`div#policy-layout` `a`
```css
...
	a {
		text-decoration: underline;
	}
...
```

### List Item Settings
Adds some indention to list items.

`div#policy-layout` `li`
```css
...
	li {
		margin-left: min(10%, 45px);
	}
}
...
```

### Small Screen Adjustments
Applies margina adjustments to the respective elements on smaller screens.

```css
...
@media (max-width: 768px) {
	div#mechanics-layout {
		font-size: 1em;

		h1#page-title {
			margin: 0;
			font-size: 2.5em;
			text-align: left;
			padding: 3%;
			padding-left: 0;
			margin-bottom: 4%;
		}

		h1 {
			margin: 4% 0;
		}

		p {
			margin: 6% 0;
		}

		li {
			margin: 2% 0;
			margin-left: 5%;
		}
	}
}
```

---

## Note

While this is technically independent like the other react functional components in the code base, the behavior and styling of this component only makes sense if viewed alongside the main `PrivacyPolicy`, especially for its reference to the markdown file from where the data of the privacy policy page is obtained. 
