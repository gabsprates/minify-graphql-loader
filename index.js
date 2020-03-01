const { stripIgnoredCharacters } = require("graphql/utilities");

module.exports = function(source) {
  var imports = [];

  var sourceWithoutImports = source.replace(/^#import.*/gm, matched => {
    imports.push(matched);
    return "";
  });

  var minified = stripIgnoredCharacters(sourceWithoutImports);

  return [...imports, minified].join("\n");
};
