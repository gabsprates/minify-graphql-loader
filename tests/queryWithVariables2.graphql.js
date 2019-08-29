const input = `
#import "../../fragments/image.graphql"
#import "../../fragments/music.graphql"

query FAKE_QUERY_1(
  $variable1: Int!
  $variable2: Boolean
  $variable3: Boolean!
  $variable4: String
  $variable5: Int
) {
  fake_query_1(variable1: $variable1, variable4: $variable4) {
    ...FAKE_FRAGMENT_1
  }
}

query FAKE_QUERY_2(
  $variable2: Boolean
  $variable3: Boolean!
  $variable4: String
  $variable5: Int
) {
  alias_query: fake_query {
    ...FAKE_FRAGMENT_1
  }
}

fragment FAKE_FRAGMENT_1 on EntityFake1 {
  id
  fake_query_2(variable2: $variable2, variable5: $variable5)
    @include(if: $variable3) {
    __typename
    ... on EntityFake2 {
      ...FAKE_FRAGMENT_2
    }
    ... on EntityFake3 {
      ...FAKE_FRAGMENT_3
    }
    ... on EntityFake4 {
      ..._FAKE_FRAGMENT_4
    }
  }
}

fragment FAKE_FRAGMENT_2 on EntityFake2 {
  data1
}

fragment FAKE_FRAGMENT_3 on EntityFake3 {
  data2
}

fragment _FAKE_FRAGMENT_4 on EntityFake4 {
  data3
}
`;

const expected = `#import "../../fragments/image.graphql"
#import "../../fragments/music.graphql"
query FAKE_QUERY_1($variable1:Int!,$variable2:Boolean,$variable3:Boolean!,$variable4:String,$variable5:Int){fake_query_1(variable1:$variable1,variable4:$variable4){...FAKE_FRAGMENT_1}}query FAKE_QUERY_2($variable2:Boolean,$variable3:Boolean!,$variable4:String,$variable5:Int){alias_query:fake_query{...FAKE_FRAGMENT_1}}fragment FAKE_FRAGMENT_1 on EntityFake1{id fake_query_2(variable2:$variable2,variable5:$variable5)@include(if:$variable3){__typename ... on EntityFake2{...FAKE_FRAGMENT_2}... on EntityFake3{...FAKE_FRAGMENT_3}... on EntityFake4{..._FAKE_FRAGMENT_4}}}fragment FAKE_FRAGMENT_2 on EntityFake2{data1}fragment FAKE_FRAGMENT_3 on EntityFake3{data2}fragment _FAKE_FRAGMENT_4 on EntityFake4{data3}`;

module.exports = {
  input,
  expected
};
