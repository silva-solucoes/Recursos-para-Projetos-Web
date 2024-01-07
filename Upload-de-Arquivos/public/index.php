<?php

    session_start();                        // Inicia a sessão, permitindo o uso de variáveis de sessão
    ob_start();                             // Inicia o buffer de saída, usado para armazenar temporariamente a saída do script
    define('4578S9', true);                 // Define uma constante para verificar se o código está sendo acessado através do sistema correto

    include './../app/System/Config.php';   // Inclui o arquivo de configuração do sistema
    include './../app/autoload.php';        // Inclui o arquivo responsável pelo carregamento automático de classes

    $rotas = new Rota();                    // Cria uma instância da classe responsável pelo roteamento da aplicação

