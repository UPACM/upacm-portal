# Assets

- **Image Directory:** static\sig\
- **Image Naming Convention:** special_interest_group.webp (example: cybersecurity.webp)

The images don't necessarily need to follow this file name formatting but this makes it independent of context (an arbitrary decision so feel free to adapt other file nameing conventions).

---

## JSON Reference
Holds the texts and directories of the assets to be used in the SIG (hereon referred to as SIG) page.

- **Source:** src\data\sig.json

### `opening.header` `(String)`
This is the text used as the title of the SIG page, displayed below the page header. This can be left blank or removed.

### `council.headerInfo` `(String)`
This is the text used for the paragraph below the SIG page title. This can be left blank or removed.

### `groups` `(Array of Objects)`
Each object here holds the information for a respective SIG to make data passing through components convenient.
- `groups.name` `(String)`
 	- The full title of the respective SIG. Can be removed or left empty.
- `groups.head` `(String)`
    - The name/s of the respective SIG's heads. Can be removed or left empty.  
- `groups.description` `(Array of Strings)`
    -  Each element is rendered as a paragraphed. Provides an option for cutting long texts but can be just one element (that can be empty). Removing it will cause a runtime exception/error.
- `groups.portraitSrc` `(String)`
    - Holds the relative directory of the SIG's representative (stock) image.   

---

## Notes

The SIG page will render the SIG's by the order of their appearance in the `groups` Array. With the assumption of the organization's SIG being only four, the first object is rendered in the upper left, the second in the upper right, the third in the lower left, and the last in the lower right of the page below the opening message.

On screen sizes lower than 1000px, each SIG will take a full row for better readability. If another SIG were to be made, adapting the structure of the committee page's card would be the easiest choice.