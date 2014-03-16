function indicesOf(searchStr, str, start) {

	var
		index,
		result = [];

	var searchStrLen = searchStr.length;

	while ((index = str.indexOf(searchStr, start)) !== -1) {
		result.push(index);
		start = index + searchStrLen;
	}

	return result;

}

module.exports = indicesOf;
