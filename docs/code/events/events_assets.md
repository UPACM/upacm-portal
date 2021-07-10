# Assets

- **Image Directory:** static\event-images
- **Image Naming Convention:** event_name-of-event-\[location\]-year.webp

The images don't necessarily need to follow the given naming convention but this makes its purpose and contexct very clear. The year is highly suggested but the location is only necessary if the same event happened in the same year.

---

## JSON Reference
Holds the texts and directories of the assets to be used in the events page. 

- **Source:** src\data\events.json

The entire JSON consists of keys pertaining to the given category for the organizations events (`Competition`, `CommunityDevelopment`, `Workshops`, `Activities`). To add another category, simply add a new key and fill in the expected properties accordingly. From here, we'll refer to the categories as `key` since the purpose of their properties are similar.

### `key.header` `(String)`
Holds the title of the event category to be displayed on the upper part of its section. Can be removed or empty.

### `key.headerInfo` `(String)`
An opening message, explaining the purpose or general theme and functions of the given event kategory. Can be removed or empty

### `key.featured` `(Object)`
The main, latest, or most important event of the given category at the moment. It takes up a full row and displays its description as well. It is also accessed and displayed in the main page.

### `key.unfeatured` `(Array of Objects)`
This holds objects that represent a regular event. These won't be shown in the main page but is still showcased in the events page (using a slideshow in the current implementation).

The properties of a `key.unfeatured` object and a `key.featured` object are the same to make setting of the featured and unfeatured event easier. 

### Event Object Properties
- `.featured.header` `(String)`
    - Holds the title of the featured event, displayed on its lower center, in front of the event image. Can be empty or removed.
- `.featured.subheader` `(String)`
    - Holds the subtitle to be displayed under the title from above, also in front of the event image. Can be empty or removed.
- `.featured.imageSource` `(String)`
    - Holds the relative directory of the event's showcasing or representative image to be displayed. Shouldn't be empty.
- `.featured.info` `(String)`
    - Holds the details and functions of the featured event, displayed below the subtitle mentioned above. Can be empty (best for unfeatured events to save memory) but shouldn't be removed. This won't be displayed by the unfeatured events.

---

## Notes
This file can be pretty long as the organization has a lot of events. Carefully tread the the file by following the heirarchy, dictated by the indentions (hopefully appending events can be automated in the future). Note that the featured events will be displayed in the index or landing page to form a diamond. A new category added will still be displayed there but it removes the diamond layout.