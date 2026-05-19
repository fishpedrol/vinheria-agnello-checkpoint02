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
