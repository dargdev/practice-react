// const getImagenPromes = () => {
// 	const promesa = new Promise((resolove, reject) => {
// 		resolove('hay data');
// 	});
// 	return promesa;
// };

// getImagenPromes().then(console.log);

const getImagen = async () => {
	try {
		const apiKey = 'pWjXutJC83GT5dUf1FrycpNRvbGuFjQC';

		const resp = await fetch(
			`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
		);
		const { data } = await resp.json();

		console.log(data);
		const { url } = data.images.original;
		const img = document.createElement('img');
		img.src = url;
		document.body.append(img);
	} catch (error) {
		console.log('error');
	}
};

getImagen();
