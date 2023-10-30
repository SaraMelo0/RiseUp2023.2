// Pagamento 2

function gerarBoleto() {
    const nomeTitular = document.getElementById("nomeTitular").value;
    const cpf = document.getElementById("cpf").value;
    const valorBoleto = parseFloat(document.getElementById("valor").value);

    if (nomeTitular && cpf && !isNaN(valorBoleto)) {
        // Gere um número de boleto aleatório
        const numeroBoleto = Math.floor(Math.random() * 1000000000000); // Número de 12 dígitos como exemplo

        const boleto = `Nome do Titular: ${nomeTitular}<br>CPF: ${cpf}<br>Valor do Boleto: R$${valorBoleto.toFixed(2)}<br>Número do Boleto: ${numeroBoleto}`;

        resultadoElement.innerHTML = boleto;
        boletoInfo.style.display = "block";

        // Exibe um alerta de sucesso e redirecionamento
        if (confirm("Boleto gerado com sucesso! Clique em OK para ir para outra página.")) {
            // Redireciona o usuário para outra página
            window.location.href = "cadastro.html"; // Substitua com a URL da outra página
        }
    } else {
        alert("Preencha todos os campos corretamente para gerar o boleto.");
    }
}


