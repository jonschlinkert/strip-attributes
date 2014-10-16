/*!
 * strip-attributes <https://github.com/jonschlinkert/strip-attributes>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var cheerio = require('cheerio');
var omit = require('object.omit');
var pick = require('object.pick');

module.exports = function (str, options) {
  var $ = cheerio.load(str);

  var opts = options || {};

  $('*').each(function() {
    if (opts.keep) {
      this.attribs = pick(this.attribs, opts.keep);
    } else if (opts.omit) {
      this.attribs = omit(this.attribs, opts.omit);
    } else {
      this.attribs = {};
    }
  });

  return $.html();
};