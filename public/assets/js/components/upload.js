document.getElementById('fileUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const displayDiv = document.getElementById('fileNameDisplay');
    const textSpan = document.getElementById('fileNameText');

    if (file) {
        // Se o usuário selecionou um arquivo, mostra a badge com o nome
        textSpan.textContent = file.name;
        displayDiv.classList.remove('d-none');
        displayDiv.classList.add('d-inline-block');
    } else {
        // Se o usuário cancelou a seleção, esconde a badge
        displayDiv.classList.add('d-none');
        displayDiv.classList.remove('d-inline-block');
        textSpan.textContent = '';
    }
});