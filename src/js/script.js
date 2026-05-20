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

function validarTipo(mensagem) {
    while (true) {
        let valor = validarTexto(mensagem);
        let valorLower = valor.toLowerCase();
        if (valorLower === "tinto" || valorLower === "branco" || valorLower === "rose" || valorLower === "rosé") {
            return valor.charAt(0).toUpperCase() + valor.slice(1).toLowerCase();
        }
        alert("❌ Tipo invalido! Escolha entre: Tinto, Branco ou Rose.");
    }
}

function verificarEstoqueBaixo(quantidade) {
    return quantidade < 5;
}

function classificarVinho(safra) {
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - safra;
    if (idade <= 5) {
        return "Jovem";
    } else if (idade <= 15) {
        return "Amadurecido";
    } else {
        return "Antigo";
    }
}

function exibirNoConsole(titulo, conteudo) {
    alert(`A seguir, veja ${titulo} no console.`);
    console.log(conteudo);
}

function formatarVinho(numero, nomeV, tipoV, safraV, estoqueV, classeV) {
    let texto = `\n🍇 ${numero} - ${nomeV}`;
    texto += `\n   Tipo: ${tipoV} | Safra: ${safraV} | Estoque: ${estoqueV}`;
    if (verificarEstoqueBaixo(estoqueV)) texto += " ⚠️ ESTOQUE BAIXO!";
    texto += `\n   Classificacao: ${classeV}`;
    texto += "\n----------------------------------";
    return texto;
}
function initsys() {
    alert("Bem-vindo a Vinheria Agnello!");

    let nome = validarTexto("Digite seu nome:");
    alert(`Ola, ${nome}!`);

    let idade = validarNumero("Digite sua idade para o Cadastro:");

    if (idade < 18) {
        alert("❌ Apenas maiores de 18 anos podem se cadastrar.");
        return;
    }

    let mail = validarTexto("Digite seu Email para o Cadastro:");
    let password = prompt("Digite sua senha para o Cadastro:");

    let dadosUsuario = `👤 ===== CADASTRO DO USUARIO =====\nNome: ${nome}\nIdade: ${idade}\nEmail: ${mail}\nSenha: XXXXXX\n==================================`;

    exibirNoConsole("os detalhes do cadastro", dadosUsuario);

    alert("A seguir, adicione os vinhos ao cardapio de vinhos.");
let nome1 = "", tipo1 = "", safra1 = 0, estoque1 = 0, classe1 = "";
    let nome2 = "", tipo2 = "", safra2 = 0, estoque2 = 0, classe2 = "";
    let nome3 = "", tipo3 = "", safra3 = 0, estoque3 = 0, classe3 = "";
    let nome4 = "", tipo4 = "", safra4 = 0, estoque4 = 0, classe4 = "";
    let nome5 = "", tipo5 = "", safra5 = 0, estoque5 = 0, classe5 = "";

    let totalCadastros = 0;
    let totalEstoqueBaixo = 0;
    let safraMaisAntiga = 0;
    let nomeSafraMaisAntiga = "";
    let continuar = true;

    while (continuar) {
        if (totalCadastros >= 5) {
            alert("⚠️ Limite de 5 vinhos cadastrados atingido!");
            break;
