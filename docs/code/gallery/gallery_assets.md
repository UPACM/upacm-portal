# Assets

- **Image Directory:** static\gallery-images
- **Image Naming Convention:** gallery_eventname{number}.webp

The images don't necessarily need to follow this file name formatting but this provides context on what the image is about.

---

## JSON Reference
Holds the texts and directories of the assets to be used in the partners page. 

 - **Source:** src\data\gallery.json

### `header` `(String)`
This is the text used as the title of the partners page. This can be left blank or removed.

### `headerInfo` `(String)`
This is the text used for the paragraph below the committe page title. This can be left blank or removed.

### `events` `(Object)`
Each key is is generated as a section in the committee page. The name of the key is used as the section's title (so format accordingly). 

- `events[key]` `(Array of Strings)`
    - Each element `(String)` holds the relative directory of an event image for the given gallery category (key). Note that due to a library dependency, an Array should be at least more than one element (but it can, oddly, be empty). 

---

## Notes
The gallery section will be displayed by its order of appearance in this file (up to down here, up to down in the gallery page). The same goes for the images per section (up to down here, left to right in the corresponding section of the gallery page). Loading this many images on page render isn't ideal (and appending new images are inconvenient). Hopefully this is automated in the future.
