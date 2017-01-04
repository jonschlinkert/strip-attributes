/*!
 * strip-attributes <https://github.com/jonschlinkert/strip-attributes>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var isObject = require('isobject');
var extend = require('extend-shallow');
var omit = require('object.omit');
var pick = require('object.pick');

module.exports = function (str, options) {
  if (isObject(str)) {
    options = str;
    str = null;
  }

  var opts = extend({}, options);
  var cheerio = opts.cheerio || require('cheerio');
  var $ = opts.$ || cheerio.load(str);

  $('*').each(function() {
    if (opts.keep) {
      this.attribs = pick(this.attribs, opts.keep);
    }
    if (opts.omit) {
      this.attribs = omit(this.attribs, opts.omit);
    }
    if (typeof opts.filter === 'function') {
      this.attribs = opts.filter(this);
    }
    if (!opts.omit && !opts.keep && !opts.filter) {
      this.attribs = {};
    }
  });

  return $.html();
};
