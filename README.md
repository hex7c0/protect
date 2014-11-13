# [protect](http://supergiovane.tk/#/protect)

[![NPM version](https://badge.fury.io/js/protect.svg)](http://badge.fury.io/js/protect)
[![Build Status](https://travis-ci.org/hex7c0/protect.svg)](https://travis-ci.org/hex7c0/protect)
[![Dependency Status](https://david-dm.org/hex7c0/protect/status.svg)](https://david-dm.org/hex7c0/protect)

protect your object from being overridden

## Installation

Install through NPM

```bash
npm install protect
```
or
```bash
git clone git://github.com/hex7c0/protect.git
```

## API

inside nodejs project
```js
var protect = require('protect');

var newObj = protect({
    foo: 'ciao'
});
```

### protect(obj)

#### options

 - `obj` - **Object** your object *(default "required")*

### [License GPLv3](http://opensource.org/licenses/GPL-3.0)
