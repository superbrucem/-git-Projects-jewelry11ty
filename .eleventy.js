module.exports = function(eleventyConfig) {
    // Copy _redirects file to output directory
    eleventyConfig.addPassthroughCopy("src/_redirects");

    // Copy images folder to output directory
    eleventyConfig.addPassthroughCopy("src/images");

    // Add a filter to get the current year
    eleventyConfig.addFilter("currentYear", () => {
        return new Date().getFullYear();
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};
