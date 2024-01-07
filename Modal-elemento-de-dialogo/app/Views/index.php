<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modal - Compartilhe o link</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap">
    <link rel="stylesheet" href="<?php echo URL . '/public/css/style.css'; ?>">
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>

<body> 
    <button type="button" class="share-btn">
        <!--Socials-->
    </button>
    <dialog class="copy-link-dialog">
        <form>
            <header>
                <h2>Compartilhe o link</h2>
                <button type="button" class="close-btn secndary">
                    <!--Botão Fechar-->
                </button>
            </header>
            <div class="copy-link-wrapper">
                <input id="copy-link-input" type="text" required value="https://example.com/share.this" readonly>
                <button class="copy-btn" type="button">
                    <!--copy icon-->
                    <span id="copy-text">Link de cópia</span>
                </button>
            </div>
        </form>
    </dialog>
    <script src="<?php echo URL . '/public/js/script.js'; ?>"></script>
</body>

</html>