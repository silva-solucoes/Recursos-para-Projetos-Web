// Obtém a primeira instância da classe "dropzone-box"
const dropZoneBox = document.getElementsByClassName("dropzone-box")[0];

// Seleciona todos os elementos de input com o tipo "file" dentro da classe "dropzone-area"
const inputFiles = document.querySelectorAll(".dropzone-area input[type='file']");

// Seleciona o primeiro elemento de input do tipo "file"
const inputElement = inputFiles[0];

// Encontra o elemento pai mais próximo com a classe "dropzone-area"
const dropZoneElement = inputElement.closest(".dropzone-area");

// Adiciona um ouvinte de evento para o evento de mudança no input do tipo "file"
inputElement.addEventListener("change", (e) => {
    if (inputElement.files.length) {
        // Atualiza a lista de arquivos na área de dropzone
        updateDropzoneFileList(dropZoneElement, inputElement.files[0]);
    }
});

// Adiciona um ouvinte de evento para o evento de arrastar sobre a área de dropzone
dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    // Adiciona uma classe para indicar que o cursor está sobre a área de dropzone
    dropZoneElement.classList.add("dropzone--over");
});

// Adiciona ouvintes de evento para os eventos de "dragleave" e "dragend"
["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
        // Remove a classe que indica que o cursor não está mais sobre a área de dropzone
        dropZoneElement.classList.remove("dropzone--over");
    });
});

// Adiciona um ouvinte de evento para o evento de soltar (drop) na área de dropzone
dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length) {
        // Define os arquivos da transferência de dados como os arquivos do input do tipo "file"
        inputElement.files = e.dataTransfer.files;
        // Atualiza a lista de arquivos na área de dropzone
        updateDropzoneFileList(dropZoneElement, e.dataTransfer.files[0]);
    }
    // Remove a classe que indica que o cursor não está mais sobre a área de dropzone
    dropZoneElement.classList.remove("dropzone--over");
});

// Função para atualizar a lista de arquivos na área de dropzone
const updateDropzoneFileList = (dropZoneElement, file) => {
    // Obtém o elemento dentro da área de dropzone que exibe a mensagem sobre os arquivos
    let dropzoneFileMessage = dropZoneElement.querySelector(".message");

    // Atualiza a mensagem para incluir o nome do arquivo e o tamanho em bytes
    dropzoneFileMessage.innerHTML = `${file.name}, ${file.size} bytes`;
};

// Adiciona um ouvinte de evento para o evento de reset no formulário
dropZoneBox.addEventListener("reset", (e) => {
    // Limpa as mensagens sobre os arquivos na área de dropzone
    let dropzoneFileMessage = dropZoneElement.querySelector(".message");
    dropzoneFileMessage.innerHTML = "Nenhum arquivo selecionado";
});

// Adiciona um ouvinte de evento para o evento de submit no formulário
dropZoneBox.addEventListener("submit", (e) => {
    e.preventDefault();
    // Exibe no console o primeiro arquivo selecionado
    const myFiled = document.getElementById("upload-file");
    console.log(myFiled.files[0]);
});

$(document).ready(function () {
    // Aguarda o documento HTML ser totalmente carregado antes de executar o código

    $(".dropzone-box").submit(function (e) {
        // Adiciona um ouvinte de evento para o evento de envio do formulário
        e.preventDefault();

        // Impede o envio padrão do formulário para evitar recarregamento da página

        var formData = new FormData(this);
        // Cria um objeto FormData para coletar dados do formulário, incluindo arquivos

        var file = $("#upload-file")[0].files[0];
        // Obtém o primeiro arquivo selecionado no input do tipo file

        if (file && file.type === "application/pdf") {
            // Verifica se um arquivo foi selecionado e se é do tipo PDF

            $.ajax({
                type: "POST",
                // Define o método HTTP da requisição como POST

                url: "http://localhost/UploadArquivos/paginas/uploadPDF",
                // Especifica o URL para o qual a requisição será enviada

                data: formData,
                // Define os dados a serem enviados, incluindo o arquivo, utilizando o FormData

                contentType: false,
                processData: false,
                // Configurações para garantir que o conteúdo não seja processado ou alterado pelo jQuery

                success: function (response) {
                    // Função a ser executada em caso de sucesso na requisição AJAX

                    var fileName = file.name;
                    // Exibindo as mensagens e redefinindo o input do tipo file após o upload
                    $(".dropzone-area p").show();
                    $(".message").text("Nenhum arquivo selecionado").css("color", "");
                    $("#upload-file").val("");

                    // Exibindo um alerta personalizado
                    showAlert("Upload de arquivo realizado com sucesso!", "success");
                },
                error: function (error) {
                    $(".message").html("<strong>Erro:</strong> Por favor, selecione um arquivo PDF.").css("color", "red");
                    showAlert("Erro ao enviar o arquivo.", "error");
                    console.log(error);
                },
            });
        } else {
            $(".message").html("<strong>Erro:</strong> Por favor, selecione um arquivo PDF.").css("color", "red");
            // Limpa o texto da mensagem e a cor do texto
        }
    });

    $("#upload-file").change(function () {
        // Adiciona um ouvinte de evento para o evento de mudança no input do tipo file

        var file = $("#upload-file")[0].files[0];
        // Obtém o primeiro arquivo selecionado no input do tipo file

        if (file && file.type === "application/pdf") {
            var fileName = file.name;
            $(".message").text("Arquivo selecionado: " + fileName).css("color", "green");
            // Exibe a mensagem indicando o arquivo selecionado e define a cor do texto como verde
        } else {
            $(".message").text("Por favor, insira um arquivo PDF").css("color", "red");
            // Exibe a mensagem indicando que apenas arquivos PDF são aceitos e define a cor do texto como vermelha
        }
        $("#upload-success, #upload-failed").hide();
        // Esconde as mensagens de sucesso e falha, se estiverem visíveis
    });

    $(".dropzone-area").on("dragover", function () {
        // Adiciona um ouvinte de evento para o evento de arrastar sobre a área de dropzone

        $("#upload-success, #upload-failed").hide();
        // Esconde as mensagens de sucesso e falha, se estiverem visíveis
    });

    $(".dropzone-box").on("reset", function () {
        // Adiciona um ouvinte de evento para o evento de reset do formulário

        $(".dropzone-area p").show();
        // Exibe o parágrafo dentro da área de dropzone

        $(".message").text("Nenhum arquivo selecionado").css("color", "");
        // Define o texto da mensagem de volta para o estado inicial e limpa a cor do texto

        $("#upload-file").val("");
        // Limpa o valor do input do tipo file

        $("#upload-success, #upload-failed").hide();
        // Esconde as mensagens de sucesso e falha, se estiverem visíveis
    });

    function showAlert(message, type) {
        // Cria e exibe um alerta personalizado

        var alertBox = $("<div>").addClass("custom-alert " + type).text(message);
        var closeButton = $("<span>").addClass("close-button").text("Fechar");

        alertBox.append(closeButton);
        $("body").append(alertBox);

        closeButton.click(function () {
            alertBox.remove();
        });
    }

    $(".dropzone-box").on("reset", function () {
        $(".dropzone-area p").show();
        $(".message").text("Nenhum arquivo selecionado").css("color", "");
        $("#upload-file").val("");
        $("#upload-success, #upload-failed").hide();
    });
});