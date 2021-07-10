# Assets

**Landing Video Source:** /src/assets/videos/landing-video.mp4

This is the only non JSON file asset loaded by the Index. Be careful when changing its file name.

---

## JSON Reference
Holds the title and supporting paragraph for every section of the index. 

- **Source:** src\data\index.json

Each key in the JSON file corresponds to a section of the index. In these keys is an Object that holds the `title` and `text` keys (both containing `String`'s). The `title` contains the title of the section, to be displayed on its top, and the ``text`` contains a paragraph that gives context to the section (displayed below the `title`).

The current keys of the file are the following:
- `landing`
    - Displays the first components of the site on load.
- `siteIntro`
    - Contains the opening statement of the organization's site, just below the landing section.
- `eventsIntro`
    - Introduces the featured events of the organization.
- `socialIntro`
    - Presents the social media platform feeds of the site (that are currently implementable).