const types = {
  wip: {
    description: "Work in progress (e.g. Create Button, but onPress is not implemented)",
    emoji: "🚧",
    value: "wip"
  },
  feat: {
    description: "A new feature (e.g. Finish Button component)",
    emoji: "✨",
    value: "feat"
  },
  fix: {
    description: "A bug fix (e.g. Fix Button styles in dark theme)",
    emoji: "🐛",
    value: "fix"
  },
  design: {
    description: "Any visual change of the product (e.g. Change Footer links styles)",
    emoji: "💄",
    value: "design"
  },
  perf: {
    description: "A code change that improves performance (e.g. Optimize webpack bundle)",
    emoji: "⚡️",
    value: "perf"
  },
  refactor: {
    description: "A code change that is not visible for the end user (e.g. Change React.Component to React.PureComponent)",
    emoji: "♻️",
    value: "refactor"
  },
  chore: {
    description: "Change in build tools, developers tools, CI/CD, deps and etc. (e.g. Run E2E tests on CI)",
    emoji: "🤖",
    value: "chore"
  },
  test: {
    description: "Adding missing tests (e.g. Add tests for Button component)",
    emoji: "💍",
    value: "test"
  },
  docs: {
    description: "Documentation only changes (e.g. Create Button README)",
    emoji: "📝",
    value: "docs"
  },
  release: {
    description: "Create a release commit (used in automatic release script)",
    emoji: "🏹",
    value: "release"
  },
};

module.exports = types;
module.exports.keys = Object.keys(types);