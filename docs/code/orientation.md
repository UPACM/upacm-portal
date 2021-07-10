# Orientation
Welcome to the code base documentation section of the UP Diliman ACM Student Chapter Site.

---

## File Structure
All of this is relative to the root of the project.

### docs/
Holds the source file for the documentation of the site. 

The heirarchy present in this directory defines the heirarchy of the sections in the built documentation site (but actually follows the heirarchy set in mkdocs.yml in root). The naming of the folders and files are fairly straightforward.

> *The `docs/code` folder, in particular, follows the structuring of `src/components`*.

### src/
The codebase of the UP ACM SC web portal.

#### src/components/
Each page or top level component has a folder inside this to store its components and their scss files. 

- Example: *src/components/about/* holds the components of the *About Us* page.
- A subcomponent folder is also present inside *src/components/foldername/* if a component there has subcomponents.
- By design, one shouldn't have a sub-subcomponent folder (that's too much).
- A scss file should be in the same directory as the js file it targets for.
- Finally, folderless components are universal or common components that are used in more than one component (a loose `src/components/subcomponent/` exists for the same reasons as earlier).

> * Maybe the folderless images can be grouped into a common folder for consistency*

#### src/assets/
Holds the assets of the code base that should be accessed immediately.

- **/images/**: Image assets. Commonly in webp format (for faster loading), or png (common format).
- **/videos/**: Video assets. Commonly in mp4 (common format).
    - Assets are seperated by their own folders that's based on the component they're used for
    - Folderless assets are considered common or universal to components of the site

> *May be shifted to the static folder to make the static folder's purpose consistent.*

#### src/data/
Location of the JSON files that hold data for specific pages of the site.

- The form of each JSON file depends on their data and the component that uses them
- Generally, all data that will or might change later on is placed here for convenience (so the editor doesn't have to go through the code base) 
- The file name of the JSON files are based on the components they are used for.
    - Example: `src/data/about.json` holds data used in the *About Us* page.

> *While component demands and data types vary, a consistent formatting can be reached if one preferes consistency here.*

#### src/narkdown/
Location of the markdown files that are converted into sections of components.

- The files are named based on which component will use them
- The files do not hint to their implementation, except (of course) for the content they provide.
    - Example: `src/markdown/about-intro.md` will be used in the introduction section of the *About Us* page.

#### src/pages/
Holds the top level or most abstracted components of the site.

- Each js file here represents a page accessible to the site.
- The file name doesn't matter perse (except for index) but they are still named based on what page they represent

#### src/styles/
Holds the universal scss files that components can import in their own scss files.

- This is to reduce code redundancy and offload some styling 
- Also holds global variables (like color names), functions, and mixins to modulate styling.

> *In hindsight, maybe the name of this folder isn't representative of its purpose.*

### static/
Holds most of the assets to be loaded in the page.

- Most (if not all) assets here are encompassed by a folder, named for their purpose.
- There is no consistent folder naming convention but each file in a folder follows a file naming convention (check each page's assets section in the documentation).

> *The folders can adapt a folder naming convention and universalize a file naming convention. However, it isn't mandatorry.*

---

## Disclaimers
While the information presented in the code base and the documentation reflect the best of the developer's knowldedge, they are not professionals. Thus, information presented should always be cross checked with available data and not be used as main references.

---

## General Advice
Decide on the structure of your system, define its potential, account for edge cases, and remain consistent to it until you find an better alternative where its benefits outweight the cost to implement it.


