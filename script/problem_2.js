const getObjectFromAjax = () => {

	return new Promise(function (resolve, reject) {
		$.ajax({
				url: '//www.mocky.io/v2/59f0b799310000d11e0ea035',
				dataType: 'json',
				success: (result) => {
					console.log(typeof result);
					console.log(result);
					resolve(result);
				},
				error: (xhr, ajaxOptions, thrownError) => {
					reject({xhr, ajaxOptions, thrownError});
				}
			}
		);
	});
};

const findNode = (graph, id) => {
	let i,
		currentChild,
		result;
	if (Array.isArray(graph)) {
		graph = graph[0];
	}

	if (id === graph.id) {
		return graph;
	} else {

		if (Array.isArray(graph.child)) {
			for (i = 0; i < graph.child.length; i += 1) {
				currentChild = graph.child[i];

				result = findNode(currentChild, id);

				if (!!result) {
					return result;
				}
			}
		}
		return false;
	}
};


const graphPromise = getObjectFromAjax();

graphPromise.then((graph) => {
	//alert('Object loaded. See console.');

	let searchId = 8;
	let searchGraph = findNode(graph, searchId);
	if (searchGraph) {
		//alert(`Label ${searchGraph.label}`);
	}
});

