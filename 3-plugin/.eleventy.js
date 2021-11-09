const debug = require("debug")("Eleventy:Demo");
// This function mocks the use of a CMS client that actually gets data from a CMS.
const { getCMSData } = require("your-favorite-cms");

module.exports = (eleventyConfig, pluginOptions) => {
	// This is a pattern to cache data that came from the CMS so that 11ty doesn't execute this function for every pages.
	const cmsData = (async () => {
		const data = await getCMSData(pluginOptions.endpoint);

		debug(data);

		return data;
	})();

	eleventyConfig.addGlobalData("cms", () => cmsData);
};
