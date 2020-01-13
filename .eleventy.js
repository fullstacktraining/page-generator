module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'template/css': 'css' })
  eleventyConfig.addPassthroughCopy({ 'template/vendor': 'vendor' })
  eleventyConfig.addPassthroughCopy('app.js');
};