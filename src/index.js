
exports.min = function min (array) {

	if (array == undefined || array[0] == undefined) {
		return 0;
	}

	array = array.sort(function(a, b) {
	  return a - b;
	});
  	return array[0];
}

exports.max = function max (array) {
	if (array == undefined || array[0] == undefined) {
		return 0;
	}
	array = array.sort(function(a, b) {
	  return a - b;
	});
  	return array[array.length - 1];
}

exports.avg = function avg (array) {
	if (array == undefined || array[0] == undefined) {
		return 0;
	}
	array = array.sort(function(a, b) {
	  return a - b;
	});	

	let sum = 0;

	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}

  return (sum / array.length);
}
