export const groupBy = (collection, iterator) => {
	if(typeof iterator === 'function') {
		let returnObject = {}
		collection.map( item => iterator(item)).forEach( (iteratorResult,index) => {
			if(!returnObject[iteratorResult]) returnObject[iteratorResult] = [];
			returnObject[iteratorResult].push(collection[index])
		})
		return returnObject
	}
	else {
		let returnObject = {}
		collection.forEach( (item, index) => {
			// console.log(iterator)
			if(!returnObject[item[iterator]]) returnObject[item[iterator]] = [];
			returnObject[item[iterator]].push(collection[index])
			// returnObject[iteratorResult].push(collection[index])
		})
		return returnObject
	}
};

export const flowRight = (...functions) => (args) => {
	// console.log(args)
	var argumentReturn = args
	for (var i = functions.length - 1; i >= 0; i--) {
		argumentReturn = functions[i](argumentReturn)
	}
	return argumentReturn
}
