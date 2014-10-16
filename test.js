/*!
 * strip-attributes <https://github.com/jonschlinkert/strip-attributes>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var stripAttr = require('./');


describe('strip', function () {
  describe('options.omit', function () {
    it('should omit `class`', function () {
      var actual = stripAttr('<h1 id="a" class="b">Foo</h1>', {omit: ['class']});
      actual.should.equal('<h1 id="a">Foo</h1>');
    });
    it('should omit `id`', function () {
      var actual = stripAttr('<h1 id="a" class="b">Foo</h1>', {omit: ['id']});
      actual.should.equal('<h1 class="b">Foo</h1>');
    });
    it('should omit `class` and `id`', function () {
      var actual = stripAttr('<h1 id="a" class="b">Foo</h1>', {omit: ['class', 'id']});
      actual.should.equal('<h1>Foo</h1>');
    });
  });

  describe('options.keep', function () {
    it('should keep `class`', function () {
      var actual = stripAttr('<h1 id="a" class="b">Foo</h1>', {keep: ['id']});
      actual.should.equal('<h1 id="a">Foo</h1>');
    });

    it('should keep `id`', function () {
      var actual = stripAttr('<h1 id="a" class="b">Foo</h1>', {keep: ['class']});
      actual.should.equal('<h1 class="b">Foo</h1>');
    });

    it('should keep `class` and `id`', function () {
      var actual = stripAttr('<h1 id="a" class="b">Foo</h1>', {keep: ['class', 'id']});
      actual.should.equal('<h1 class="b" id="a">Foo</h1>');
    });

    it('should not add attributes', function () {
      var actual = stripAttr('<h1 id="a" class="b">Foo</h1>', {keep: ['class', 'id', 'foo']});
      actual.should.equal('<h1 class="b" id="a">Foo</h1>');
    });
  });
});

