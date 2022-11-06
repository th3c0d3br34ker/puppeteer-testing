const fs = require('fs');

const makeDir = async () => {
  if (!(await fs.existsSync('screenshots'))) {
    await fs.mkdirSync('screenshots');
  }
};

makeDir();
