module.exports = function(source) {
  var minified = source
    .replace(/(\s)?\{(\s)?/gm, "{")
    .replace(/\s\s/gm, "")
    .replace(/(\s)?\}(\s)?/gm, "}");

  return minified;
};
