/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getForm = /* GraphQL */ `
  query GetForm($id: ID!) {
    getForm(id: $id) {
      id
      areaAtuacao
      tempoEstudo
      nivelCloud
      conhecimentoAws
      conhecimentoRedes
      conhecimentoArmazenamento
      conhecimentoVirtualizacao
      conhecimentoWindows
      conhecimentoLinux
      conhecimentoSeguranca
      conhecimentoIAM
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listForms = /* GraphQL */ `
  query ListForms(
    $filter: ModelFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        areaAtuacao
        tempoEstudo
        nivelCloud
        conhecimentoAws
        conhecimentoRedes
        conhecimentoArmazenamento
        conhecimentoVirtualizacao
        conhecimentoWindows
        conhecimentoLinux
        conhecimentoSeguranca
        conhecimentoIAM
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
