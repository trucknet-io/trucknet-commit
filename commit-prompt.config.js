const types = require('./types');

module.exports = {
  list: types.keys,
  maxMessageLength: 100,
  minMessageLength: 3,
  questions: [
    "type",
    "scope",
    "pivotalTrackerId",
    "subject",
    "body",
    "breaking"
  ],
  types: types,
};
