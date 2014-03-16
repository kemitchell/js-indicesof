function indicesOf(searchStr, str, start) {

	var
		index,
		result = [];

	if (typeof startIndex === 'undefined') start = 0;

	var searchStrLen = searchStr.length;

	while ((index = str.indexOf(searchStr, start)) !== -1) {
		result.push(index);
		start = index + searchStrLen;
	}

	return result;

}

module.exports = indicesOf;
