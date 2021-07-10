# `ContactForm`

The `ContactForm` displays the email to contact the organization and includes an email form so users can send an email in-page.

- **Source:** src\components\contact\contact-form.js

---

## Dependencies
`React, { useState }` from "react"

### Library
- `Fade` from "react-reveal/Fade"
    - Library component that allows a fade-in effect to its children upon render.
- `axios` from "axios"
    -  

### Local
- `../contact-form.scss`
    - Allows custom styling for the layout and styling of the components.

---

## Variable and Functions
Remembers if the contact form is currently `submitting` and if the submission is ok: `status`.

### `serverState` `Object` `(State)`

```
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
```


### `handleServerResponse(ok, msg, form)`
Called to set the server state as ok (successfully submitted) and to clear the form's text inputs. Called by the end of the `handleOnSubmit(error)` for cleanup.

```javascript
function handleServerResponse(ok, msg, form) {
	setServerState({
    	submitting: false,
    	status: { ok, msg },
    })
    if (ok) {
    	form.reset()
	}
}
```

### `handleOnSubmit(error)`
A error handler for empty inputs. Sets the state of the form to submitting, does a call using the axios library and finally handles the response of the server from its submission.

```javascript
function handleOnSubmit(error) {
	error.preventDefault()
    const form = error.target
    setServerState({ submitting: true })
    axios({
    	method: "post",
    	url: "https://getform.io/f/6cc5d50d-f260-462a-9e2f-1b670396d039",
    	data: new FormData(form),
    })
    .then(response => {
    	handleServerResponse(true, "Thank you fo reaching out!", form)
    })
    .catch(response => {
    	handleServerResponse(false, response.response.data.error, form)
    })
}
```

---

## Composition

### Top Level Wrapper
Allows for global selections in the scss file.

```javascript
<div id="contact-form">
```

### Email Reference
Displays the email for contacting the organization. When clicked, opens the email app of the device.

```javascript
	...
	<a id="email" href="mailto:contactus@upacm.net">
    	<h6>contactus@upacm.net</h6>
    </a>
	...
```

### 'Fade In from Bottom' Wrapper
This applies a 550 millisecond long fade from bottom animation on the components after 100 milliseconds from render time. The `ssrFadeout` enables server side rendering.

```javascript
	...
	<Fade ssrFadeout bottom duration={550} delay={100}>
		...
```

### Axios Form
Utilizes the axios library to accept emails using their platform. Calls `handleOnSubmit` for every submission. 

```javascript
		...
		<form onSubmit={handleOnSubmit} id="form">
```

### Email Input Field
Accepts the text input here as the email of the sender. Is excpected to be a single line of text.

```javascript
		...
			<div id="form-email">
				<b><p>Email</p></b>
				<input
					type="email"
					name="email"
					id="input-email"
					required="required"
					placeholder="Email"/>
			</div>
			...
```

### Email Input Field
Accepts the text input here as the name of the sender. Is excpected to be a single line of text.

```javascript
			...
			<div id="form-name">
            	<b><p>Name</p></b>
            	<input
              		type="text"
              		name="name"
              		id="input-name"
              		required="required"
              		placeholder="Name"
            	/>
          </div>
		  ...
```

### Subject Input Field
Accepts the text input here as the subject of the email. Is excpected to be a single line of text.

```javascript
			...
			<div id="form-subject">
				<b><p>Subject</p></b>
				<input
					type="text"
					name="subject"
					id="input-subject"
					placeholder="Subject"/>
			</div>
			...
```

### Subject Input Field
Accepts the text input here as the actual message or content of the email. Is excpected to be more than one line of text.

```javascript
        	...
			<div id="form-message">
            	<b><p>Message</p></b>
            	<textarea
              		type="text"
              		name="message"
              		id="input-message"
              		required="required"
              		placeholder="Message"/>
          	</div>
			  ...
```

### Submit Button
Signals the form when the sender wants to submit if pressed. Is disabled when submitting to prevent submission while another one is occuring.

```javascript
			...
			<button
        	    type="submit"
          		id="submit-button"
           		disabled={serverState.submitting}>
            	Submit
          	</button>
			...
```

### Submission Results Notice
Displays a component that shows if the submission was successful based on the `serverState.status`.

```javascript
			...
			{serverState.status && (
            	<div
              	className={!serverState.status.ok ? "error" : ""}
              	id="response">
              		<p>{serverState.status.msg}</p>
            	</div>
        	)}
		...
```

---

## Styling

- **Source:** src\components\contact\contact-form.scss

Allows the use of a cross-browser scaling and transitions.
```css
@import "../../styles/animation.scss";
```

## Top Level Wrapper
Sets the padding and color of the contact form section. The negative margin is to account for the spacing added by the `Opening` component loaded before this section.

`#contact-form`
```css
...
#contact-form {
	...
	background-color: white;
	padding-top: 0;
	margin-top: -12%;
	...
	padding: 10%;
	...
```

### Email Display Settings
Centers the email used by the organization for contacts and adds some spacing. When hovered, the email becomes blue (like a hyperlink).

`#contact-form` `#email`
```css
	...
	#email {
		display: block;
		margin: auto;
		text-align: center;
		margin-bottom: 8%;
		margin-top: 3%;
		border: none;
		width: fit-content;

		font-size: 1em;

		@include transition-single(color);
	}

	#email:hover {
		color: var(--acm-blue);
	}
	...
```

### Form Settings
Centers and stylizes the entire contact form. Also limits the width for padding.

`#contact-form` `#form`
```css
	...
	#form {
		width: 70%;
		min-width: 350px;
		display: block;
		margin: auto;
		background-color: var(--acm-blue);

		padding: 4%;
		margin-bottom: -9%;

		box-shadow: 2px 2px 10px rgb(78, 78, 78);

		color: #2b2b2b;
	}
	...
```

### Input Field Layout
Sets the layout and header color of the input fields in the contact form. 

`#contact-form` `#form-name`, `#form-email`, `#form-subject`, `#form-message` 
```css
	...
	#form-name,
	#form-email,
	#form-subject,
	#form-message {
		display: flex;
		flex-wrap: wrap;
		padding: 10px 20px;

		color: white;
		...
```

### Input Field Text Settings
Sets the width, padding and style of the actual input components of the input fields.

```css
		...
		p {
			width: 200px;
			padding: 10px 0;
		}

		input,
		textarea {
			flex: 1;
			border: none;
			outline: none;
			color: #2b2b2b;
			background-color: inherit;
			width: 80%;
			border-bottom: 2px rgba(255, 255, 255, 0.548) solid;
			min-width: 200px;
		}
	}
	...
```

### Form Message Input Settings
Sets a custom text layout for the message since it will hold longer strings.

```css
	...
	#form-message {
		#input-message {
			overflow: visible;
			word-wrap: break-word;
			min-height: 180px;
		}
	}
	...

```


### Form Submission Button Settings
Sets the sizing, style, and centers the submission button of the form. The button scales by 10% when the form is submitting or if the button is hovered over.

```css
	...
	#submit-button {
		width: 10em;
		max-width: 90%;

		display: block;
		margin: auto;

		font-size: 2em;
		color: white;

		margin-top: 40px;
		padding: 10px;

		border: none;
		background-color: #2b2b2b;

		@include transition-single(transform);
	}

	#submit-button:hover,
	#submit-button:disabled {
		@include transform-safe(scale(1.1));
	}
	...
```

### Form Response Settings
Sets the response text to have a circular border and be centered. It also has a manual fade in animation on render to notify the user that there is a response now. By default, it assumes a successful submission so it's green but it will have a red background color if there is actually an error.

```css
	...
	#response {
		background: var(--acm-green);

		display: block;
		margin: auto;
		margin-top: 50px;

		padding: 20px;
		border-radius: 50px;

		text-align: center;
		color: white;

		@include animation(fade-in, 0.7s);

		width: 80%;
	}
	...
	#response .error {
		background: var(--acm-red);
	}
	...

```

### Fade-in Animation
Creates a manual fade-in animation by increasing the opacity of a component over time.

```css
	...
	@keyframes fade-in {
		from {
			@include transform-safe(scale(0));
			opacity: 0;
		}
		to {
			@include transform-safe(scale(1));
			opacity: 1;
		}
	}
	...
```

### Remove Contact Email Form on Small Screens
There's no need for a contact form on small screens and the layout wouldn't be good in this screen size anyway.

```css
	@media only screen and (max-width: 480px) {
		#form {
			display: none;
		}
	}
```

---

## Notes
The axios link here is hardcoded. It's actually safe since this is just a reference to the form's inbox, which is only accessible if the registered email is logged in. However, there may be better option to send an email (perhaps a method to directly send it into the inbox of the email would be great).
