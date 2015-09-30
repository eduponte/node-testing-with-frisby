# node-testing-with-frisby

This repo demonstrates some [frisby.js](http://frisbyjs.com/) usage to test a REST api on a node.js (with express.js) server.

Among them, there are some examples of frisby matchers, request chaining and unauthorized access.

The specs are under the ```spec``` folder, to make [jasmine-node](https://github.com/mhevery/jasmine-node) happy.

## Installation

As usual:

    npm install


## Run & test

Run the api server:

    node server.js

Run the tests:

    npm test

Hopefully, the console will show something like

```
....

Finished in 0.078 seconds
4 tests, 11 assertions, 0 failures, 0 skipped
```
And some JUnit reports will appear under the ```reports``` folder!
