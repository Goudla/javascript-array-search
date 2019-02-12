;(function(name, definition) {
  if (typeof module != 'undefined') {
    module.exports = definition();
  } else if (typeof define == 'function' && typeof define.amd == 'object') {
    define(name, [], definition);
  } else {
    this[name] = definition();
  }
}('javascript-array-search', function() {
  /**
   * Gets the value at path of object. If the resolved value is undefined.
   * @param  {Object} object The object to query.
   * @param  {string} path The path of the property to get.
   * @return {string} Returns the resolved value.
   */
  function get(object, path) {
    var pathArray = path.split('.');
    if (!pathArray.length) {
      return;
    }
    if (pathArray.length === 1) {
      return object[pathArray[0]];
    }
    return pathArray.reduce(function(acc, cur) {
      return acc[cur];
    }, object);
  }

  /**
   * Iterates over elements of `collection`, returning an array of all elements
   * where any their specified `fields` include the every word in the `term` string.
   * @param  {Array<Object>} collection The collection to iterate over.
   * @param  {string} term The search term.
   * @param  {Array<string>} [fields] The element's fields to be searched.
   * @return {Array} Returns the new filtered array.
   */
  return function(collection, term, fields) {
    if (!collection || !collection.length) {
      return [];
    }
    // The problem with this is it assumes all objects have the same keys
    var fieldsToSearch = fields ? fields : Object.keys(collection[0]);

    if (!term) return collection;
    var terms = term.split(' ');
    return collection.filter(function(value) {
      var values = fieldsToSearch.map(function(field) {
        return get(value, field);
      }).join().toLowerCase();
      return terms.reduce(function(accumulator, searchTerm) {
        if (!accumulator) return false;
        return values.indexOf(searchTerm.toLowerCase()) >= 0;
      }, true);
    });
  }
}));
