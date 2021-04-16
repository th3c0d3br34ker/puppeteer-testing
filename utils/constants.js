const path = require('path');

const WIKIPEDIA_URL = 'https://www.wikipedia.com/';
const GOOGLE_URL = 'https://www.google.com/';
const GITHUB_URL = 'https://www.github.com/';
const AMAZON_URL = 'https://www.amazon.com';
const INSTAGRAM_URL = 'https://www.instagram.com';
const INSTAGRAM_USERNAME = 'some.random.name___';

const SCREENSHOTS_PATH = path.join(__dirname, path.normalize('../screenshots'));

const launchOptions = {
  headless: true,
  defaultViewport: {
    width: 1280,
    height: 800,
  },
};

module.exports = {
  WIKIPEDIA_URL,
  GOOGLE_URL,
  GITHUB_URL,
  AMAZON_URL,
  INSTAGRAM_URL,
  INSTAGRAM_USERNAME,
  SCREENSHOTS_PATH,
  launchOptions,
};
