module.exports = function(source) {
  var minified = source
    .replace(/\s(?![a-zA-Z])/g, "")
    .replace(/:\s+/g, ":")
    .replace(/\{\s?/g, "{");

  return minified;
};
