# `Landing({ videoSrcObj, introText, introSubText })`
The `Landing` displays the landing video and message of the index page. It's described as "landing" because the user "lands" on this section immediately after opening the site in their browser. 

- **Source:** src\components\index\landing.js

---

## Dependencies
`React` from "react"

### Local
- `./landing.scss`
    - Allows custom styling for setting the layout and styling of its components.

---

## Properties
- `videoSrcObj` `(String)`
    - Holds the relative directory of the landing video to be used in this section.
- `introText` `(String)`
    - Becomes the content of the hero header or title of the landing section.
- `introSubText` `(String)`
    - The paragraph displayed below the hero header.

---

## Composition

### Landing video
Sets the `looping`, `muted`, `autoPlay` landing video, sourced from the `videoSrcObj` property. Thhe text under source is only shown when the video cannot load because it's behind the video. The entire video is inside wrappers that limits its width to \[300, 1920\] px (triggered from global scss effects).

```javascript
...
<div className="landing incompressible" id="landing-video">
	<video preload="auto" loop={true} autoPlay={true} muted={true}>
        <source type="video/mp4" src={videoSrcObj} />
        Your browser does not support the window tag.
    </video>
</div>
...
```

### Landing Text
This displays the hero text and landing message of the site (hero text/header is the custom header  defined as above `h1`). It is also wrapped to limit the width of the component to \[300, 1920\] px (triggered from global scss effects).

```javascript
<div className="landing incompressible" id="landing-overlay">
    <div className="wrapper">
        <div id="landing-text">
        	<h1 className="hero" id="intro-text">
            	{introText}
            </h1>
            <p id="intro-sub-text">{introSubText}</p>
        </div>
	</div>
</div>
    
```

### Spacer Div
Adds a space to the end of the landing section to account for any components after it in the Index page.

```javascript
<div id="landing-spacer"></div>
```

---

## Styling

- **Source:** src\components\index\landing.scss

Loads the Google font Roboto for the text later.

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
...
```

Loads the default layout and styling for common components such as `p`.

```css
...
@import "../../styles/global.scss";
...
```


### Top Level Wrapper
Fixes the landing section to the top of the landing page.

```css
...
div.landing {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}
...
```

### Landing Video Settings
Puts the landing video behind every other element and maximizes the dimensions of the video. Sets the `object-fit` to `cover` so no background color can be shown (takes up the whole screen).

```css
...
div#landing-video {
	z-index: -3;

	video {
		width: 100vw;
		max-height: 100vh;
		object-fit: cover;
		max-width: 100vw;
	}
}
...
```

### Overlay and Text Wrapper
Adds a blue overlay over the landing video and center-flex's the text components.

```css
...
div#landing-overlay {
	padding-top: $header-height-top;
	display: flex;
	align-items: center;
	z-index: -2;
	color: white;
	background: var(--landing-overlay-bg);
	...
```

### Flex Wrapper
Sets its children's layouw into flex by default.

```css
	...
	div.wrapper {
		display: flex;
		justify-content: flex-end;
	}
	...
```

### Landing text Settings
Shifts the contents to the right, sets a small width for spacing, and adds paddings with respect to the other components.

```css
	...
	div#landing-text {
		width: 60%;
		min-width: 600px;
		padding-left: 5%;
		padding-right: max(5%, 20px);
		margin-top: var(--header-height);
		font-size: min(2em, 20px);
		padding-bottom: 8%;
	}
	div#landing-text > * {
		text-align: right;
	}
}
...
```

### Landing Offset
Sets the space occupied by the landing section to the full screen height.

```css
...
div#landing-spacer {
	margin-bottom: 100vh;
}
...
```

### Medium to Small Screen Adjustment
Sets the layout of the landing video to flex and centers it for better positioning.
```css
...
@media (max-width: 1280px) {
	div#landing-video {
		display: flex;
		justify-content: center;
	}
}
...
```

### Small Screen Adjustment
Adjusts the font sizing of the text's and the width of the overlay for better readability.

```css
...
@media (max-width: 768px) {
	div#landing-overlay div#landing-text {
		min-width: 90%;
		font-size: calc(0.4em + 1.2vw);

		p#intro-sub-text {
			font-size: 1.45em;
		}
	}
}
```

---

## Notes
The properties be changed into just one Object to be unpacked so it can be similar to other components in the code base.
