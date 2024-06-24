import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './src/aws-exports.js'; // Adjust the path according to your project structure

console.log('Amplify:', Amplify);
console.log('API:', API);
console.log('graphqlOperation:', graphqlOperation);

if (Amplify) {
  try {
    Amplify.configure(awsconfig);
    console.log('AWS Config:', awsconfig);
  } catch (error) {
    console.error('Error configuring Amplify:', error);
  }
} else {
  console.error('Invalid Amplify:', Amplify);
}

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

    const response = await API.graphql(graphqlOperation(graphqlQuery, { input: formData }));

    console.log("GraphQL Response:", response);
    return response.data.createForms; // Returns the created form data
  } catch (error) {
    console.error('Error submitting the form:', error);
    throw error; // Throw the error for further handling if needed
  }
}

// Simulated form data
const formData = {
  areaAtuacao: "Time - Linux",
  tempoEstudo: "De 30 minutos a 1 hora",
  nivelCloud: "Iniciante",
  conhecimentoAws: "Intermediário",
  conhecimentoRedes: "Iniciante",
  conhecimentoArmazenamento: "Iniciante",
  conhecimentoVirtualizacao: "Iniciante",
  conhecimentoWindows: "Iniciante",
  conhecimentoLinux: "Iniciante",
  conhecimentoSeguranca: "Iniciante",
  conhecimentoIAM: "Iniciante"
};

console.log("Form data collected:", formData);

submitFormData(formData)
  .then(result => {
    console.log('Formulário enviado com sucesso!', result);
    // Handle successful submission, such as redirecting or displaying a message
  })
  .catch(error => {
    console.error('Erro ao enviar o formulário:', error);
    // Handle error in submission, such as displaying an error message
  });
