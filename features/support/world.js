const cucumber = require("@cucumber/cucumber");
const Browser = require("../../Browser");
const Fibonacci = require("../../Fibonacci");

class CustomWorld {
    constructor() {
        //make the browser available
        this.browser = new Browser();
        this.fibonacci = new Fibonacci();
        this.thrown = false;
    }

    hasThrown() {
        return this.thrown;
    }

    itThrew() {
        this.thrown = true;
    }
}

cucumber.setWorldConstructor(CustomWorld);