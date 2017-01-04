/*!
 * strip-attributes <https://github.com/jonschlinkert/strip-attributes>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

require('mocha');
var assert = require('assert');
var stripAttr = require('./');

describe('strip', function () {
  describe('options.omit', function () {
    it('should omit `class`', function () {
      var actual = stripAttr('<h1 id="a" class="b">Foo</h1>', {omit: ['class']});
      assert.equal(actual, '<h1 id="a">Foo</h1>');
    });
    it('should omit `id`', function () {
      var actual = stripAttr('<h1 id="a" class="b">Foo</h1>', {omit: ['id']});
      assert.equal(actual, '<h1 class="b">Foo</h1>');
    });
    it('should omit `class` and `id`', function () {
      var actual = stripAttr('<h1 id="a" class="b">Foo</h1>', {omit: ['class', 'id']});
      assert.equal(actual, '<h1>Foo</h1>');
    });
  });

  describe('options.keep', function () {
    it('should keep `class`', function () {
      var actual = stripAttr('<h1 id="a" class="b">Foo</h1>', {keep: ['id']});
      assert.equal(actual, '<h1 id="a">Foo</h1>');
    });

    it('should keep `id`', function () {
      var actual = stripAttr('<h1 id="a" class="b">Foo</h1>', {keep: ['class']});
      assert.equal(actual, '<h1 class="b">Foo</h1>');
    });

    it('should keep `class` and `id`', function () {
      var actual = stripAttr('<h1 id="a" class="b">Foo</h1>', {keep: ['class', 'id']});
      assert.equal(actual, '<h1 class="b" id="a">Foo</h1>');
    });

    it('should not add attributes', function () {
      var actual = stripAttr('<h1 id="a" class="b">Foo</h1>', {keep: ['class', 'id', 'foo']});
      assert.equal(actual, '<h1 class="b" id="a">Foo</h1>');
    });
  });
});

