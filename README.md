js-indicesof
============

Just like indexOf(), but returns an array of all occurrences.

If there is no match, then it will return an empty array.

Syntax
------

	function (searchString, haystack, [ startIndex ])	

Example
-------

	var indicesOf = require('indicesof');
	var haystack = "If I Can't Dance It's Not My Revolution";
	indicesOf('n', haystack); // [ 7, 13, 38 ]
	indicesOf('an', haystack); // [ 6, 12 ]
	indicesOf('Dan', haystack); // [ 11 ]
	indicesOf('dan', haystack); // [ ]

