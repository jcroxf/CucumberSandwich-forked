const { Actions } = require("selenium-webdriver");
const Browser = require("./Browser");
const browser = new Browser();
const timeout = 20000;

beforeEach(async () => {
    browser.browserBuild();
    await browser.browserNavigate('https://rainhillparish.org.uk');
}, timeout);

afterEach(async() => {
    await browser.browserExit();
}, timeout);

//test template
// test("description", async() => {

// });

test("Initially has a search bar", async() => {
    const element = await browser.getElement("s");
    const tagname = await element.getTagName();
    expect(tagname).toBe('input');
});

test("Initially has a search submit button", async() => {
    const element = await browser.getElementByCss('[type="submit"].btn');
    const tagName = await element.getTagName();
    expect(tagName).toBe('button');
});

test("Search bar is initially empty", async() => {
    const element = await browser.getElement("s");
    expect(element.value).toBe();
});

test("Accessibility link hover works", async() => {
        const element3 = await browser.getElement('menu-item-1270');
        const actions = browser.headless.actions({async: true});
        await actions.move({origin: element3}).perform();
        const cssValue = await element3.getCssValue('text-decoration');
        expect(cssValue).toBe('none solid rgb(255, 255, 255)');
});

