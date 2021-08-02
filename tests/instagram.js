const assert = require('assert');
const path = require('path');
const puppeteer = require('puppeteer');
const {
  launchOptions,
  INSTAGRAM_URL,
  INSTAGRAM_USERNAME,
  SCREENSHOTS_PATH,
} = require('../utils/constants');

const instagram_screenshot = path.join(SCREENSHOTS_PATH, 'instagram.png');

let browser;
let page;

before(async () => {
  browser = await puppeteer.launch({ ...launchOptions, headless: false });
});
describe('Check Instagram login', () => {
  it('trying to login', async function () {
    this.timeout(0);
    page = await browser.newPage();

    await page.goto(`${INSTAGRAM_URL}/accounts/login/?source=auth_switcher`, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector("[name='username']");

    await page.type("[name='username']", INSTAGRAM_USERNAME);
    await page.keyboard.down('Tab');
    await page.keyboard.type('pass'); // password

    await page.evaluate(() => {
      const btns = [
        ...document.querySelector('.HmktE').querySelectorAll('button'),
      ];
      btns.forEach(function (btn) {
        if (btn.innerText === 'Log In') {
          btn.click();
        }
      });
    });

    await page.waitForTimeout(5000);

    await page.goto(INSTAGRAM_URL);

    const pageTitle = page.title();

    await page.screenshot({ path: instagram_screenshot });
    await page.close();
    assert.ok(pageTitle);
  });
});

after(async () => {
  await browser.close();
});
