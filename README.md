# lifeway-spa 

LifeWay SPA React Boilerplate

# Getting Started

Use [nvm](https://github.com/creationix/nvm) to install and manage Node.js versions.
The required/recommended version of Node.js can be found in the `.node-version` file.

# Installation

## Global modules

This repo requires a few global modules to be installed manually.

To install these, run:
```sh
npm install -g yarn
```

## Local modules

Dependencies are managed with yarn.  Simply run `yarn install` to install the local modules needed.

# Running the Environment

```sh
npm start
```

# Tests

```sh
npm test
```

# Implementation Notes

- Implement Functional Stateless React components when possible
- Reducers should use Immutable.js to wrap state
- Components with state should use a little as posslble favoring Redux for housing all state
- Container components should pass Immutable data structures to children
- Utility functions should be functional and must be tested
- Overall state shape and reducer functionality should be separated by domain where it makes sense, relying on combineReducers() to assemble the root reducer
- Independent selectors should be used with mapStateToProps when necessary
- reselect should be used to memoize selectors
- Tests are to be placed in the `__tests__` directory beside the component, container, reducer or utility with `-test` at the end of the filename. (e.g. app/components/Nav.js, app/components/__tests__/Nav-test.js)
- Abstract central logic into a utility method placed in apps/utils. Please implement as ES6/ES2015 modules.

## License

MIT
