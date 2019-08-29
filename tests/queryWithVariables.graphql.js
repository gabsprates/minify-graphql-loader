const input = `
query Movie($filmID: ID!, $id: ID) {
  film(filmID: $filmID, id: $id) {
    title
  }
  allFilms {
    edges {
      node {
        title
        id
        episodeID
      }
    }
  }
}
`;

const expected = `query Movie($filmID:ID!,$id:ID){film(filmID:$filmID,id:$id){title}allFilms{edges{node{title id episodeID}}}}`;

module.exports = {
  input,
  expected
};
