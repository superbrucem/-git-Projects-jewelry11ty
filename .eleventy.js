module.exports = function(eleventyConfig) {
    // Copy _redirects file to output directory
    eleventyConfig.addPassthroughCopy("src/_redirects");

    // Copy admin directory
    eleventyConfig.addPassthroughCopy("src/admin");

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};
