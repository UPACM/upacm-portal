# `ContactSocial`

The `ContactSocial` loads `SocialWidget` components to be displayed for the reference of the user.

- **Source:** src\components\contact\contact-social.js

---

## Dependencies
`React` from "react"

### Library
 - `Fade` from "react-reveal/Fade"
	- Library component that allows a fade-in effect to its children upon render.

### Local
- `SocialWidget` from "../../components/subcomponents/social-widget.js"
	- A component that displays the icon of a social media platform utilized by the organization. Redirects to the organization's social media page for the component's specific platform when changed. 
- `../contact-social.scss`
    - Allows custom styling for the layout and styling of the components.

---

## Composition

### 'Fade In from Bottom' Wrapper
This applies a 550 millisecond long fade from bottom animation on the components after 100 milliseconds from render time. The `ssrFadeout` enables server side rendering.

```javascript
<Fade ssrFadeout bottom duration={550} delay={100}>
	...
```

### Top Level Wrapper
The true functional wrapper of the component that allows extra targeting in the scss file.

```javascript
	...
	<div id="contact-social">
		...
```

### Social Media 
Manual generation of [`SocialWidget`](../commons/commons_social_widget.md) components for each social media platform the organization utilizes.

```javascript
	...
		<SocialWidget social="twitter" href="https://twitter.com/upacm" />
        <SocialWidget social="facebook" href="https://twitter.com/upacm" />
        <SocialWidget social="linkedin" href="https://www.linkedin.com/company/upacm/"/>
        <SocialWidget social="youtube" href="https://www.youtube.com/user/upacmYT"/>
	...
```

---

## Styling

- **Source:** src\components\contact\contact-social.scss

### SocialWidget Layout
From the second top level wrapper, the contents are in flex display and wraps for smaller screens. They are also centered and padded.

```css
#contact-social {
	display: flex;
	flex-wrap: wrap;
	max-width: 100vw;

	justify-content: center;

	padding-top: 3%;
	...
```

### SocialWidget styling
The [`SocialWidget`](../commons/commons_social_widget.md) component is colored and given a size to assume for the layout.

```css
	...
	.social-widget {
		background-color: #2b2b2b;
		width: 5em;
		height: 5em;
		margin: 25px 35px;
	}
}
```


---

## Notes
The social media links can be generated better by iterating through an Object of social media URL's.

