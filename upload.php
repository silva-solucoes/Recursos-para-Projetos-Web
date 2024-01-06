<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $uploadDir = './Arquivos de Upload/';

    // Verifica se o diretório de upload existe e cria se não existir
    if (!is_dir($uploadDir) && !mkdir($uploadDir, 0777, true)) {
        echo "Erro: Não foi possível criar o diretório de upload.";
        exit();
    }

    $uploadedFile = $_FILES["uploaded-file"];

    // Verifica se houve algum erro no upload
    if ($uploadedFile["error"] !== UPLOAD_ERR_OK) {
        echo "Erro no upload do arquivo.";
        exit();
    }

    $targetFile = $uploadDir . basename($uploadedFile["name"]);

    // Verifica se o arquivo já existe
    if (file_exists($targetFile)) {
        echo "Erro: O arquivo já existe.";
        exit();
    }

    // Verifica o tipo de arquivo, se necessário
    $fileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));
    if ($fileType != "pdf" && $fileType != "txt" && $fileType != "jpg") {
        echo "Erro: Apenas arquivos PDF, TXT e JPG são permitidos.";
        exit();
    }

    // Move o arquivo para o diretório de destino
    if (move_uploaded_file($uploadedFile["tmp_name"], $targetFile)) {
        // Se o upload foi bem-sucedido, você pode adicionar mais ações aqui, como:
        
        // 1. Atualizar a interface do usuário
        echo "Arquivo enviado com sucesso!";
        
        // 2. Redirecionar para outra página
        // header("Location: outra_pagina.php");
        // exit();
    } else {
        echo "Erro ao enviar o arquivo.";
    }
} else {
    echo "Método inválido.";
}
?>