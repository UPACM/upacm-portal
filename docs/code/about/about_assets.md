# Assets

- **About Us Image Assets Directory:**  static\about-images\
- **Naming Convention:**  about_sectionofpage.webp (example: about_mission.webp)
- **Achievements Icons Directory:**  src\assets\achievement\

The files don't need to follow a consistent naming convention. However, the *About Us* page references these by name so be careful of references when changing these file's names.

---

## Introduction Markdown
Holds the landing or initial components of the *About Us* page. It will convert into regular JSX components later in the rendering of the page.

- **Source:** src\markdown\about-intro.md

### Metadata and Starter
This is just to inform that the data is for the *About Us* page

```
---
title: "About Us"
---
```

### Opening Messages
Some long opening text to introduce the organization formally.

```
...
The Association for Computing Machinery - UP Diliman ...
...
```

### Introductory Video about UP ACM
Provides a visual-audio introduction of the organization.

```html
...
<iframe 
	src="https://www.youtube-nocookie.com/embed/jvBumpiNbTI" 
	title="YouTube video player" 
	frameborder="0" 
	allow="accelerometer; 
	autoplay; 
	clipboard-write; 
	encrypted-media; 
	gyroscope; 
	picture-in-picture" 
	allowfullscreen>
</iframe>
```

You can edit or add other contents by simply editing this markdown file and using the appropriate vanilla markdown syntax.

---

## JSON Reference
Holds the textual contents of the about page (excluding the introduction).

 - **Source:** src\data\about.json

### `header` + `headerInfo`  `(String)`
A marker to notify that this file holds most of the data for the *About Us* Page.

### `mission` `(String)`
Holds the mission of the UP Diliman ACM Student Chapter. Displayed just below the About Us intro section.

### `vision` `(String)`
Holds the mission of the UP Diliman ACM Student Chapter. Displayed just below the About Us mission.

### `coreValues` `(Objects)`
Holds the data needed for the core values section of the About Us page.

#### Keys for `coreValues`
- `header` `(String)`
    - Holds the title or header text displayed on the top of the Core Values section.
- `headerInfo` `(String)`		
    - Holds the message or paragraph below the `header`.
- `list` `(Array of Strings)`
    - Holds the core values of the organization per element of thhe Array.

### `historyIntro` `(Array of String)`
Each member of the arry holds the message to be displayed below the history title of the history section of the About Us page. An array was used to seperate text by paragraph.

### `history` `(Array of Objects)`

#### Keys for `history` Objects

- `date` `(String)`
    - Holds the date of when the event happened (often just the year).
- `event` `(String)`
	- Holds the description and context of the event. Expected to be a long page.

### `achievementsIntro (String)`
Holds the message to be displayed below the achievements title of the achievements section of the About Us page.

### `achievements` `(Array of Objects)`
Holds the date for a respective achievement of the organization. 

#### Keys for `achievement` Objects
- `achievements.name` `(String)`
    - The title of the achievement.
- `achievements.event` `(String)`
    - The category or other concise information about the achievement.
- `achievements.date` `(String)`
    - The date of the event (usually just the year).
- `achievements.scope` `(String)`
    - The level of the achievement (specifically: "international", "national", "local")

### Common Example

```JSON 
{
	"header": "About Data",
	"headerInfo": "Data for the <about> page.",

  	"mission": "Mission, long text ...",
  	"vision": "Vision, long text...",

	"coreValues": {
		"header": "Core Values Title",
		"headerInfo": "Core value description",
		"list": [
			"First Core Value",
		  	"Second Core Value",
		  	...
	  ]
	},

	"historyIntro": [
    	"History paragraph, long text...",
    	"History paragraph, another long text...",
		...
  	],
  	"history": [
		{
			"date": "Year of historical event",
			"event": "Historical event, long text..."
		},
		...
	],
	
	"achievementsIntro": "Achievement paragraph, long text...",
	"achievements": [
		{
			"name": "Achievement Title",
			"event": "Achievement Category or extra description (short)",
			"date": "Year of Achievement",
			"scope": "international/national/local"
		},
		...
	]
}
```

---

## Notes
The about page has a lot of components so it expectedly has a lot of data. This can be modularized if necessary. The components that will most likely change are the achivements and history sections.

