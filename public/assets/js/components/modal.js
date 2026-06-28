// Usamos Delegação de Eventos (Event Delegation) no 'document'. 
// Assim, o script funciona mesmo para elementos carregados dinamicamente depois.
document.addEventListener('change', function(event) {
    
    // Verifica se o elemento que disparou a mudança foi o radio de "tipoDocumento"
    if (event.target.name === 'tipoDocumento') {
        const divCPF = document.getElementById('divCPF');
        const divCNPJ = document.getElementById('divCNPJ');
        const inputCPF = document.getElementById('cpfVendedor');
        const inputCNPJ = document.getElementById('cnpjVendedor');

        if (event.target.value === 'cpf') {
            // Mostra CPF
            divCPF.classList.remove('d-none');
            inputCPF.setAttribute('required', 'required');
            
            // Esconde e limpa CNPJ
            divCNPJ.classList.add('d-none');
            inputCNPJ.removeAttribute('required');
            inputCNPJ.value = '';
        } 
        else if (event.target.value === 'cnpj') {
            // Mostra CNPJ
            divCNPJ.classList.remove('d-none');
            inputCNPJ.setAttribute('required', 'required');
            
            // Esconde e limpa CPF
            divCPF.classList.add('d-none');
            inputCPF.removeAttribute('required');
            inputCPF.value = '';
        }
    }
});