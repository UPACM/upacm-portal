# `Achievements`
This component provides an introduction to the achievements and awards of the organization and displays a scrollable list of its achievements (inclusive of the date of awarding and some extra description such as category).

**Source:** src\components\about\achievements.js

---

## Dependencies
`React` from "react"

### Local
- `AchievementItem` from "./subcomponents/history-timestamp.js"
	- Component for displaying an achievement, along with its representative award icon (varies by scope), extra concise description, and date of awarding. 
- `AboutData` from "../../data/about.json"
    - Holds all the textual data needed by the achievements section of the *About Us* page (actually, all the data of the page in general). This includes the `achievementsIntro`, and `achievements` (holds all the data of the achievements by the organization).
- `./achievements.scss`
	- Allows custom styling and layout to the components.

---

## Composition

### Top Level Wrapper
For extra selection during the styling and layout in the scss file.

```javascript
<div className="wrapper" id="achievements-section">
	...
```

Redundant wrappers are present (possibly put here from an earlier system of css selection).

```javascript
    ...
    <div className="wrapper">
		...
```

### Achievements Opening
Displays a header text and a paragraph to introduce the achievements section of the *About Us* page (paragraps loaded from elements in `AboutData.achievementsIntro`). Another wrapper is utilized for every component except the header.

```javascript
		...
    	<h1 id="achievementHeader">Achievements</h1>
        <div id="achievements-content">
        	<p id="achievements-intro">{AboutData.achievementsIntro}</p>
		...
```

### AchievemntItem Generator
Inside the `#achievements-list` wrapper, each Object from `AboutData.achievements` array are used to create an `AchievementItem` component. These objects hold the `name`, `event` or extra description of the event (commonly just the category), `date` of the awarding, and `scope` of the award. All of these are `String`'s and the scope determines the icon to display for the award.

```javascript
			...
			<div id="achievements-list">
				{AboutData.achievements.map(data => {
					var d = new Date(data.date)
					return (
						<AchievementItem
						key={data.name + data.event + data.date}
						date={d.getFullYear()}
						name={data.name}
						event={data.event}
						scope={data.scope}
						/>
					)
				})}
			...
```

---

## Styling

**Source:** src\components\about\achievements.scss

Loads the default styling and layout for the common components.
```css
@import "../../styles/global.scss";
...
```

### Top Level Wrapper

Sets the background color of the section and its layout (padding and allowable width).

`div#achievements-section`
```css
...
div#achievements-section {
	background: white;

	padding: 15vh 0;
	max-width: 100%;
	...
```

### Achievement Header Settings
Centers the header of the section and sets its style and behavior. With "Achievements" being a relatively long word in the site, it will break when the screen becomes extremely small (assumed to not happen).

`div#achievements-section` `h`
```css
	...
	h1 {
		color: black;

		padding-bottom: 3vh;

		text-align: center;
		overflow-wrap: break-word;
	}
	...
```

### Additional Wrapper for Layout
Sets the allowable width for the components and centers the components by default.

`div#achievements-section` `div#achievements-content`
```css
	...
	div#achievements-content {
		width: 80%;
		margin: auto;
	...
```

### Achievements Opening Setting
Centers the opening paragraph of the section and limits the allowable width for spacing.

`div#achievements-section` `div#achievements-content` `p#achievements-intro`
```css
		...
		p#achievements-intro {
			max-width: 80%;
			color: black;
			padding-bottom: 5%;

			display: block;
			margin: auto;
			text-align: center;
		}
		...
```

### Achievements Scrollbar Settings
Sets the width, shape and color of the scrollbar. This was originally not visible for stylistic purposes but this might not make the "scrollable" property of the list obvious to users.

```css
		...
		div#achievements-list::-webkit-scrollbar {
			width: 5px;
		}

		div#achievements-list::-webkit-scrollbar-track {
			background: rgba(0, 0, 0, 0);
		}

		div#achievements-list::-webkit-scrollbar-thumb {
			background: var(--acm-dark-blue);
			border-radius: 2.5px;
		}
		...
```

### Achievement List Layout and Transition
Sets the layout of the components with flex and sizing, makes the component scrollable, and adds a transition from the background color of the section to the scrollable list of achievements.

`div#achievements-section` `div#achievements-content` `div#achievements-list`
```css
		...
		div#achievements-list {
			width: 60%;
			height: 50vh;
			margin: auto;
			display: flex;
			flex-direction: column;
			align-items: center;
			overflow-y: scroll;
			mask: linear-gradient(
				180deg,
				rgba(0, 0, 0, 1) 0%,
				rgba(0, 0, 0, 0.843312324929972) 70%,
				rgba(0, 0, 0, 0) 100%
			);
			padding: 0 1.5vw;
			...
```

### AchievementItem Settings
Sets the layout of the components (relative center, alignment, sizing) and adds some styling. The layout of the components are: img, then its right are the award name, description and date of awarding (stacked).

`div#achievements-section` `div#achievements-content` `div#achievements-list`
```css
		...
			div.achievement-item {
				display: flex;
				align-items: center;
				padding: 3vh 0;
				width: 100%;
				color: black;
				img.achievement-image {
					align-self: flex-start;
					width: 25%;
					height: auto;
				}

				div.achievement-text {
					padding-left: 3%;
					width: 64%;

					b {
						color: var(--acm-blue);
						font-style: italic;
					}
				}
			}
		...
```

### Small Screen Adjustment
Scale down the font size of the header to avoid word breaking and overflow on smaller screens.

```css
...
@media (max-width: 475px) {
	h1#achievementHeader {
		font-size: 2.4em;
	}
}
...
```

### Medium to Smaller Screen Adjustments
Sets the contents of `AchievementItem` to stack instead of being side by side for better readability. Also maximizes the width of the screen for the paragraph.

```css
...
@media (max-width: 768px) {
	div#achievements-section {
		div#achievements-content {
			flex-direction: column;
			align-items: center;

			p#achievements-intro {
				width: 100%;
				padding-bottom: 3vh;
			}

			div#achievements-list {
				width: 90%;

				div.achievement-item {
					div.achievement-text {
						h6.name {
							font-size: 1.2em;
						}
					}
				}
			}
		}
	}
}
```