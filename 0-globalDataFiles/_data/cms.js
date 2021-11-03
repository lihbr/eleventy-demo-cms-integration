const debug = require("debug")("Eleventy:Demo");

// This function mocks the use of a CMS client that actually gets data from a CMS.
const getCMSData = () => new Promise((resolve) => {
	setTimeout(() => {
		resolve({
			pages: [
				{
					id: 'home',
					title: 'Home',
				},
				{
					id: 'about',
					title: 'About',
				},
			],
		});
	}, 500);
});

module.exports = async () => {
	const data = await getCMSData();

	debug(data);

	return data;
};
