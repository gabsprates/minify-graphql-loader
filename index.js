module.exports = function(source) {
  var imports = [];

  var minified = source
    .replace(/^#import.*/gm, matched => {
      imports.push(matched);
      return "";
    })
    .replace(/#.*/g, "")
    .replace(/\s(?![a-zA-Z])/g, "")
    .replace(/:\s+/g, ":")
    .replace(/\{\s?/g, "{")
    .replace(/\}\s?/g, "}");

  return [...imports, minified].join("\n");
};
