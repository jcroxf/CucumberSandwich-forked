const { Actions } = require("selenium-webdriver");
const Browser = require("./Browser");
const browser = new Browser();
const timeout = 20000;

beforeEach(async () => {
    browser.browserBuild();
    await browser.browserNavigate('http://localhost:8080/');
}, timeout);

afterEach(async() => {
    await browser.browserExit();
}, timeout);

//test template
// test("description", async() => {

// });