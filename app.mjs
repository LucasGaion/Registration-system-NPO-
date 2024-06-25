
import { API } from 'aws-amplify';
import _ from 'lodash';

// AWS Amplify configuration
const awsconfig = {
  aws_project_region: "us-east-1",
  aws_appsync_graphqlEndpoint: "https://cahg6u6ll5g6howq4n4bdrbvni.appsync-api.us-east-1.amazonaws.com/graphql",
  aws_appsync_region: "us-east-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-cvkka4f4efb5nj7gqvl4qiykfq"
};
API.configure(awsconfig);

console.log("AWS Config:", awsconfig);

// Function to submit form data to GraphQL API
async function submitFormData(formData) {
  console.log("Submitting form data:", formData);

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
      variables: { input: formData }
    });

    console.log("GraphQL Response:", response);
    return response.data.createForms; // Returns the created form data
  } catch (error) {
    console.error('Error submitting the form:', error);
    throw error; // Throw the error for further handling if needed
  }
}

// Add listener for form submit event
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

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

  console.log("Form data collected:", formData);

  submitFormData(formData)
    .then(result => {
      console.log('Formulário enviado com sucesso!', result);
      window.location.href = 'user.html'; // Redirect to user.html upon successful submission
    })
    .catch(error => {
      console.error('Erro ao enviar o formulário:', error);
      document.getElementById('confirmationMessage').innerText = 'Erro ao enviar o formulário.';
      document.getElementById('confirmationForms').style.display = 'block'; // Display error message to user
    });
});


