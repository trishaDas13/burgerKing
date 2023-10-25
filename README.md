# burgerKing

## hoisting link : https://trishadas13.github.io/burgerKing/

# HTML code description: 

✔ The form is used for ordering food and likely has JavaScript associated with it.

✔  It contains several checkboxes for selecting food items.

✔ Each food item is accompanied by a "label" element to provide a description.

✔ The checkboxes have the value attribute set to different food items, like "burger," "fries," "drinks," and "combo."

✔ The "Order Food" button is used to submit the food order.

✔ This paragraph will likely display the order ID after a user submits the form.

✔ It contains an empty "span" element, which is probably intended to hold the order ID dynamically generated using JavaScript.

✔ An image element with the class "foods" is included but lacks a source (the src attribute is empty). It has specified dimensions of 350px by 350px and an "alt" attribute for describing the image, but it's currently set to "Error."

✔ This references an external JavaScript file, "script.js," which is expected to contain the scripting logic for this food ordering form.

# CSS code description: 

✔ <b>Universal Reset:</b> The code resets the margin, padding, and box-sizing for all HTML elements to ensure consistent styling.

✔  Body Styles: The body element is styled to occupy the full viewport width and height. It has a linear gradient background that transitions from a red shade (rgba(239,149,149,1)) to a cyan shade (rgba(57,255,216,1)). The content is centered vertically and horizontally using flexbox.

✔ Form Styles: The form element is styled with a dark blue background color (rgb(25, 38, 85)) and is also centered within the viewport. It's designed for user input.

✔ Input Styles: The input element within the form has some margin adjustments. However, there seems to be a typo in accent-color, which should probably be background-color. It also has a cursor pointer.

✔ Label Styles: The label elements within the form are white in color with a font weight of 700 and a font size of 25px.

✔ Paragraph Styles: The p elements have a red color, large font size (32px), bold font weight (800), and padding. They have a yellow background color (rgb(255, 251, 115)).

✔ Image Styles: The img elements have display: none, which means they are initially hidden. There is also some margin applied when they are visible.

✔ Button Styles: The button elements have a background color of #fff000, border-radius, bold font weight, padding, and no border. They change color on hover (a transition of 200ms is specified).

# Javascript code description:
✔ It selects various elements on the web page and stores them in variables:

✔ check: An array that stores all the checkbox input elements on the page.

✔ btn: Represents a button element.

✔ orderID: Represents a <span> element where the order ID will be displayed.

✔ foods: Represents an element, presumably an image, where the selected food item will be displayed.
It adds an event listener to the button (btn) that prevents its default behavior (form submission).

✔ When the button is clicked, the code does the following:

It initializes an empty array called foodItem to store the selected food item(s).

✔ It loops through the checkboxes to determine which items are checked:

If a checkbox is checked, its value is added to the foodItem array.

✔ It checks if no checkboxes were checked:

If foodItem.length is zero, it displays an alert message, "Please select a food item to order," and returns, preventing further execution.

✔ It checks if more than one checkbox was checked:
If foodItem.length is greater than or equal to two, it displays an alert message, "You can select only one item at a time," and returns, preventing further execution.

✔ It creates a Promise named myPromise:
Inside the promise, there is a setTimeout function with a random delay between 1000ms and 4000ms.
The promise resolves after the random delay.

✔ When the promise resolves:
The orderID span's text is set to a random number generated using Math.random().
The code checks the food items selected and updates the foods element accordingly.
If "burger" is selected, it sets the src attribute to an image URL of a burger.
If "fries" is selected, it sets the src attribute to an image URL of fries.
If "drinks" is selected, it sets the src attribute to an image URL of a drink.
If "combo" is selected, it sets the src attribute to an image URL of a burger, drink, and fries combo.
The foods element is displayed by setting its style.display to "inline-block."
The button's disabled property is set to false, allowing further orders.

# Summary : 
In summary, this code allows users to select a single food item, generates a random order ID, and displays an image of the selected food item once the order is placed. It uses promises to simulate a delay before displaying the order ID and food item image.
