const title = require('./test/title');

try {
  (async () => {
    await title();
  })();
} catch (err) {
  console.error(err);
}
