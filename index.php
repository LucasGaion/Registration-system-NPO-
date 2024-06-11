<?php
// Inicia a sessão PHP
session_start();

// Verifica se o código de autorização está presente na URL
if (isset($_GET['code'])) {
    $code = $_GET['code']; // Captura o código de autorização do URL

    // Dados necessários para a solicitação do token de acesso
    $client_id = '8cf6d21d-6371-4da7-9eca-a4aac477492d';
    //$client_secret = 'SEU_CLIENT_SECRET';
    $redirect_uri = 'https://assinaturas.nposistemas.com.br/forms.php';
    $token_endpoint = 'https://login.microsoftonline.com/3d43e001-1b92-4697-b855-1d8ca369b21e/oauth2/v2.0/token';

    // Parâmetros da solicitação do token de acesso
    $params = array(
        'grant_type' => 'authorization_code',
        'client_id' => $client_id,
        //'client_secret' => $client_secret,
        'redirect_uri' => $redirect_uri,
        'code' => $code
    );

    // Realiza a solicitação HTTP POST para obter o token de acesso
    $ch = curl_init($token_endpoint);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($params));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    // Decodifica a resposta JSON para um array associativo
    $token_data = json_decode($response, true);

    // Verifica se o token de acesso foi recebido
    if (isset($token_data['access_token'])) {
        // Salva o token de acesso na variável de sessão
        $_SESSION['access_token'] = $token_data['access_token'];
    } else {
        
    }
} else {
    // Se o código de autorização não estiver presente na URL, redireciona para a página de login
    header("Location: index.php");
    exit();
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Forms</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="/public/styles/forms.css">
</head>
<body>

  <script>
    // Configurações do provedor de autenticação OAuth 2.0
    const clientId = '8cf6d21d-6371-4da7-9eca-a4aac477492d';
    const authorizationEndpoint = 'https://login.microsoftonline.com/3d43e001-1b92-4697-b855-1d8ca369b21e/oauth2/v2.0/authorize';
    const redirectUri = 'https://main.d3eu9x1bmwpywj.amplifyapp.com/forms'; 
    const responseType = 'code';
    const scope = 'openid email profile';

    // Redirecionar automaticamente ao provedor
    const authorizationUrl = `${authorizationEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
    window.location.href = authorizationUrl;
</script>
  
  <div class="container mt-5">
    <form action="/forms/salvar" method="POST" id="myForm">
      <img src="/public/img/logoNPOnovo.png" alt="Logo NPO" id="logo">

    

      <div class="form-group">
        <label for="areaAtuacao">Qual sua área de atuação na NPO?</label>
        <select id="areaAtuacao" name="areaAtuacao" class="form-control" required>
          <option value="Time - Comercial">Time - Comercial</option>
          <option value="Time - Cloud/Devops">Time - Cloud/Devops</option>
          <option value="Time - Backup">Time - Backup</option>
          <option value="Time - Linux">Time - Linux</option>
          <option value="Time - Windows">Time - Windows</option>
          <option value="Time - Oracle">Time - Oracle</option>
          <option value="Time - Sql">Time - Sql</option>
          <option value="Time - Monitoramento Técnico - VmWare">Time - Monitoramento Técnico - VmWare</option>
          <option value="Time - N2">Time - N2</option>
          <option value="Time - Segurança">Time - Segurança</option>
          <option value="Time - Marketing">Time - Marketing</option>
          <option value="Time - RH">Time - RH</option>
          <option value="Time - Projetos">Time - Projetos</option>
          <option value="Time - Governança">Time - Governança</option>
          <option value="Time - Liderança Técnica">Time - Liderança Técnica</option>
          <option value="Time - Gestão">Time - Gestão</option>
        </select>
      </div>

      <div class="form-group">
        <label for="tempoEstudo">Quanto tempo você teria disponível por dia para estudar?</label>
        <select id="tempoEstudo" name="tempoEstudo" class="form-control" required>
          <option value="De 30 minutos a 1 hora">De 30 minutos a 1 hora</option>
          <option value="De 1 hora a 2 horas">De 1 hora a 2 horas</option>
          <option value="De 2 a 3 horas">De 2 a 3 horas</option>
          <option value="De 3 a 4 horas">De 3 a 4 horas</option>
          <option value="4 horas ou mais">4 horas ou mais</option>
        </select>
      </div>

      <div class="form-group">
        <label for="nivelCloud">Qual seu nível de familiaridade com os conceitos de cloud e a AWS?</label>
        <select id="nivelCloud" name="nivelCloud" class="form-control" required>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>

      <div class="form-group">
        <label for="conhecimentoAws">Qual seu nível de conhecimento prático utilizando a console AWS e seus serviços?</label>
        <select id="conhecimentoAws" name="conhecimentoAws" class="form-control" required>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>

      <div class="form-group">
        <label for="conhecimentoRedes">Qual seu nível de conhecimento em redes? (roteamento, DNS, protocolos, portas de comunicação, fluxos e etc)</label>
        <select id="conhecimentoRedes" name="conhecimentoRedes" class="form-control" required>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>

      <div class="form-group">
        <label for="conhecimentoArmazenamento">Qual seu nível de conhecimento em conceitos de armazenamento e backup?</label>
        <select id="conhecimentoArmazenamento" name="conhecimentoArmazenamento" class="form-control" required>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>

      <div class="form-group">
        <label for="conhecimentoVirtualizacao">Qual seu nível de conhecimento em virtualização?</label>
        <select id="conhecimentoVirtualizacao" name="conhecimentoVirtualizacao" class="form-control" required>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>

      <div class="form-group">
        <label for="conhecimentoWindows">Qual seu nível de conhecimento em sistema operacional Windows?</label>
        <select id="conhecimentoWindows" name="conhecimentoWindows" class="form-control" required>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>

      <div class="form-group">
        <label for="conhecimentoLinux">Qual seu nível de conhecimento em sistema operacional Linux?</label>
        <select id="conhecimentoLinux" name="conhecimentoLinux" class="form-control" required>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>

      <div class="form-group">
        <label for="conhecimentoSeguranca">Qual seu nível de conhecimento em boas práticas, compliance e segurança?</label>
        <select id="conhecimentoSeguranca" name="conhecimentoSeguranca" class="form-control" required>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>

      <div class="form-group">
        <label for="conhecimentoIAM">Qual seu nível conhecimento em gerenciamento de usuários? (IAM)</label>
        <select id="conhecimentoIAM" name="conhecimentoIAM" class="form-control" required>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>

      <!-- Botão de submit -->
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Salvar</button>
      </div>

      <!-- Mensagem de Confirmação -->
      <div class="confirmation-forms" id="confirmationForms" style="display: none;">
        <img src="/img/checked.png" alt="Ok" id="ok" class="confirmation-icon">
        <span id="confirmationMessage"></span>
      </div>
    </form>
  </div>

  <!-- Adicione o script do Bootstrap JS, se necessário -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.0.7/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

  <script>
    document.addEventListener('DOMContentLoaded', function () {
      const form = document.getElementById('myForm');
      const confirmationForms = document.getElementById('confirmationForms');
      const confirmationMessage = document.getElementById('confirmationMessage');

      form.addEventListener('submit', function (event) {
        event.preventDefault();

        confirmationForms.style.display = 'block';

        confirmationMessage.innerText = 'Cadastro realizado com sucesso! Agradecemos por fornecer as informações no formulário.';
        
        setTimeout(function() {
          form.submit();
        }, 2000); // Aguarda 2 segundos 
      });
    });
  </script>

</body>
</html>
