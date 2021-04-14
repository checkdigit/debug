# @checkdigit/debug

Copyright (c) 2021 [Check Digit, LLC](https://checkdigit.com)

## Introduction

This module is the official Check Digit implementation of the commonly used [`debug`](https://github.com/visionmedia/debug) module.

It has the following features:
* drop-in replacement for `debug`
* zero external dependencies
* sensitive data filtering (e.g. card numbers for PCI compliance)

### Installing

`npm install @checkdigit/debug` 

### Use

```
import debug from '@checkdigit/debug';

const log = debug('myapp');

log('starting up');

```

See [`debug`](https://github.com/visionmedia/debug) for other usage details.

## License

MIT
