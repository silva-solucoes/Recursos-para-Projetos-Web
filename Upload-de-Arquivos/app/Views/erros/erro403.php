<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Erro 403 - Acesso Proibido</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap">
    <link rel="stylesheet" href="<?php echo URL . '/public/css/erro403.css'; ?>">
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>

<body>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" style="fill:none;stroke:#FF0000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;" />
        <line x1="7" y1="7" x2="17" y2="17" style="fill:none;stroke:#FF0000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;" />
        <line x1="7" y1="17" x2="17" y2="7" style="fill:none;stroke:#FF0000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;" />
    </svg>
    <h1>Acesso Proibido!</h1>
    <p>Você não tem permissão para acessar este recurso. Por favor, volte para a página principal clicando no botão abaixo.</p>
    <button onclick="window.location.href='<?php echo URL; ?>'">Voltar para a Página Principal</button>
</body>

</html>