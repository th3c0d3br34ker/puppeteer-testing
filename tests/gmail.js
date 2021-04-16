const assert = require('assert');
const path = require('path');
const puppeteer = require('puppeteer');
const {
  launchOptions,
  GOOGLE_URL,
  SCREENSHOTS_PATH,
} = require('../utils/constants');

const gmail_screenshot = path.join(SCREENSHOTS_PATH, 'gmail.png');

let browser;
let page;

before(async () => {
  browser = await puppeteer.launch(launchOptions);
});

describe('Check Gmail signup', () => {
  it('Landing page has CTA button', async function () {
    this.timeout(0);
    page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(`${GOOGLE_URL}gmail/about/`, {
      waitUntil: 'networkidle0',
    });
    const SignUpButton = await page.$('a.hero-carousel__cta--reg');
    await page.screenshot({ path: gmail_screenshot });
    await page.close();
    assert.ok(SignUpButton);
  });
});

after(async () => {
  await browser.close();
});
