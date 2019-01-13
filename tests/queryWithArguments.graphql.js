const input = `
{
  human (id: "1000") {
    name
    height(unit: FOOT)
  }
}
`;

const expected = '{human(id:"1000"){name height(unit:FOOT)}}';

module.exports = {
  input,
  expected
};
