import get from 'lodash.get';

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * where any their specified `fields` include the every word in the `term` string.
 * @param  {Array<Object>} collection The collection to iterate over.
 * @param  {string} term The search term.
 * @param  {Array<string>} [fields] The element's fields to be searched.
 * @return {Array} Returns the new filtered array.
 */
function search(collection, term, fields) {
  if (!collection || !collection.length) {
    return [];
  }
  // The problem with this is it assumes all objects have the same keys
  const fieldsToSearch = fields ? fields : Object.keys(collection[0]);

  if (!term) return collection;
  const terms = term.split(' ');
  return collection.filter((value) => {
    const values = fieldsToSearch.map(field => get(value, field)).join().toLowerCase();
    return terms.reduce((accumulator, searchTerm) => {
      if (!accumulator) return false;
      return values.indexOf(searchTerm.toLowerCase()) >= 0;
    }, true);
  });
}

export default search;
