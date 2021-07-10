# Assets

- **Image Directory:** static\partner-images
- **Image Naming Convention:** company_name.webp

The images don't necessarily need to follow this file name formatting but this makes it independent of context (an arbitrary decision so feel free to adapt other file nameing conventions).

---

## JSON Reference
Holds the texts and directories of the assets to be used in the partners page. 

- **Source:** src\data\partners.json

### `header` `(String)`
This is the text used as the title of the partners page. This can be left blank or removed.

### `headerInfo` `(String)`
This is the text used for the paragraph below the partners page title. This can be left blank or removed.

### `partnerList` `(Array of Objects)`
Each Object in this array holds the information of every available partner to display in the partners page.
- `imageSource` `(String)`
    - The directory of the partner's visual representation relative to the project root. Currently follows the file name format: **/committee-head-portraits/company_name.webp**.
- `website` `(String)`
    - The URL of the partner's site

---

## Notes
The partner page will render the partners by their index in this array (top to bottom here, left to right [with wrap] on the site). The current configuration makes a single row have two partners in display side by side.

The object in the `partnerList` array actually has the `header` and `subheader` key but it is currently unused and unshown.