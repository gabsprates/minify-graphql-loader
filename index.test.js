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
});
