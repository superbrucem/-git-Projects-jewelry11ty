module.exports = function(eleventyConfig) {
    // Copy _redirects file to output directory
    eleventyConfig.addPassthroughCopy("src/_redirects");

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};
