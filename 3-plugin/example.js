const plugin = require("eleventy-demo-cms-integration.3");

module.exports = (eleventyConfig) => {
	/**
	 * @type {import("eleventy-demo-cms-integration.3").PluginOptions}
	 */
	const options = {
		endpoint: "https://example.com"
	};

	eleventyConfig.addPlugin(plugin, options);
};
