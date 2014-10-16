# strip-attributes [![NPM version](https://badge.fury.io/js/strip-attributes.svg)](http://badge.fury.io/js/strip-attributes)

> Strip attributes from HTML tags.

## Install
#### Install with [npm](npmjs.org):

```bash
npm i strip-attributes --save-dev
```

## Run tests

```bash
npm test
```

## Usage

Pass a string of HTML to `stripAttr()`:

```js
var stripAttr = require('strip-attributes');
var str = '<h1 id="a" class="b">Foo</h1>';

// By default, all attributes are omitted
stripAttr(str);
//=> '<h1>Foo</h1>'
```

**Omit** specific attributes

Pass an array of specific attributes to omit to `options.omit`:

```js
stripAttr(str, {omit: ['class']});
//=> '<h1 id="a" >Foo</h1>'
```

**Keep** specific attributes

Pass an array of specific attributes to keep to `options.keep`:

```js
stripAttr(str, {keep: ['class']});
//=> '<h1 class="b">Foo</h1>'
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue][issues].

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on October 16, 2014._

[issues]: https://github.com/jonschlinkert/strip-attributes/issues