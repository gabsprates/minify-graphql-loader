const minify = require("./index");

describe("minify-graphql-loader", () => {
  it("should return an empty string", () => {
    expect(minify("")).toEqual("");
  });

  describe("simple query", () => {
    const simpleQuery = require("./tests/simpleQuery.graphql");

    it("should return a minified simple query", () => {
      expect(minify(simpleQuery.input)).toEqual(simpleQuery.expected);
    });
  });

  describe("query with arguments", () => {
    const queryWithArguments = require("./tests/queryWithArguments.graphql");

    it("should return a minified query with arguments", () => {
      expect(minify(queryWithArguments.input)).toEqual(
        queryWithArguments.expected
      );
    });
  });

  describe("query with comments", () => {
    const queryWithComments = require("./tests/queryWithComments.graphql");

    it("should return a minified query without comments", () => {
      expect(minify(queryWithComments.input)).toEqual(
        queryWithComments.expected
      );
    });
  });

  describe("query with imports", () => {
    const queryWithImports = require("./tests/queryWithImports.graphql");

    it("should return a minified query with imports, each in a line", () => {
      expect(minify(queryWithImports.input)).toEqual(queryWithImports.expected);
    });
  });

  describe("query with aliases", () => {
    const queryWithAliases = require("./tests/queryWithAliases.graphql");

    it("should return a minified query with aliases", () => {
      expect(minify(queryWithAliases.input)).toEqual(queryWithAliases.expected);
    });
  });

  describe("query with variables", () => {
    const queryWithVariables = require("./tests/queryWithVariables.graphql");

    it("should return a minified query with variables", () => {
      expect(minify(queryWithVariables.input)).toEqual(
        queryWithVariables.expected
      );
    });
  });

  describe("query with variables2", () => {
    const queryWithVariables2 = require("./tests/queryWithVariables2.graphql");

    it("should return a minified query with variables", () => {
      expect(minify(queryWithVariables2.input)).toEqual(
        queryWithVariables2.expected
      );
    });
  });
});
