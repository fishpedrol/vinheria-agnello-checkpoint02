// ===== sobre =====

let paginaAtual = 'index';

function initsys() {

    // ===== cadastro =====

    alert('Bem Vindo ao Cadastro de Usuário!');

    let name = prompt('Digite seu nome:');
    alert(`Olá, ${name}!`);

    // não irei passar a senha no console.log para evitar vazamento

    let idade = Number(prompt('Digite sua idade para o Cadastro:'));

    if (idade < 18) {
        alert('❌ Apenas maiores de 18 anos podem se cadastrar.');
        return;
    }

    let mail = prompt('Digite seu Email para o Cadastro:');
    let password = prompt('Digite sua senha para o Cadastro:');

    alert('Cadastro realizado! Veja os detalhes no console.');

    console.log(`Nome: ${name}  \n Idade: ${idade}  \n Email: ${mail}  \n Senha: XXXXXX`);

    alert('A seguir, veja os detalhes do vinho no console.');

    // ===== cardapio =====

    console.log("🍷 ===== VINHOS DISPONÍVEIS ===== 🍷\n");

    console.log("🍇 Nome: Cantinho do Vale");
    console.log("Tipo: Tinto, Branco | Safra: 2015 | Estoque: 10");
    console.log("----------------------------------");

    console.log("🍇 Nome: Salton");
    console.log("Tipo: Branco, Tinto | Safra: 2012 | Estoque: 20");
    console.log("----------------------------------");

    console.log("🍇 Nome: Dom Nogueira");
    console.log("Tipo: Rosé, Tinto | Safra: 2000 | Estoque: 30");

    // ===== escolha =====

    let vinho = prompt('Digite o nome do vinho que deseja comprar:');
    let type = prompt('Digite o tipo do vinho que deseja comprar:');
    let safra = prompt('Digite a safra do vinho que deseja comprar:');
    let qtd = prompt('Digite a quantidade que deseja comprar:');

    alert(`🧾 Escolha do cliente \n Vinho ${vinho}. \n Tipo ${type}. \n Safra ${safra}. \n Quantidade ${qtd}. \n Clique Enter para confirmar sua compra!`);
    alert('✅ Compra confirmada!\nObrigado por comprar conosco!');
}
