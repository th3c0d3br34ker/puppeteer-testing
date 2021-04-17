const assert = require('assert');
const path = require('path');
const puppeteer = require('puppeteer');
const {
  launchOptions,
  AMAZON_URL,
  SCREENSHOTS_PATH,
} = require('../utils/constants');

const amazon_screenshot = path.join(SCREENSHOTS_PATH, 'amazon.png');

let browser;
let page;

before(async () => {
  browser = await puppeteer.launch(launchOptions);
});

describe('Check Amazon Homepage', () => {
  it('has search input', async function () {
    this.timeout(0);
    page = await browser.newPage();
    await page.goto(AMAZON_URL, { waitUntil: 'networkidle0' });
    const searchInput = await page.$('#twotabsearchtextbox');
    await page.screenshot({ path: amazon_screenshot });
    await page.close();

    assert.ok(searchInput);
  });

  it('has title', async function () {
    this.timeout(0);
    page = await browser.newPage();
    await page.goto(AMAZON_URL, { waitUntil: 'networkidle0' });
    const pageTitle = await page.title();
    await page.close();

    assert.ok(pageTitle);
  });
});

after(async () => {
  await browser.close();
});
