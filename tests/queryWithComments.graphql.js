const input = `
{
  # Queries can have comments!
  hero {
    # A lot of them!!!
    name
    friends {
      # Really!
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
