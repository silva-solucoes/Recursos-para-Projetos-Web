<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arrasta e Solta Arquivos</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap">
    <link rel="stylesheet" href="<?php echo URL . '/public/css/style.css'; ?>">
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>

<body>
    <form class="dropzone-box" method="POST">
        <h2>Carregar e anexar arquivos</h2>
        <p>Anexe o documento do aluno(a) digitalizado em PDF</p>
        <div class="dropzone-area">
            <div class="file-upload-icon">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                    <path
                        d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z">
                    </path>
                </svg>
            </div>
            <p>Clique para fazer upload ou arraste e solte</p>
            <input type="file" accept=".pdf" required id="upload-file" name="uploaded-file">
            <p class="message">Nenhum arquivo selecionado</p>
        </div>
        <div class="student-name">
            <label for="student-name">Nome do Aluno:</label>
            <input type="text" id="student-name" name="student-name" required>
        </div>
        <div class="dropzone-actions">
            <button type="reset">
                Cancelar
            </button>
            <button id="submit-button" type="submit">
                Enviar
            </button>
        </div>
    </form>
    <script src="<?php echo URL . '/public/js/script.js'; ?>"></script>
</body>

</html>