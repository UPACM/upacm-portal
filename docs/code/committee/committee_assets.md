# Assets

- **Image Directory:** static\committee-head-portraits
- **Image Naming Convention:** term_position.webp (example. 1920_education.webp)

The portraits don't necessarily need to follow this file name formatting. This is only for consistency and convenience.

---

## JSON Reference
Holds the texts and directories of the assets to be used in the committee page. All the data is encompassed by an outermost `Object`: `council`.

 - **Source:** src\data\committees.json

### `council.header` `(String)`
This is the text used as the title of the committee page, displayed below the header. This can be left blank or removed.

### `council.headerInfo` `(String)`
This is the text used for the paragraph below the committee page title. This can be left blank or removed.

### `council.batch` `(Object)`
Each key is formatted by the academic year of the corresponding batch of committee heads (example: `"20xx - 20xx"`) and holds an array of objects representing them.

- `council.batch[key].name` `(String)`
    - Full name of the corresponding committee head. Can be empty or removed.
- `council.batch[key]".position` `(Array of String)`
    - Holds all the relevant titles of the corresponding committee head. Will generally be displayed one line at a time. Can be empty but must not be removed.
- `council.batch[key]".portraitSrc` `(String)`
	- Holds the directory of the committee head's portait relative to the project root. Currently follows the file name format: **/committee-head-portraits/term_position.webp**.

---

## Notes
The committee page will load the latest council relative to the current year. If there is no council for the current year, the committee page will not load. The council years are displayed by order of appearance (top to bottom here, left to right in the page).  The committee heads are also loaded in the same manner. The committee page expects the first object to be the Chairperson and will force it to ocuppy a full width (no other members by its side). 

The committee page can display just one council batch. It'll just remove the buttons since there's just one batch to select. There has to be at least one array of councils with at least two objects (council heads).