import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm');
  const confirmationForms = document.getElementById('confirmationForms');
  const confirmationMessage = document.getElementById('confirmationMessage');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Obter dados do formulário
    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => formObject[key] = value);

    try {
      // Chamar a mutação GraphQL para salvar os dados
      const graphqlQuery = `
        mutation CreateForm($input: CreateFormInput!) {
          createForm(input: $input) {
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

      const response = await API.graphql(graphqlOperation(graphqlQuery, { input: formObject }));

      console.log('Dados salvos com sucesso:', response);

      // Redirecionar para user.html após o sucesso
      window.location.href = 'user.html';

    } catch (error) {
      console.error('Erro ao salvar dados:', error);
      alert('Erro ao salvar dados. Por favor, tente novamente mais tarde.');
    }
  });
});
