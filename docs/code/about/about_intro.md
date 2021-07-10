# `AboutIntro`
This component provides the layout of the initial elements of the About Us page. This includes the landing image, organization logo, and contents from the markdown asset of the About Us page (opening message and introductory video).

- **Source:** src\components\about\about-intro.js

---

## Dependencies

- import `React` from "react"
- import `{ useStaticQuery, graphql }` from "gatsby"
    - Allows importing a file within the src folder to be processed into JSX.

### Local
- `siteLogo` from "../../assets/images/logo.png" 
    - Holds the organization's small logo, to be displayed at the top of the about intro section.
- `./about-intro.scss`
    - Allows custom styling and layout for the children of this component.

---

## Property / Variable

### `data`
Fetches the contents of `../markdown/about-intro.md` to be rendered as children or content of the about intro section of the About Us Page. 

```javascript
const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/about-intro.md/" } }
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

---

## Composition

### Top Level Wrapper
For extra selection and layout options in the scss file.

```javascript
<div id="about-intro-section">
	...
```

### Landing Image
Sets the landing image of the introduction section (and the About Us page in general).

```javascript
	...
    <img id="bg-image" src="/about-images/about_header.webp" alt="about" />
		...
```

### Max Width Setting from Wrapper
Wrapper for setting its children's max width to 1920px.

```javascript
		...
    	<div className="wrapper">
			...
```

### Fade In Color Transition
Adds a fade-in color transition from the landing image (transparent) to the background color of the about intro section.

```javascript
			...
    		<div id="intro-fade-in"></div>
				...
```

### UP ACM Logo
Adds the organization's logo just below the landing image to better introduce the definitive visual representation of the organization.

```javascript
				...
    			<img src={siteLogo} alt="logo" id="logo" />		
					...
```

### Markdown Content to JSX

Adds the header of the About Us page and forcibly sets the contents of the markdown filed loaded from `data` inside the `#intro-body` div.

```javascript
					...
					<div id="intro">
						<h1>About Us</h1>
						<div
							id="intro-body"
								dangerouslySetInnerHTML={{
								__html: data.allMarkdownRemark.edges[0].node.html />
					</div>
					...
					
```

---

## Styling

- **Source:** src\components\about\about-intro.scss

Loads the Montserrat font from Google 
```css
	@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
```

Loads the default styling and layout for components.
```css
	@import "../../styles/global.scss";
```

### Offset for Opening Background
Adds a big space above the introduction section to display the opening background image. Also sets the default color for the header text.

`div#about-intro-section`
```css
...
div#about-intro-section
{
	margin-top: 80vh;
	color: white;
	...
```

### Opening background

Fixes the position of the background image in the *About Us* page intro section.

`div#about-intro-section` `img#bg-image`
```css
...
	img#bg-image {
		/* Ignore header block sizing */
		position: fixed;
		top: -8%;
		left: 0;

		/* Takes all the available space but ensures the header is in front. */
		z-index: -2;
		height: 100%;
		width: 100%;

		object-fit: cover;
		object-position: center center;

		/* In case the image couldn't load */
		background: var(--img-filler-color);
		mask-image: linear-gradient(
			0deg, rgba(0, 0, 0, 0) 0%, 
			rgba(0, 0, 0, 1) 30%, 
			rgba(0, 0, 0, 1) 100%);
	}
...
```

### Additional Top level Wrapper

Sets the layout of the innermost children to flex-column. Also maximizes the width of the screen and sets the color.

`div#about-intro-section` `div.wrapper`
```css
...
	div.wrapper {	
		display: flex;
		flex-direction: column;

		max-width: 100%;

		background: var(--acm-blue);
	}
...
```

### UP ACM Logo
Sets the sizing and position of the UP ACM logo, placed just above the *About Us* Page title.

`div#about-intro-section` `div.wrapper` `#logo`
```css
	...
		#logo {	
			width: 25%;
			transform: translateY(-50%);
			margin: auto;
			object-fit: contain;
		}
	...
```

### Transition Background Image to Background Color
Sets the color transition of transparent (to show the background image) to the color of the about intro background.

`div#about-intro-section` `div.wrapper` `div#intro-fade-in`
```css
	...
		div#intro-fade-in {	
			height: 25vh;
			margin-top: -25vh;
			background: linear-gradient(
				0deg, rgba(1, 130, 172, 1) 0%, 
				rgba(255, 255, 255, 0) 100%);
		}
	...
```

### Text Components
Default centering to the opening text components.

`div#about-intro-section` `div.wrapper` `div#intro`
```css
	...
		div#intro {
			text-align: center;
			margin: auto;
	...
```

Sets the layout and spacing of the opening paragraph.

`div#about-intro-section` `div.wrapper` `div#intro` `p`
```css
		...
			p {
				margin: 2vh auto;
				padding: 3vh 0;
				width: 60%;
			}
		...
```

Sets the dimensions and spacing of the introductory video. The size isn't maximized due to a weird layout bug in safari.

`div#about-intro-section` `div.wrapper` `div#intro` `iframe`
```css
		...
			iframe {
				width: 50vw;
				max-width: calc(1920px / 2);
				height: 30vw;
				max-height: calc(1920px * 0.3);
				
				margin: 10vh 0;
				border-radius: 1vh;
			}
		...
```


### Large Screen behavior
For screens wider than 1920 px, stops the scaling of the up acm logo by giving fixed dimensions. It also minimizes the scaling of the paragraph relative to the screen height.

```css
...
@media (min-width: 1920px) {
	div#about-intro-section {
		div.wrapper {
			div#acm-logo-container {
				height: 100px;
				div#acm-logo {
					width: 200px;
					height: 200px;
					border-radius: 100px;
				}
			}
			div#intro {
				div#intro-body {
					p {
						margin: 1vh auto;
						padding: 1.5vh 0;
					}
				}
			}
		}
	}
}
```

### Small Screen Behavior
Increases the scaling of the acm logo, wrappers, and widens the paragraph for better layout and readability on smaller screens.

```css
@media (max-width: 768px) {
	div#about-intro-section {
		div.wrapper {
			div#acm-logo-container {
				height: 6vh;

				div#acm-logo {
					width: 12vh;
					height: 12vh;
					border-radius: 6vh;
				}
			}

			div#intro {
				div#intro-body {
					p {
						width: 80%;
					}
				}
			}
		}
	}
}
```

---

## Notes
The component makes a direct reference to the asset it used as its background. This may be a risky move as changing the file's name could cause a runtime error. Also, as the property suggests, `dangerouslySetInnerHTML` is a safety concern so it would be best to find an alternative.

