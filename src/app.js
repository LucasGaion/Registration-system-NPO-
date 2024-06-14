// Configurar o AWS Amplify com as credenciais da API GraphQL
Amplify.configure({
    aws_appsync_graphqlEndpoint: 'https://k6jh3i6dcbdlzb3ixfb2olcepm.appsync-api.us-east-1.amazonaws.com/graphql',
    aws_appsync_region: 'us-east-1',
    aws_appsync_authenticationType: 'API_KEY',
    aws_appsync_apiKey: 'da2-4zajv4ui3rdyxjbdnzeiafvvwi',
  });
  
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
  
        const response = await Amplify.API.graphql({
          query: graphqlQuery,
          variables: {
            input: formObject
          }
        });
  
        console.log('Dados salvos com sucesso:', response);
  
        // Redirecionar para user.html após o sucesso
        window.location.href = 'user.html';
  
      } catch (error) {
        console.error('Erro ao salvar dados:', error);
        alert('Erro ao salvar dados. Por favor, tente novamente mais tarde.');
      }
    });
  });
  