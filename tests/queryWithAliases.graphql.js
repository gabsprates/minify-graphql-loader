const input = `
{
  empireHero: hero(episode: EMPIRE) {
    name
  }
  jediHero: hero(episode: JEDI) {
    name
  }
}
`;

const expected = `{empireHero:hero(episode:EMPIRE){name}jediHero:hero(episode:JEDI){name}}`;

module.exports = {
  input,
  expected
};
