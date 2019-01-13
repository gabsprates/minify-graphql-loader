const input = `
{
  me {
    age
    name
    height
  }
}
`;

const expected = "{me{age name height}}";

module.exports = {
  input,
  expected
};
