# calculator-refactor

## Steps Plan


| _Step Name_ | User Story | Changes in HTML | Changes in CSS |
| --- | --- | --- | --- |
| __Step 1: DOM__ | As a HYF student, I want to draft the layout of my project using wireframe.cc and build the basic HTML code, so that I can start using the tags with id attributes in javascript | HTML index file with a basic form, two input boxes for the input values to process, one selector with the operation to perform and a button to execute the calculation | N/A |
| __Step 2: style__ | As a HYF student, I want to add CSS properties to build the layout of my project using, so that the HTML elements are rendered properly and look sleek | Added a heading and the containers to arrange the elements with CSS properties | Added all the styles for the elements displayed on the screen |
| __Step 3: listener__ | As a HYF student, I want to assign and manipulate HTML elements events, so that I'm able to execute javascript code when the event is triggered | Added the link to the javascript source files for the listener, handler and logic; changed the type of the button tag | No changes to this file |

[wireframe](https://wireframe.cc/vtW61U)

## DOM

| tag name | attributes | role |
| --- | --- | --- |
| __span__ | id="result" | show the result of the calculation on the screen |
| __input type="text"__ | id="inputbox1" | capture the input value of the first number to operate |
| __input type="text"__ | id="inputbox2" | capture the input value of the second number to operate |
| __select__ | id="operation" | dropdown to select the operation to perform |
| __button__ | id="btncalculate" | button to execute the arithmetic operation between the two input values |

## Styling

| class name | description | role |
| --- | --- | --- |
| __main-area__ | container element tag main styling | CSS properties for displaying the calculator on the browser |
| __box1__ | container element for the LCD display | CSS properties for the proper display of the LCD display |
| __box2__ | container element for the input boxes, selector and calculate button | CSS properties for the proper display of the calculator inputs and calculate button |
| __lcd-display__ | styling for the LCD screen | CSS properties for the LCD screen with font and color styling |

## Listeners

| type | attached to | callback |
| --- | --- | --- |
| __click__ | id="btncalculate" | calculateHandler |

## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| | | | |

## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| | | | |
