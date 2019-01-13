const input = `
{
  hero {
    name
    # Queries can have comments!
    friends {
      name
      id
    }
  }
}
`;

const expected = "{hero{name friends{name id}}}";

module.exports = {
  input,
  expected
};
