const assert = require('assert');
const puppeteer = require('puppeteer');
const { launchOptions, GOOGLE_URL } = require('../utils/constants');

let browser;
let page;

before(async () => {
  browser = await puppeteer.launch(launchOptions);
});

describe('Check Google Homepage', () => {
  it('has title "Google"', async function () {
    this.timeout(0);
    page = await browser.newPage();
    await page.goto(GOOGLE_URL, { waitUntil: 'networkidle0' });
    const title = await page.title();
    await page.close();
    assert.strictEqual(title, 'Google');
  });

  it('has Google logo', async function () {
    this.timeout(0);
    page = await browser.newPage();

    await page.goto(GOOGLE_URL, { waitUntil: 'networkidle0' });
    const googleLogo = await page.$('img.lnXdpd');
    await page.close();
    assert.ok(googleLogo);
  });
});

after(async () => {
  await browser.close();
});
