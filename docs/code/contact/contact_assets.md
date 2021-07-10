# Assets

## JSON Reference
Holds the text contents of the Contacts page.

- **Source:** src\data\contact.json

Each key in the file represents a section of the contacts page. In these objects is the `header`: `(String)` and the `headerInfo` `(String)`. As their name suggest, the header text is used as a title for a section, placed on top, and the header info is just suplementary context about the section (think of it as caption, though things are often self-explanatory).

The current sections and, therefore, keys of this file are the following:

- `opening`
    - Just a transitory section to the contents.
- `map`
    - a google map embed in case the user wants to know the headquarer location.
- `email`
    - references the contact email of the organization and a form for sending an email.
- `social`
    -  links to the social media pages of the organizations through buttons.

---

## Notes
These headers and headerinfo are just textual transitions towards each section of the Contact page. It's not really necessarily. All the text is placed here for easy editing (feel free to edit them, especially typo's if any).
