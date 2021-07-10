# FAQ's on Site Assets

## Quick Guide on Editing Arrays and Objects

In changing assets, you'll often have to edit the JSON files. Here's a guide on editing, adding, and/or removing an element of an Object or Array, no coding experience required.

### Objects
Objects are *named* containers for data. In this documentation, the name of an object is called `key` or are also referred to as *properties*. 

To define an Object, add an opening and closing curly bracket `{}`. Inside these brackets you can add your keys. The format of a key is: `"keyname"`, a colon ":" and the value of the key (can be a number, text enclosed by quotes, or another object). Also add a comma as well so the Object knows you finished adding the key.

**Key Format:** `"keyname": value,`


#### Creating an Object
```JSON
{ // <--- Start of an Object
	"key1": 1,
	"key2": "text",
	"key3": { // Objects can contain objects
		// Empty Object (no keys/properties)
	},
	"key4": [ // Objects can contain Arrays

	] 
} // <--- End of an Object
```

#### Editing Properties
To remove a key-value pair, simply delete the key, the colon, its value, and the comma after it.

```JSON
{ // <--- Start of an Object
	// Deleted "key1", please delete the space as well so the format's seamless.
	"key2": "text",
	"key3": { 
	},
	"key4": [ 

	] 
} // <--- End of an Object
```

#### Mind the Comma

Note that there seems to be a format going on here. Please follow it for the sake of readability. Also note, the last key *SHOULD NOT HAVE A COMMA since it's the last*. A single key in an Object should not have a comma after it as well since it's technically the last.

```JSON
{
	"1sTm": "text", // <--- will cause an error
}
```
```JSON
{
	"1sTm": 1 		// <--- Forgot the comma. will cause an error
	"2sTm": "yes",	// <--- Last key but has a comma, will also cause an error 
}
```

Objects referenced in the documentation have fixed keys so you can only edit key values, add new Objects, or delete Objects. 

### Arrays
Arrays are simply a list of things, maybe even a list of Objects or even another Array. Unlike objects, these aren't name but are often found inside an Object so it can referenced in the code.

An Array is enclosed by square brackets `[]`. Now inside it are what we'll refer to as elements. Note that an Array can only store one type of data (only just Strings, just number, just Objects, etc.) Each element of the Array is also seperated by commas, bound by the same rules as the Object.

Here's an example of an Array included in an Object. This array holds a list of "String"'s or text. Notice that for every String, we add a comma to create a seperation like in Objects.

#### Creating an Array
```JSON
{ 
	"arbitrary key": // <--- Key to the Array
	[ // <--- Array Start
		"Text 1",
		"Text 2",
		"Last Text" // <-- Notice, no comma
	] // <--- Array End
}
```

#### Editing an Array
The only actions you can do with an Array besides making and removing it, is adding or removing elements.
```JSON
{ 
	"arbitrary key": // <--- Key to the Array
	[ // <--- Array Start
		"Text New 1", 	// Added a new element
		"Text 1",
		// removed "Text 2"
		"Text New 2", 	// Added a new element
	] // <--- Array End
}
```

Arrays don't have a size maximum limit but certain parts of the code prohiit an Array from having less than a specific number of elements. 

### Notes
Arrays and Objects in the code base are designed for purposes that shape their form. This makes them have certain quirks that can cause runtime errors. When in doubt, consult the assets section of the page that utilizes the JSON file you're checking.

For a more comprehensive tutorial on JSON files, watch this [video](https://www.youtube.com/watch?v=GpOO5iKzOmY)

---

## Home Page
For better insight, go to the [Home Assets Guide](../code/index/index_assets.md).

### How do I change the video that plays in the home page?
Got to `src\assets\videos\` and change the video there named `landing-video.mp4`. To avoid breaking references in the site, use the same file name 

### What kind of media can I use for the video?
Currently, the only supported video format for the video in the home page is **.mp4**

### Do the images in the diamond of the site change when I make changes to the Event page?
The diamond images in the event section of the Home page displays the featured events of the Events page. Therefore, the images will only change if you change the image of the featured events for the events page. See the [Events Asset Guide](../code/events/events_assets.md) of the Events Page for more details.

---

## About Page
For better insight, go to the [About Us Assets Guide](../code/about/about_assets.md).

### How do I change the big image seen at the start of the About page?
Go to `static\about-images\` and change the `about_header.webp` image. To avoid breaking references, use the same name.

### How do I change the images relating to the Mission and Vision?
Go to `static\about-images\` and change the either thhe `about_mission.webp` or `about_vision.webp` image. To avoid breaking references, use the same name.

### How do I add or update an entry in the timeline under History?
Go to `src\data\about.json` and find the `history` key. This is the list of entries in the History timeline which you can edit accordingly.   

The properties of an Object in this array is `date` (Holds the year of the event), and `event` (a summary of the event's description).

### How do I change the image of particular Achievements?
On the current implementation, the image of an achievement depends solely on its scope. So the only way to change an achievement's image is to change its `scope` property (only valid values are "international", "national", "local"). In the extreme case, you can change the images used per scope by changing the images in the `src\assets\images\achievement\` folder.

---

## Committees Page
For better insight, go to the [Committee Assets Guide](../code/committee/committee_assets.md).

### How do I add new commitee heads?
Go to the `src\data\committees.json` file, go to `committee`, then to `batches`, and then find the key of the academic year where the executive head belongs to (format: `20xx-20xx`). This key holds an array where you can add the new executives by adding new Objects.

The properties of these Objects are `name` (name of the head), `position` (an array of String's, listing their positions/titles), and `portraitSrc` (relative directory of the head's portrait image file). Note that committee images are commonly in the `static\committee-head-portraits` directory.

### How do I add new tabs in the Commitee Page?
Go to the  `src\data\committees.json` file. Find the `batches` key inside the `committee` key. In this Object, simply add a new key corresponding to the new tab of executive heads (key name should be the academic year of the council's term). This key should contain Array for holding Objects that represent the respective committee heads.

### How do I update the pictures and info of the committee heads?
You can change the info of a certain executive head by going to the `src\data\committees.json` file. Inside the `committee` key is the `batches` key. Find the academic year of the executive head in this Object. From there, simply find the executive head's representative Object through their name. From there, just apply the changes accordingly.

For changing the picture of an executive head, find the file directed by their `portraitSrc` property. Replace it with a new portrait (it should have the same name as the original).

---


## Special Interest Group Page
For better insight, go to the [SIG Assets Guide](../code/sig/sig_assets.md).

### How do I change the backround images of the panels?
Go to the `static\sig` directory and replace the corresponding background image of the sig panel you want to change. The file name should be the same to avoid breaking references. The file names should make it clear which image is used for a certain SIG' panel.

### How do I change the colors of the panels?
Go to the `src\components\sig\subcomponents\sig-card.scss` file. The first components you should see are ".sig-card:nth-child" components. Knowing that the upper left is the first child, the upper right is the second child, the lower left is third child, and that the lower right is the fourth child, set the backgroound color accordingly.

```css
	{
		...
		background-color: #somehexcolor; /* (example: #92a8d1) */
	}
```

### How do I change the text when you hover over the panels?
Go to the `src\data\sig.json` file and find `groups` array. This should hold Objects, each representing a Special Interest group. Find the SIG you want to change the description for and edit its `description` property. This is the text that shows when the user hovers over a SIG panel.

---

## Events Page
For better insight, go to the [Events Assets Guide](../code/events/events_assets.md).

### How do I add/change images under each section?
Each key in the `src\data\events.json` file is a event category of the Events page. 

If the event is featured, go to the `featured` property of the corresponding category and change its `imageSource` with a new relative directory. To change the entire featured event, refer to the next question.

For an unfeatured event, go to the `unfeatured` property of the corresponding category. This holds an array of unfeatured event objects. To change an image, find the object that has the right event `header` and change the `imageSource` property.

Adding an image means adding a new Object. Simply add a new Object in the `unfeatured` array mentioned earlier and fill in the `header` (name of the event), `subheader` (extra, concise description about the event), `imageSource` (relative directory of the event's representative image), and `info` properties accordingly (full, long description of the event).

### How do I change the featured event under each section?
Each key in the `src\data\events.json` file is a event category of the Events page. Each category has a `featured` property object, containing the information about the category's featured event. 

To change the contents, simply edit the properties accordingly The `header` is displayed as the title of the event, `subheader` is displayed under the header, `imageSource` loads the representative image of the featured event, and `info` defines the text displayed under the subheader.

To change a featured event by promoting a normal event into a featured one, copy the properties of the unfeatured event (they have the same properties, exactly for this purpose) and replace the featured event's properties. Finally, removed the original unfeatured event object (so you won't have duplicates) or replace the originally unfeatured event's properties with the original featured event's properties (a swap, essentially demoting an event).

### How do I change the paragraph text of the featured event under each section?
Each key in the `src\data\events.json` file is a event category of the Events page. Each category has a `featured` property object, containing the information about the category's featured event. Find the corresponding event section, and look for its `featured` property. This contains an object. Edit the `info` property as it is the text of the section's featured event.

---

## Gallery Page
For better insight, go to the [gallery Assets Guide](../code/gallery/gallery_assets.md).


### How do I add new sections to the gallery?
Go to the `src\data\gallery.json` file and find the `events` Object. Each key in this Object is a section of the gallery. Simply add a new key (this should be formatted as it will be displayed as the section's title as is) that holds an array. This array will hold a list of String's, pertaining to the relative directories of the images to be shown in this section (Note, there should at least be two elements in this array).

Referenced images are usually in the `static\gallery-images` directory.

### How do I change the images of a section in the gallery?

Go to the `src\data\gallery.json` file and find the `events` Object. Each key in this Object is a section of the gallery. These keys hold an array that lists the relative directories of the images to be displayed for that section. You can remove an image by simply removing its String. 

To change an image, add the new image in the `static\gallery-images` directory and either change an existing relative directory or add a new one to a gallery section.

---

## Privacy Policy

### How can I change the contents of the Privacy Policy?
All of the contents in the privacy policy is extracted from the `src\markdown\privacy-policy.md` file. Editing this requires a knowledge on markdown (and HTML to know the result of the contents when converted).

---

## Partners
For better insight, go to the [Assets Guide](../code/partners/partners_assets.md).

### How do I change the images and URL in the Partners page?
Got to the `src\data\partners.json` file and find the `partnerList` key. In this key is an array of Objects, each holding a partner's `imageSource` (relative directory to the partner's logo/visual representation) and `website` (url of the partner). These are the images shown in the partners page. Add, update, or remove Objects accordingly.

For adding a new image to use in this json, add the image/s in the `static\partner-images` directory.