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