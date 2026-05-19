function validarTexto(mensagem) {
    let valor = "";
    while (true) {
        valor = prompt(mensagem);
        if (valor === null) {
            alert("❌ Entrada cancelada. Tente novamente.");
            continue;
        }
        valor = valor.trim();
        if (valor === "") {
            alert("❌ Campo obrigatorio! Por favor, preencha.");
            continue;
        }
        return valor;
    }
}

function validarNumero(mensagem) {
    let valor;
    while (true) {
        let entrada = prompt(mensagem);
        if (entrada === null) {
            alert(":x: Entrada cancelada. Tente novamente.");
            continue;
        }
        valor = Number(entrada);
        if (isNaN(valor) || valor < 0 || !Number.isInteger(valor)) {
            alert(":x: Digite um numero inteiro valido (zero ou positivo).");
            continue;
        }
        return valor;
    }
}

function validarSafra(mensagem) {
    let anoAtual = new Date().getFullYear();
    let valor;
    while (true) {
        valor = validarNumero(mensagem);
        if (valor < 1900 || valor > anoAtual) {
            alert(`❌ Ano de safra invalido! Digite um ano entre 1900 e ${anoAtual}.`);
            continue;
        }
        return valor;
    }
}