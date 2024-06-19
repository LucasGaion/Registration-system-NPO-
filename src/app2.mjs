import { Amplify } from 'aws-amplify';

// Configuração do AWS Amplify
const awsconfig = {
  aws_project_region: "us-east-1",
  aws_appsync_graphqlEndpoint: "https://cahg6u6ll5g6howq4n4bdrbvni.appsync-api.us-east-1.amazonaws.com/graphql",
  aws_appsync_region: "us-east-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-cvkka4f4efb5nj7gqvl4qiykfq"
};
Amplify.configure(awsconfig);

// Função para enviar dados para a API GraphQL
async function submitFormData(formData) {
  try {
    const graphqlQuery = `
      mutation CreateForms($input: CreateFormsInput!) {
        createForms(input: $input) {
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
        }
      }
    `;

    const response = await API.graphql({
      query: graphqlQuery,
      variables: {
        input: formData
      }
    });

    return response.data.createForms; // Retorna os dados do formulário criado
  } catch (error) {
    console.error('Erro ao enviar o formulário:', error);
    throw error; // Lança o erro para tratamento posterior, se necessário
  }
}

// Exemplo de uso:
const formData = {
  areaAtuacao: 'Time - Comercial',
  tempoEstudo: 'De 1 hora a 2 horas',
  nivelCloud: 'Intermediário',
  conhecimentoAws: 'Intermediário',
  conhecimentoRedes: 'Intermediário',
  conhecimentoArmazenamento: 'Intermediário',
  conhecimentoVirtualizacao: 'Intermediário',
  conhecimentoWindows: 'Intermediário',
  conhecimentoLinux: 'Intermediário',
  conhecimentoSeguranca: 'Intermediário',
  conhecimentoIAM: 'Intermediário'
};

submitFormData(formData)
  .then(result => {
    console.log('Formulário enviado com sucesso!', result);
    // Aqui você pode realizar ações adicionais após o envio bem-sucedido
  })
  .catch(error => {
    console.error('Erro ao enviar o formulário:', error);
    // Tratamento de erro, se necessário
  });
