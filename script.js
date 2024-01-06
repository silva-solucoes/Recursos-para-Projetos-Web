const dropZoneBox = document.getElementsByClassName("dropzone-box")[0];

const inputFiles = document.querySelectorAll(".dropzone-area input[type='file']");

const inputElement = inputFiles[0];

const dropZoneElement = inputElement.closest(".dropzone-area");

inputElement.addEventListener("change",
(e) => {
    if (inputElement.files.length){
        updateDropzoneFileList(dropZoneElement, inputElement.files[0]);
    }
});

dropZoneElement.addEventListener("dragover",
(e) => {
    e.preventDefault();
    dropZoneElement.classList.add("dropzone--over");
});

["dragleave", dragend].forEach((type) => {
    dropZoneElement.addEventListener(type,
        (e) => {
            dropZoneElement.classList.remove("dropzone--over");
        });
});

dropZoneElement.addEventListener("drop",
(e) => {
    e.preventDefault();
    if(e.dataTransfer.files.length){
        inputElement.files = e.dataTransfer.files;
        updateDropzoneFileList(dropZoneElement, e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove("dropzone--over");

});

const updateDropzoneFileList = (dropZoneElement, file) => {
    let dropzoneFileMessage = dropZoneElement.querySelector(".message");
    if (files.length) {
        // Exibe o nome do primeiro arquivo e a contagem total de arquivos
        dropzoneFileMessage.innerHTML = `${files[0].name} e mais ${files.length - 1} arquivo(s) selecionado(s)`;
    } else {
        dropzoneFileMessage.innerHTML = "Nenhum arquivo selecionado";
    }
};

dropZoneBox.addEventListener("reset",
(e) => {
    let dropzoneFileMessage = dropZoneElement.querySelector(".message");
    dropzoneFileMessage.innerHTML = "Nenhum arquivo selecionado";
});

dropZoneBox.addEventListener("submit",
(e) => {
    e.preventDefault();
    const myFiled = document.getElementById("upload-file");
    console.log(myFiled.files[0]);
});

$(document).ready(function() {
    $(".dropzone-box").submit(function(e) {
        e.preventDefault();

        var formData = new FormData(this);

        $.ajax({
            type: "POST",
            url: "upload.php", // Substitua com o caminho para o script do servidor
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                $("#status").html(response);
            },
            error: function(error) {
                $("#status").html("Erro ao enviar o arquivo.");
                console.log(error);
            }
        });
    });
});