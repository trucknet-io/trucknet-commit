const types = require('./types').keys;

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    "type-enum": [2, "always", types]
  },
};
