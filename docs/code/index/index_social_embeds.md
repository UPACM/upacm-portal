# `SocialEmbed`
The `SocialEmbed` displays the available feeds of the organization's social media profiles.

- **Source:** src\components\index\social-embed.js

---

## Dependencies
`React` from "react"

### Library
- `{ Timeline }` from 'react-twitter-widgets'
    - Returns a component, based on the Twitter iframe, that displays the Twitter feed of a profile.

### Local
- `./social-embed.scss`
    - Allows custom styling for setting the layout of the embeds.

---

## Composition

### Top Level Wrapper

Holds all the possible embeds for later selection in the scss file.

```javascript
<div id="social-embed">
	...
```

### Twitter Timeline Embed
Inside the `#twitter` wrapper is the `Timeline` component that loads the upacm profile. Height is manually set to 800px (this is required by the component).

```javascript
	...
	<div id="twitter">
		<Timeline
        	className="twitter-timeline"
        	dataSource={{
          		sourceType: 'profile',
          	screenName: 'upacm'
        	}}
        	options={{
          	height: '800'
        }}
    />
...
```

---

## Styling

- **Source:** src\components\gallery\gallery-cards.js

Initially added for cross-browser scaling effects. It is now unused.

```css
@import "../../styles/animation.scss";
...
```

### Top Level Wrapper
Centers the contents of the component and sets the background color.

`#social-embed`
```css
...
#social-embed {
	background-color: white;

	display: flex;
	align-content: center;
	justify-content: center;
	...
```
### Twitter Embed Settings
Sets the responsive width of the twitter feed, removes the default border of its component `Timeline`, and hides overflow in case of odd layouts from browsers.

`#social-embed` `#twitter`
```css
	...
	#twitter {
		width: 50vw;
		min-width: 300px;

		border: none;
		overflow: hidden;

		padding-top: 5%;
	}
...
```

---

## Notes
The organization has other social media profiles (Faecbook, LinkedIn, Youtube) that could be embedded in the future. For instance, the Facebook profile was originally embedded but was scrapped due to the conservative nature of Facebook's iframes. Note as well that iframes are resource intensive.
