Welcome to your final checkpoint at Fullstack Academy!

## Resources

Except for existing *codebases* (from workshops / checkpoints / projects you've done, or library / solution code), you are allowed to use any resources you'd like. That includes all documentation and workshop *instructions*.

Please make sure you complete specs located in the following files:

`tests/01-react/react-tests.js`

`tests/02-backend/backend-tests.js`

`tests/03-js/flatline-test.js`

#### This is the recommended order in which you complete each test; however, they do not depend on each other! If you get stuck or want to work in a different order, you should be able to.

## Getting started

**Fork** and clone this repository. Then execute the following to run all tests:

```bash
npm install
```

To run only _specific_ test suites, you can optionally do any of the following:

```bash
npm run server-test
npm run react-test
npm run js-test
npm run extra-credit
```

To only run a specific `describe` or `it`, you can also chain `.only`:

```js
it.only('does something', testFunc);
```

## Extra Credit

For the brave, the extra credit (implementing Promise.map) is available in `tests/04-extra-credit`. Run with `npm run extra-credit`.

## Submit

1. `git add -A`
2. `git commit -m 'submission for deadline'`
3. `git push origin master`
