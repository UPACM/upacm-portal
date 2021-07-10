# `ContactFooter`

The `ContactFooter` is just the default footer but without the contact links and page references.

- **Source:** src\components\contact\contact-footer.js

---

## Dependencies
`React` from "react"

## Local
 - `../contact-footer.scss`
     - Allows custom styling for the layout and sizing of the component.

---

## Composition

Inside the top level wrapper `#footer-bottom`, is another wrapper to avoid setting the footer to a width smaller than 300px.

Finally, a span component that holds the copyright notice is displayed. The date of copryright is perpetually renewed anyway so the current year is displayed.

```javascript
    <div id="footer-bottom">
      <div className="wrapper">
        <span>
          © {new Date().getFullYear()} Association for Computing Machinery -
          University of the Philippines Diliman Student Chapter, Inc.
        </span>
      </div>
    </div>
```

---

## Styling

- **Source:** src\components\contact\contact-footer.scss

Allows the use of a custom, cross-browser, scaling function.

```css
@import "../../styles/animation.scss";
...
```

### Footer Settings 

Sets the footer color, text color, and padding for the text in it.

```css
...
#footer-bottom {
	background: var(--footer-secondary-color);
	padding: 4vh 0;
	color: white;
}
...
```

### Copyright Text

Centers the content and scales it down.

```css
...
div#footer-bottom div.wrapper {
	justify-content: center;
	text-align: center;
	@include transform-safe(scale(0.8));
}
```

---

## Notes
The footer here is really just the bottom portion of the [original footer](../commons/commons_footer.md) just to display a copyright notice. There's no need to reference contacts in a page dedicated to it already. Maybe the existance of this component can be removed if one tweaks the default footer.