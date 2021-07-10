# `AchievementItem({ name, event, date, scope })`
This component displays an award icon (that varies by the scope of the award), and information about its award like name, concise description (commonly just the category), and date of awarding.

**Source:** src\components\about\subcomponents\achievement-item.js

---

## Dependencies
`React` from "react"

### Local
- `achievementLocal` from "../../../assets/images/achievement/achievement_local.png"
- `achievementNational` from "../../../assets/images/achievement/achievement_national.png"
- `achievementInternational` from "../../../assets/images/achievement/achievement_international.png"
- `../../../styles/var.scss`
    - Allows access to the global styling variables of the code base.
- `../../../styles/global.scss`
    - Applies the default styling and layout of the components

---

## Variables

### `achievementIcon`
Maps the directories of available achievement or award icons based on its scope.

```javascript
	...
	const achievementIcon = {
    	local: achievementLocal,
    	national: achievementNational,
    	international: achievementInternational,
	}
	...
```

---

## Composition

### Top Level Wrapper
For holding the inner components and whole selection in later styling.

```javascript
<div className="achievement-item">
	...
```

### Representative Image
The representative image shows the weight of the award (based on scope).

```javascript
...
	<img
        className="achievement-image"
        src={achievementIcon[scope]}
        alt="achievment-logo" />
	...
```

### Description
Inside the `.achievement-text` wrapper are the descriptions of the achievement: `.name`, `.event` (concise description of the event, commonly just the category), and the `date` of awarding (commonly just the year).

```javascript
	...
	<div className="achievement-text">
    	<h6 className="name">{name}</h6>
    	<b><p className="event">{event}</p></b>
        <p className="date">{date}</p>
    </div>
...
```

---

## Notes
Consider making the property of the component accepts just one Object. This would transfer the responsibilitty of decomposing the data recieved from its parent as a form of abstraction. The component can also have its own scss file for its own style, instead of giving such responsibility to its parent. Finally, this component manually loads from a folder in src.