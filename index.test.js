const minify = require("./index");

describe("minify-graphql-loader", () => {
  it("should return an empty string", () => {
    expect(minify("")).toEqual("");
  });
});
