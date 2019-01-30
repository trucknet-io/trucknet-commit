const types = require('./types');

module.exports = {
  list: types.keys,
  maxMessageLength: 100,
  minMessageLength: 3,
  questions: [
    "type",
    "scope",
    "subject",
    "pivotalTrackerId",
    "body",
    "breaking"
  ],
  types: types,
};
