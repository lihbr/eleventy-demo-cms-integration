const debug = require("debug")("Eleventy:Demo");
// This function mocks the use of a CMS client that actually gets data from a CMS.
const { getCMSData } = require("your-favorite-cms");

module.exports = async () => {
	const data = await getCMSData();

	debug(data);

	return data;
};
