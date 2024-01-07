<?php

// Define a classe Paginas que estende a classe Controller
class Paginas extends Controller
{

    // Método responsável por exibir a página inicial
    public function index()
    {
        $this->view('index');
    }

    // Método responsável por lidar com o upload de arquivos PDF
    public function uploadPDF()
    {
        // Verifica se a requisição foi feita usando o método POST
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $uploadDir = 'Estudantes/UploadDoc/';

            // Verifica se o diretório de upload existe e cria se não existir
            if (!is_dir($uploadDir) && !mkdir($uploadDir, 0777, true)) {
                echo "Erro: Não foi possível criar o diretório de upload.";
                exit();
            }

            // Obtém as informações do arquivo enviado e o nome do aluno
            $uploadedFile = $_FILES["uploaded-file"];
            $studentName = $_POST["student_name"];

            // Verifica se houve algum erro no upload
            if ($uploadedFile["error"] !== UPLOAD_ERR_OK) {
                echo "Erro no upload do arquivo.";
                exit();
            }

            // Verifica o tipo de arquivo (deve ser PDF)
            $fileExtension = pathinfo($uploadedFile["name"], PATHINFO_EXTENSION);
            if (strtolower($fileExtension) !== "pdf") {
                echo "Erro: Apenas arquivos PDF são permitidos.";
                exit();
            }

            // Função para obter a sequência numérica dos arquivos
            $fileSequence = $this->getFileSequence($uploadDir);

            // Define a lógica de renomear o arquivo
            $newFileName = 'Doc_' . date('ymd') . '_' . sprintf('%02d', $fileSequence) . '_Ex_Estudante.' . $fileExtension;

            $targetFile = $uploadDir . $newFileName;

            // Move o arquivo para o diretório de destino
            if (move_uploaded_file($uploadedFile["tmp_name"], $targetFile)) {
                // Se o upload foi bem-sucedido, você pode adicionar mais ações aqui, como:

                // 1. Atualizar a interface do usuário
                echo "Arquivo enviado com sucesso! Novo nome: $newFileName";

                // 2. Redirecionar para outra página
                // header("Location: outra_pagina.php");
                // exit();
            } else {
                echo "Erro ao enviar o arquivo.";
            }
        } else {
            // Se a requisição não foi feita usando o método POST
            echo "Método inválido.";
        }

        // Função para sanitizar o nome do arquivo removendo caracteres especiais
        $this->sanitizeFileName($uploadedFile["name"]);
    }

    // Função para obter a sequência numérica dos arquivos
    private function getFileSequence($directory)
    {
        $files = glob($directory . 'Doc_*_*_*.*');
        return count($files) + 1;
    }

    // Função para sanitizar o nome do arquivo removendo caracteres especiais
    private function sanitizeFileName($fileName)
    {
        $sanitizedFileName = preg_replace('/[^a-zA-Z0-9]/', '_', $fileName);
        return $sanitizedFileName;
    }

    public function erro403(){
        $this->view("erros/erro403");
    }

}

?>