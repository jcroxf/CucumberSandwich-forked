/*
 ******************************************************************************
 * Cucumber/Gherkin
 * ============================================================================
 * 
 * NOTES:
 * - Arrow functions not supported by cucumber when accessing the 'world' class
 *   SEE: github.com/cucumber/cucumber-js/blob/main/docs/support_files/world.md
 * 
 ******************************************************************************
*/

const assert = require('assert');
const {Given, When, Then} = require('@cucumber/cucumber');

// ----------------------------------------------------------------------------
// Steps for the first & second learning outcomes
// ----------------------------------------------------------------------------

Given("a fibonacci sequence initialized to {int}", function(value) {
    this.fibonacci.init(value);
});

When("a fibonacci sequence is started", function() {
    // Nothing to do, as done by the custom world
});

When("a fibonacci sequence is initialized to {int}", function(value) {
    try {
        this.fibonacci.init(value);
    } catch {
        this.itThrew();
    }
});

When("the sequence is skipped {int} time(s)", function(value) {
    this.fibonacci.skip(value);
});

Then("the next {word} should be {}", function(action, value) {
    switch(action) {
        case "number":
            assert(this.fibonacci.next() == parseInt(value));
            break;
        
        case "sequence":
            value.split(",").forEach((expected) => {
                assert(this.fibonacci.next() == parseInt(expected.trim()));
            });
            break;
        
        default:
            throw new Error(`Unsupported action ${action}`);
    }
});

Then("it should throw an exception", function() {
    assert(this.hasThrown());
});

Then("the state should be {string}", function(value) {
    assert(this.fibonacci.state() == value);
});


// ----------------------------------------------------------------------------
// Steps for the fourth learning outcomes
// ----------------------------------------------------------------------------
/*
*Scenario: input field selected- visual cue provided?
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
*/

//Given("", function(value) {
 //   this.class.init(value);
//});

//When("", function(value) {
 //   this.class.init(value);
//});

//Then("", function(value) {
 //   this.class.init(value);
//});

//And("", function(value) {
 //   this.class.init(value);
//});

When("the input field is selected by the user", function(value) {
    this.browser.elementClick('new-item');
});

Then("the focus class activates changes the outline value to {string}", function(value) {
   this.class.init(value);
});