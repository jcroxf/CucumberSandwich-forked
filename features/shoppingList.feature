Feature: shopping list user acceptance testing

Scenario: input field selected- visual cue provided?
    When the input field is selected by the user
    Then the focus class activates changes the outline value to "-webkit-focus-ring-color auto 1px"

Scenario: text into input field, create, text added to the list
    Given the user has added a small input to the input field
    When the user clicks the create button
    Then the new input is added to the shopping list

Scenario: when an item is added to the list, it is added to the top
    Given the user has added input to the input field
    When the user clicks the create button
    Then the new inputted is added to the shopping list
    And it is added as the first child of class "svelte-1qhcywq"

Scenario: hovering over checklist item circle
    When the user hovers over a black circle of a list item
    Then the SVG icon appears inside
    And when the user moves the mouse away, the SVG icon disappears

Scenario: removing list items
    Given the user hovers over a black circle of a list item
    When the user clicks the black circle
    Then the associated list item is removed from the DOM

Scenario: large user task input
    Given the input field is selected by the user
    When the user has added a large input to the input field
    Then the new task test is correctly formatted on screen- text wrap
    And the black circle is visible on screen for the item
