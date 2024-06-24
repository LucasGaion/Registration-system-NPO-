<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela Inicial</title>
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="/styles/style.css">
    <style>
.certificacao-item {
    margin-top: 20px;
    margin-right: 20px;
    width: calc(33.33% - 20px);
    float: left;
    border-radius: 10px;
    overflow: hidden; 
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /
}

.certificacao-item img {
    width: 95%; 
    height: 70%; 
}

.certificacao-item p {
    font-size: 12px; 
    margin-bottom: 10px; 
    color: #838383; 
    margin-left: 10px; 
    margin-top: 10px;
}

.certificacao-item h5 {
    margin-top: -10px;
    font-size: 20px; 
    font-weight: bold; 
    margin-bottom: 10px; 
    color: #144d80; 
    margin-left: 10px; 
}


    </style>
</head>
<body>
<div class="wrapper d-flex align-items-stretch">
    <nav id="sidebar">
        <div class="custom-menu">
            <button type="button" id="sidebarCollapse" class="btn btn-primary">
                <i class="fa fa-bars"></i>
                <span class="sr-only">Toggle Menu</span>
            </button>
        </div>
        <div class="p-4 pt-5">
            <h1><a href="" class="logo">Tela inicial</a></h1>
            <ul class="list-unstyled components mb-5">
                <li>
                    <a href="#" id="minhas-certificacoes-link"><i class='bx bxs-certification'></i> Minhas Certificações</a>
                </li>
                <li>
                    <a href="#" id="cadastrar-link"><i class='bx bx-message-square-add'></i> Cadastrar Certificações</a>
                </li>
                <!--
                     <li>
                    <a href="/forms"><i class='bx bx-cloud'></i> Cloud forms</a>
                </li>
                -->
               
            </ul>
        </div>
    </nav>
    <div id="content" class="p-4 p-md-5 pt-5">
        <div id="formulario-cadastro" style="display: none;">
            <a href="#" id="cadastrar-link" style="font-size: 40px; color: #144d80;"><i class='bx bx-message-square-add'></i> Cadastrar Certificações</a>
            <form id="certification-form" action="#">
                <div class="form-group">
                    <label for="plataforma">Escolha sua Certificação:</label>
                    <select id="plataforma" name="plataforma" class="form-control" required>
                        <option value="">Selecione a certificação...</option>
                        <optgroup label="AWS">
                            <option value="AWS Certified Solutions Architect – Associate">AWS Certified Solutions Architect – Associate</option>
                            <option value="AWS Certified Developer – Associate">AWS Certified Developer – Associate</option>
                            <option value="AWS Certified SysOps Administrator – Associate">AWS Certified SysOps Administrator – Associate</option>
                            <option value="AWS Certified Solutions Architect – Professional">AWS Certified Solutions Architect – Professional</option>
                            <option value="AWS Certified DevOps Engineer – Professional">AWS Certified DevOps Engineer – Professional</option>
                            <option value="AWS Certified Advanced Networking – Specialty">AWS Certified Advanced Networking – Specialty</option>
                            <option value="AWS Certified Big Data – Specialty">AWS Certified Big Data – Specialty</option>
                            <option value="AWS Certified Security – Specialty">AWS Certified Security – Specialty</option>
                            <option value="AWS Certified Machine Learning – Specialty">AWS Certified Machine Learning – Specialty</option>
                            <option value="AWS Certified Database – Specialty">AWS Certified Database – Specialty</option>
                            <option value="AWS Certified SAP on AWS – Specialty">AWS Certified SAP on AWS – Specialty</option>
                        </optgroup>
                        <optgroup label="GCP">
                            <option value="GCP - Associate Cloud Engineer">GCP - Associate Cloud Engineer</option>
                            <option value="GCP - Professional Cloud Architect">GCP - Professional Cloud Architect</option>
                            <option value="GCP - Professional Data Engineer">GCP - Professional Data Engineer</option>
                            <option value="GCP - Professional Cloud Developer">GCP - Professional Cloud Developer</option>
                            <option value="GCP - Professional Cloud Network Engineer">GCP - Professional Cloud Network Engineer</option>
                            <option value="GCP - Professional Cloud Security Engineer">GCP - Professional Cloud Security Engineer</option>
                            <option value="GCP - Professional Machine Learning Engineer">GCP - Professional Machine Learning Engineer</option>
                            <option value="GCP - Professional DevOps Engineer">GCP - Professional DevOps Engineer</option>
                            <option value="GCP - Professional Collaboration Engineer">GCP - Professional Collaboration Engineer</option>
                        </optgroup>
                        <optgroup label="Azure">
                            <option value="Microsoft Certified: Azure Fundamentals">Microsoft Certified: Azure Fundamentals</option>
                            <option value="Microsoft Certified: Azure AI Fundamentals">Microsoft Certified: Azure AI Fundamentals</option>
                            <option value="Microsoft Certified: Azure Data Fundamentals">Microsoft Certified: Azure Data Fundamentals</option>
                            <option value="Microsoft Certified: Azure Administrator Associate">Microsoft Certified: Azure Administrator Associate</option>
                            <option value="Microsoft Certified: Azure Developer Associate">Microsoft Certified: Azure Developer Associate</option>
                            <option value="Microsoft Certified: Azure Security Engineer Associate">Microsoft Certified: Azure Security Engineer Associate</option>
                            <option value="Microsoft Certified: Azure AI Engineer Associate">Microsoft Certified: Azure AI Engineer Associate</option>
                            <option value="Microsoft Certified: Azure Database Administrator Associate">Microsoft Certified: Azure Database Administrator Associate</option>
                            <option value="Microsoft Certified: Azure Solutions Architect Associate">Microsoft Certified: Azure Solutions Architect Associate</option>
                        </optgroup>
                        <optgroup label="OCI">
                            <option value="Oracle Cloud Infrastructure Foundations Associate">Oracle Cloud Infrastructure Foundations Associate</option>
                            <option value="Oracle Cloud Infrastructure Architect Associate">Oracle Cloud Infrastructure Architect Associate</option>
                            <option value="Oracle Cloud Infrastructure Developer Associate">Oracle Cloud Infrastructure Developer Associate</option>
                            <option value="Oracle Cloud Infrastructure Operations Associate">Oracle Cloud Infrastructure Operations Associate</option>
                            <option value="Oracle Cloud Infrastructure Architect Professional">Oracle Cloud Infrastructure Architect Professional</option>
                            <option value="Oracle Cloud Infrastructure DevOps Professional">Oracle Cloud Infrastructure DevOps Professional</option>
                        </optgroup>
                        <optgroup label="Dell">
                            <option value="Dell EMC Certified Associate - Information Storage and Management (DECA-ISM)">Dell EMC Certified Associate - Information Storage and Management (DECA-ISM)</option>
                            <option value="Dell EMC Certified Specialist - Implementation Engineer (DCS-IE)">Dell EMC Certified Specialist - Implementation Engineer (DCS-IE)</option>
                            <option value="Dell EMC Certified Expert - Implementation Engineer (DCE-IE)">Dell EMC Certified Expert - Implementation Engineer (DCE-IE)</option>
                            <option value="Dell EMC Certified Master - Implementation Engineer (DCM-IE)">Dell EMC Certified Master - Implementation Engineer (DCM-IE)</option>
                        </optgroup>
                        <optgroup label="VmWare">
                            <option value="VMware Certified Digital Business Transformation Professional">VMware Certified Digital Business Transformation Professional</option>
                            <option value="VMware Certified Professional - Data Center Virtualization (VCP-DCV)">VMware Certified Professional - Data Center Virtualization (VCP-DCV)</option>
                            <option value="VMware Certified Advanced Professional - Data Center Virtualization Design (VCAP-DCV Design)">VMware Certified Advanced Professional - Data Center Virtualization Design (VCAP-DCV Design)</option>
                            <option value="VMware Certified Advanced Professional - Data Center Virtualization Deployment (VCAP-DCV Deploy)">VMware Certified Advanced Professional - Data Center Virtualization Deployment (VCAP-DCV Deploy)</option>
                            <option value="VMware Certified Design Expert - Data Center Virtualization (VCDX-DCV)">VMware Certified Design Expert - Data Center Virtualization (VCDX-DCV)</option>
                            <option value="VMware Certified Professional - Cloud Management and Automation (VCP-CMA)">VMware Certified Professional - Cloud Management and Automation (VCP-CMA)</option>
                            <option value="VMware Certified Advanced Professional - Cloud Management and Automation Design (VCAP-CMA Design)">VMware Certified Advanced Professional - Cloud Management and Automation Design (VCAP-CMA Design)</option>
                            <option value="VMware Certified Advanced Professional - Cloud Management and Automation Deployment (VCAP-CMA Deploy)">VMware Certified Advanced Professional - Cloud Management and Automation Deployment (VCAP-CMA Deploy)</option>
                            <option value="VMware Certified Design Expert - Cloud Management and Automation (VCDX-CMA)">VMware Certified Design Expert - Cloud Management and Automation (VCDX-CMA)</option>
                            <option value="VMware Certified Professional - Network Virtualization (VCP-NV)">VMware Certified Professional - Network Virtualization (VCP-NV)</option>
                            <option value="VMware Certified Advanced Professional - Network Virtualization Design (VCAP-NV Design)">VMware Certified Advanced Professional - Network Virtualization Design (VCAP-NV Design)</option>
                            <option value="VMware Certified Advanced Professional - Network Virtualization Deployment (VCAP-NV Deploy)">VMware Certified Advanced Professional - Network Virtualization Deployment (VCAP-NV Deploy)</option>
                            <option value="VMware Certified Design Expert - Network Virtualization (VCDX-NV)">VMware Certified Design Expert - Network Virtualization (VCDX-NV)</option>
                        </optgroup>
                        <optgroup label="Scrum">
                            <option value="Project Management Professional (PMP)">Project Management Professional (PMP)</option>
                            <option value="Certified Associate in Project Management (CAPM)">Certified Associate in Project Management (CAPM)</option>
                            <option value="Program Management Professional (PgMP)">Program Management Professional (PgMP)</option>
                            <option value="Portfolio Management Professional (PfMP)">Portfolio Management Professional (PfMP)</option>
                            <option value="Certified ScrumMaster (CSM)">Certified ScrumMaster (CSM)</option>
                            <option value="Certified Scrum Product Owner (CSPO)">Certified Scrum Product Owner (CSPO)</option>
                            <option value="Certified Scrum Developer (CSD)">Certified Scrum Developer (CSD)</option>
                            <option value="SAFe Agilist (SA)">SAFe Agilist (SA)</option>
                            <option value="SAFe Scrum Master (SSM)">SAFe Scrum Master (SSM)</option>
                            <option value="Professional Scrum Master (PSM)">Professional Scrum Master (PSM)</option>
                            <option value="Professional Scrum Product Owner (PSPO)">Professional Scrum Product Owner (PSPO)</option>
                            <option value="Disciplined Agile Scrum Master (DASM)">Disciplined Agile Scrum Master (DASM)</option>
                            <option value="Certified Scrum Associate (StudyScrum)">Certified Scrum Associate (StudyScrum)</option>
                        </optgroup>
                    </select>
                </div>
                <div class="form-group">
                    <label for="nome">Nome:</label>
                    <input type="text" class="form-control" id="nome" name="nome" placeholder="Ex.: AWS Certified Solutions Architect ‒ Associate" required>
                </div>
                <div class="form-group">
                    <label for="instituicao">Organização:</label>
                    <input type="text" class="form-control" id="instituicao" name="instituicao" placeholder="Ex.: AWS" required>
                </div>
                <div class="form-group">
                    <label for="url">URL da Credencial:</label>
                    <input type="text" class="form-control" id="url" name="url">
                </div>
                <div class="form-group">
                    <label for="dataa">Data de Expiração do Certificado:</label>
                    <input type="date" class="form-control" id="dataa" name="dataa" required>
                </div>
                <button type="submit" class="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    </div>
        <!-- Container para exibir as certificações -->
        <div id="certifications-container" class="row"></div>
        <!-- Lista de certificações (inicialmente oculta) -->
        <ul id="minhas-certificacoes-list" class="list-unstyled"></ul>
    </div>
</div>
<script src="js/jquery.min.js"></script>
<script src="js/popper.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/main.js"></script>

<script>
 const certificacoes = {
    "AWS Certified Solutions Architect – Associate": { nome: "AWS Certified Solutions Architect – Associate", organizacao: "AWS" },
    "AWS Certified Developer – Associate": { nome: "AWS Certified Developer – Associate", organizacao: "AWS" },
    "AWS Certified SysOps Administrator – Associate": { nome: "AWS Certified SysOps Administrator – Associate", organizacao: "AWS" },
    "AWS Certified Solutions Architect – Professional": { nome: "AWS Certified Solutions Architect – Professional", organizacao: "AWS" },
    "AWS Certified DevOps Engineer – Professional": { nome: "AWS Certified DevOps Engineer – Professional", organizacao: "AWS" },
    "AWS Certified Advanced Networking – Specialty": { nome: "AWS Certified Advanced Networking – Specialty", organizacao: "AWS" },
    "AWS Certified Big Data – Specialty": { nome: "AWS Certified Big Data – Specialty", organizacao: "AWS" },
    "AWS Certified Security – Specialty": { nome: "AWS Certified Security – Specialty", organizacao: "AWS" },
    "AWS Certified Machine Learning – Specialty": { nome: "AWS Certified Machine Learning – Specialty", organizacao: "AWS" },
    "AWS Certified Database – Specialty": { nome: "AWS Certified Database – Specialty", organizacao: "AWS" },
    "AWS Certified SAP on AWS – Specialty": { nome: "AWS Certified SAP on AWS – Specialty", organizacao: "AWS" },
    "GCP - Associate Cloud Engineer": { nome: "GCP - Associate Cloud Engineer", organizacao: "GCP" },
    "GCP - Professional Cloud Architect": { nome: "GCP - Professional Cloud Architect", organizacao: "GCP" },
    "GCP - Professional Data Engineer": { nome: "GCP - Professional Data Engineer", organizacao: "GCP" },
    "GCP - Professional Cloud Developer": { nome: "GCP - Professional Cloud Developer", organizacao: "GCP" },
    "GCP - Professional Cloud Network Engineer": { nome: "GCP - Professional Cloud Network Engineer", organizacao: "GCP" },
    "GCP - Professional Cloud Security Engineer": { nome: "GCP - Professional Cloud Security Engineer", organizacao: "GCP" },
    "GCP - Professional Machine Learning Engineer": { nome: "GCP - Professional Machine Learning Engineer", organizacao: "GCP" },
    "GCP - Professional DevOps Engineer": { nome: "GCP - Professional DevOps Engineer", organizacao: "GCP" },
    "GCP - Professional Collaboration Engineer": { nome: "GCP - Professional Collaboration Engineer", organizacao: "GCP" },
    "GCP - Professional Cloud Network Engineer": { nome: "GCP - Professional Cloud Network Engineer", organizacao: "GCP" },
    "GCP - Professional Cloud Security Engineer": { nome: "GCP - Professional Cloud Security Engineer", organizacao: "GCP" },
    "GCP - Professional Machine Learning Engineer": { nome: "GCP - Professional Machine Learning Engineer", organizacao: "GCP" },
    "GCP - Professional DevOps Engineer": { nome: "GCP - Professional DevOps Engineer", organizacao: "GCP" },
    "GCP - Professional Collaboration Engineer": { nome: "GCP - Professional Collaboration Engineer", organizacao: "GCP" },
    "Microsoft Certified: Azure Fundamentals": { nome: "Microsoft Certified: Azure Fundamentals", organizacao: "Azure" },
    "Microsoft Certified: Azure AI Fundamentals": { nome: "Microsoft Certified: Azure AI Fundamentals", organizacao: "Azure" },
    "Microsoft Certified: Azure Data Fundamentals": { nome: "Microsoft Certified: Azure Data Fundamentals", organizacao: "Azure" },
    "Microsoft Certified: Azure Administrator Associate": { nome: "Microsoft Certified: Azure Administrator Associate", organizacao: "Azure" },
    "Microsoft Certified: Azure Developer Associate": { nome: "Microsoft Certified: Azure Developer Associate", organizacao: "Azure" },
    "Microsoft Certified: Azure Security Engineer Associate": { nome: "Microsoft Certified: Azure Security Engineer Associate", organizacao: "Azure" },
    "Microsoft Certified: Azure AI Engineer Associate": { nome: "Microsoft Certified: Azure AI Engineer Associate", organizacao: "Azure" },
    "Microsoft Certified: Azure Database Administrator Associate": { nome: "Microsoft Certified: Azure Database Administrator Associate", organizacao: "Azure" },
    "Microsoft Certified: Azure Solutions Architect Associate": { nome: "Microsoft Certified: Azure Solutions Architect Associate", organizacao: "Azure" },
    "Oracle Cloud Infrastructure Foundations Associate": { nome: "Oracle Cloud Infrastructure Foundations Associate", organizacao: "OCI" },
    "Oracle Cloud Infrastructure Architect Associate": { nome: "Oracle Cloud Infrastructure Architect Associate", organizacao: "OCI" },
    "Oracle Cloud Infrastructure Developer Associate": { nome: "Oracle Cloud Infrastructure Developer Associate", organizacao: "OCI" },
    "Oracle Cloud Infrastructure Operations Associate": { nome: "Oracle Cloud Infrastructure Operations Associate", organizacao: "OCI" },
    "Oracle Cloud Infrastructure Architect Professional": { nome: "Oracle Cloud Infrastructure Architect Professional", organizacao: "OCI" },
    "Oracle Cloud Infrastructure DevOps Professional": { nome: "Oracle Cloud Infrastructure DevOps Professional", organizacao: "OCI" },
    "Dell EMC Certified Associate - Information Storage and Management (DECA-ISM)": { nome: "Dell EMC Certified Associate - Information Storage and Management (DECA-ISM)", organizacao: "Dell" },
    "Dell EMC Certified Specialist - Implementation Engineer (DCS-IE)": { nome: "Dell EMC Certified Specialist - Implementation Engineer (DCS-IE)", organizacao: "Dell" },
    "Dell EMC Certified Expert - Implementation Engineer (DCE-IE)": { nome: "Dell EMC Certified Expert - Implementation Engineer (DCE-IE)", organizacao: "Dell" },
    "Dell EMC Certified Master - Implementation Engineer (DCM-IE)": { nome: "Dell EMC Certified Master - Implementation Engineer (DCM-IE)", organizacao: "Dell" },
    "VMware Certified Digital Business Transformation Professional": { nome: "VMware Certified Digital Business Transformation Professional", organizacao: "VmWare" },
    "VMware Certified Professional - Data Center Virtualization (VCP-DCV)": { nome: "VMware Certified Professional - Data Center Virtualization (VCP-DCV)", organizacao: "VmWare" },
    "VMware Certified Advanced Professional - Data Center Virtualization Design (VCAP-DCV Design)": { nome: "VMware Certified Advanced Professional - Data Center Virtualization Design (VCAP-DCV Design)", organizacao: "VmWare" },
    "VMware Certified Advanced Professional - Data Center Virtualization Deployment (VCAP-DCV Deploy)": { nome: "VMware Certified Advanced Professional - Data Center Virtualization Deployment (VCAP-DCV Deploy)", organizacao: "VmWare" },
    "VMware Certified Design Expert - Data Center Virtualization (VCDX-DCV)": { nome: "VMware Certified Design Expert - Data Center Virtualization (VCDX-DCV)", organizacao: "VmWare" },
    "VMware Certified Professional - Cloud Management and Automation (VCP-CMA)": { nome: "VMware Certified Professional - Cloud Management and Automation (VCP-CMA)", organizacao: "VmWare" },
    "VMware Certified Advanced Professional - Cloud Management and Automation Design (VCAP-CMA Design)": { nome: "VMware Certified Advanced Professional - Cloud Management and Automation Design (VCAP-CMA Design)", organizacao: "VmWare" },
    "VMware Certified Advanced Professional - Cloud Management and Automation Deployment (VCAP-CMA Deploy)": { nome: "VMware Certified Advanced Professional - Cloud Management and Automation Deployment (VCAP-CMA Deploy)", organizacao: "VmWare" },
    "VMware Certified Design Expert - Cloud Management and Automation (VCDX-CMA)": { nome: "VMware Certified Design Expert - Cloud Management and Automation (VCDX-CMA)", organizacao: "VmWare" },
    "VMware Certified Professional - Network Virtualization (VCP-NV)": { nome: "VMware Certified Professional - Network Virtualization (VCP-NV)", organizacao: "VmWare" },
    "VMware Certified Advanced Professional - Network Virtualization Design (VCAP-NV Design)": { nome: "VMware Certified Advanced Professional - Network Virtualization Design (VCAP-NV Design)", organizacao: "VmWare" },
    "VMware Certified Advanced Professional - Network Virtualization Deployment (VCAP-NV Deploy)": { nome: "VMware Certified Advanced Professional - Network Virtualization Deployment (VCAP-NV Deploy)", organizacao: "VmWare" },
    "VMware Certified Design Expert - Network Virtualization (VCDX-NV)": { nome: "VMware Certified Design Expert - Network Virtualization (VCDX-NV)", organizacao: "VmWare" },
    "Project Management Professional (PMP)": { nome: "Project Management Professional (PMP)", organizacao: "Scrum" },
    "Certified Associate in Project Management (CAPM)": { nome: "Certified Associate in Project Management (CAPM)", organizacao: "Scrum" },
    "Program Management Professional (PgMP)": { nome: "Program Management Professional (PgMP)", organizacao: "Scrum" },
    "Portfolio Management Professional (PfMP)": { nome: "Portfolio Management Professional (PfMP)", organizacao: "Scrum" },
    "Certified ScrumMaster (CSM)": { nome: "Certified ScrumMaster (CSM)", organizacao: "Scrum" },
    "Certified Scrum Product Owner (CSPO)": { nome: "Certified Scrum Product Owner (CSPO)", organizacao: "Scrum" },
    "Certified Scrum Developer (CSD)": { nome: "Certified Scrum Developer (CSD)", organizacao: "Scrum" },
    "SAFe Agilist (SA)": { nome: "SAFe Agilist (SA)", organizacao: "Scrum" },
    "SAFe Scrum Master (SSM)": { nome: "SAFe Scrum Master (SSM)", organizacao: "Scrum" },
    "Professional Scrum Master (PSM)": { nome: "Professional Scrum Master (PSM)", organizacao: "Scrum" },
    "Professional Scrum Product Owner (PSPO)": { nome: "Professional Scrum Product Owner (PSPO)", organizacao: "Scrum" },
    "Disciplined Agile Scrum Master (DASM)": { nome: "Disciplined Agile Scrum Master (DASM)", organizacao: "Scrum" },
    "Certified Scrum Associate (StudyScrum)": { nome: "Certified Scrum Associate (StudyScrum)", organizacao: "Scrum" },
    "Lean Six Sigma Yellow Belt": { nome: "Lean Six Sigma Yellow Belt", organizacao: "" },
    "Lean Six Sigma Green Belt": { nome: "Lean Six Sigma Green Belt", organizacao: "" },
    "Lean Six Sigma Black Belt": { nome: "Lean Six Sigma Black Belt", organizacao: "" }
};


// Função para preencher automaticamente nome e organização ao selecionar uma certificação
document.getElementById('plataforma').addEventListener('change', function() {
    const nomeInput = document.getElementById('nome');
    const instituicaoInput = document.getElementById('instituicao');
    const plataforma = this.value;

    // Verifica se a plataforma está no mapeamento
    if (certificacoes.hasOwnProperty(plataforma)) {
        nomeInput.value = certificacoes[plataforma].nome;
        instituicaoInput.value = certificacoes[plataforma].organizacao;
    } else {
        nomeInput.value = '';
        instituicaoInput.value = '';
    }
}); 

</script>

<script type="module">

import { API } from 'aws-amplify';

const awsconfig = {
  aws_project_region: "us-east-1",
  aws_appsync_graphqlEndpoint: "https://cahg6u6ll5g6howq4n4bdrbvni.appsync-api.us-east-1.amazonaws.com/graphql",
  aws_appsync_region: "us-east-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-cvkka4f4efb5nj7gqvl4qiykfq"
};
API.configure(awsconfig);

async function submitCertificacaoData(formData) {
  console.log("Submitting form data:", formData);

  try {
    const graphqlQuery = `
      mutation CreateCertificacao($input: CreateCertificacoesInput!) {
        createCertificacao(input: $input) {
          id
          nomeCerti
          orgCerti
          urlCerti
          dataCerti
        }
      }
    `;

    const response = await API.graphql({
      query: graphqlQuery,
      variables: { input: formData }
    });

    console.log("GraphQL Response:", response);
    return response.data.createCertificacao;
  } catch (error) {
    console.error('Error submitting the certification:', error);
    throw error;
  }
}

document.getElementById('certification-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = {
    nomeCerti: document.getElementById('nome').value,
    orgCerti: document.getElementById('instituicao').value,
    urlCerti: document.getElementById('url').value,
    dataCerti: document.getElementById('dataa').value
  };

  console.log("Form data collected:", formData);

  submitCertificacaoData(formData)
    .then(result => {
      console.log('Certificação enviada com sucesso!', result);
      window.location.href = 'user.html';
    })
    .catch(error => {
      console.error('Erro ao enviar a certificação:', error);
      document.getElementById('confirmationMessage').innerText = 'Erro ao enviar a certificação.';
      document.getElementById('confirmationForms').style.display = 'block';
    });
});

async function fetchCertificacoes() {
  try {
    const graphqlQuery = `
      query ListCertificacoes {
        listCertificacoes {
          items {
            id
            nomeCerti
            orgCerti
            urlCerti
            dataCerti
          }
        }
      }
    `;

    const response = await API.graphql({ query: graphqlQuery });
    return response.data.listCertificacoes.items;
  } catch (error) {
    console.error('Error fetching certifications:', error);
    throw error;
  }
}

document.addEventListener('DOMContentLoaded', async function() {
  try {
    const certificacoes = await fetchCertificacoes();
    const minhasCertificacoesList = document.getElementById('minhas-certificacoes-list');

    minhasCertificacoesList.innerHTML = '';

    if (certificacoes.length > 0) {
      certificacoes.forEach(certificacao => {
        const dataFormatada = new Date(certificacao.dataCerti).toLocaleDateString('pt-BR');
        const certificacaoItem = document.createElement('li');
        certificacaoItem.innerHTML = `
          <div class="certificacao-item">
            <p>Nome da Certificação:</p>   
            <h5>${certificacao.nomeCerti}</h5>
            <p>Nome da Instituição:</p>  
            <h5>${certificacao.orgCerti}</h5>
            <p>Data da Certificação:</p>  
            <h5>${dataFormatada}</h5>
            <a href="${certificacao.urlCerti}" class="btn btn-primary" target="_blank">Acessar URL</a>
          </div>
        `;
        minhasCertificacoesList.appendChild(certificacaoItem);
      });
    } else {
      minhasCertificacoesList.innerHTML = '<p>Nenhuma certificação encontrada.</p>';
    }
  } catch (error) {
    console.error('Erro ao buscar certificações do usuário:', error.message);
  }
});

document.getElementById('cadastrar-link').addEventListener('click', function() {
  document.getElementById('formulario-cadastro').style.display = 'block';
  document.getElementById('minhas-certificacoes-list').style.display = 'none';
});

document.getElementById('minhas-certificacoes-link').addEventListener('click', function() {
  document.getElementById('minhas-certificacoes-list').style.display = 'block';
  document.getElementById('formulario-cadastro').style.display = 'none';
});

  </script>



</body>
</html>
