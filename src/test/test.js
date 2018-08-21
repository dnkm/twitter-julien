function fetchDB() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([ 1, 2, 3 ]);
		}, 2000);
	});
}

fetchDB()
	.then((data) => {
		console.log(data);
		return fetchDB();
	})
	.then((data) => {
		console.log(data);
	});
