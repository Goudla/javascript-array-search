'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * where their fields include the search term.
 * @param  {Array} collection The collection to iterate over.
 * @param  {string} term The search term.
 * @param  {Array<string>} fields The element's fields to be searched.
 * @return {Array} Returns the new filtered array.
 */
function search(collection, term, fields) {
  if (!term) return collection;
  var terms = term.split(' ');
  return collection.filter(function (value) {
    var values = fields.map(function (field) {
      return (0, _lodash2.default)(value, field);
    }).join().toLowerCase();
    return terms.reduce(function (accumulator, searchTerm) {
      if (!accumulator) return false;
      return values.indexOf(searchTerm.toLowerCase()) >= 0;
    }, true);
  });
}

exports.default = search;