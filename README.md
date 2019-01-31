# trucknet-commit

> Commit flow for Trucknet. Includes lint-staged, commitlint (with config), commit-prompt (fork of git-cz) (with config), husky and script to create MR automatically on GitLab

## Install in your project

- `npm remove husky lint-staged git-cz commitizen commitizen-* @commitlint*`
- `rm .huskyrc .lintstagedrc .czrc`
- `npm i -D trucknet-commit`
- Add `"commit": "commit-prompt --no-verify"` script to package.json