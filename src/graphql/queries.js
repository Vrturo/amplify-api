/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBetaAmplifySampleTable = /* GraphQL */ `
  query GetBetaAmplifySampleTable($id: ID!) {
    getBetaAmplifySampleTable(id: $id) {
      id
      title
    }
  }
`;
export const listBetaAmplifySampleTables = /* GraphQL */ `
  query ListBetaAmplifySampleTables(
    $filter: TableBetaAmplifySampleTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBetaAmplifySampleTables(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
      }
      nextToken
    }
  }
`;
