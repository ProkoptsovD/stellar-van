async function fetchPictures(url) {
	try {
		const API_TOKEN_KEY = 'uZ93zIUZZ08x091WbVdN2tF9bOOtlGgHJj75regR';
		const options = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				'Access-Control-Allow-Headers': '*',
				'Access-Control-Allow-Methods': '*',
				'Access-Control-Allow-Origin': '*',
			},
			referrerPolicy: 'no-referrer',
		};
		const combinedUrl = `${url}?api_key=${API_TOKEN_KEY}`;

		return fetch(combinedUrl, options);
	} catch (err) {
		console.log(err);
	}
}

export { fetchPictures };
