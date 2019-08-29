module.exports = function(source) {
  var imports = [];

  var minified = source
    .replace(/^#import.*/gm, matched => {
      imports.push(matched);
      return "";
    })
    .replace(/#.*/g, "")
    .replace(/\s(?![a-zA-Z_\.])/g, "")
    .replace(/(?<![\(\,\:])\$/g, ",$")
    .replace(/:\s+/g, ":")
    .replace(/,\s+/g, ",")
    .replace(/\{\s?/g, "{")
    .replace(/\}\s?/g, "}")
    .trim();

  return [...imports, minified].join("\n");
};
