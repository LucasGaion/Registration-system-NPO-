import { API } from 'aws-amplify';

// Configuração do AWS Amplify
const awsconfig = {
  aws_project_region: "us-east-1",
  aws_appsync_graphqlEndpoint: "https://cahg6u6ll5g6howq4n4bdrbvni.appsync-api.us-east-1.amazonaws.com/graphql",
  aws_appsync_region: "us-east-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-cvkka4f4efb5nj7gqvl4qiykfq"
};
API.configure(awsconfig);

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

// Adiciona o listener para o evento de submit do formulário
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  const formData = {
    areaAtuacao: document.getElementById('areaAtuacao').value,
    tempoEstudo: document.getElementById('tempoEstudo').value,
    nivelCloud: document.getElementById('nivelCloud').value,
    conhecimentoAws: document.getElementById('conhecimentoAws').value,
    conhecimentoRedes: document.getElementById('conhecimentoRedes').value,
    conhecimentoArmazenamento: document.getElementById('conhecimentoArmazenamento').value,
    conhecimentoVirtualizacao: document.getElementById('conhecimentoVirtualizacao').value,
    conhecimentoWindows: document.getElementById('conhecimentoWindows').value,
    conhecimentoLinux: document.getElementById('conhecimentoLinux').value,
    conhecimentoSeguranca: document.getElementById('conhecimentoSeguranca').value,
    conhecimentoIAM: document.getElementById('conhecimentoIAM').value
  };

  submitFormData(formData)
    .then(result => {
      console.log('Formulário enviado com sucesso!', result);
      window.location.href = 'user.html'; // Redireciona para user.html
    })
    .catch(error => {
      console.error('Erro ao enviar o formulário:', error);
      document.getElementById('confirmationMessage').innerText = 'Erro ao enviar o formulário.';
      document.getElementById('confirmationForms').style.display = 'block';
    });
});
