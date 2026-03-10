module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assests": "assets" });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
