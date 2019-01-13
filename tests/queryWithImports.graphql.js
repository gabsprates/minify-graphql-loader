const input = `
#import "./friends.graphql"
#import "./heros.graphql"

{
  hero {
    ...HeroFragment
    friends {
      ...FriendsFragment
    }
  }
}
`;

const expected = `#import "./friends.graphql"
#import "./heros.graphql"
{hero{...HeroFragment friends{...FriendsFragment}}}`;

module.exports = {
  input,
  expected
};
