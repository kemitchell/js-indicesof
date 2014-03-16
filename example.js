var indicesOf = require('./index.js');

var haystack = "If I Can't Dance It's Not My Revolution";

var search = 'n';
console.log('Occurrences of "%s" in "%s":', search, haystack);
console.dir(indicesOf(search, haystack));

var search = 'an';
console.log('Occurrences of "%s" in "%s":', search, haystack);
console.dir(indicesOf(search, haystack));

var search = 'Dan';
console.log('Occurrences of "%s" in "%s":', search, haystack);
console.dir(indicesOf(search, haystack));

var search = 'dan';
console.log('Occurrences of "%s" in "%s":', search, haystack);
console.dir(indicesOf(search, haystack));

