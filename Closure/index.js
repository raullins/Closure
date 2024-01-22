// Closure = Uma função definida dentro de outra função, dessa maneira a função interior tem acesso ás variáveis e escopo da função de fora.
//           Permite a manutenção de estado e variáveis privadas.
//           Usado frequentemente em frameworks JS como: React, Vue, Angular

// Exemplo 1

/*
function exterior(){

    let mensagem = "Hello!";

    function interior(){
        console.log(mensagem);
    }

    interior();
}

exterior();
*/

// Exemplo 2

// Sem manutenção de estado da variável, e se botar a variavel para fora da função, estaria tirando a privacidade e segurança da variável
/*
function incrementar(){

    let count = 0;
    count++;
    console.log(`Count aumentou para ${count}`);
}

incrementar();
incrementar();
incrementar();
*/

/*
function criarContador(){

    let count = 0;

    function incrementar(){
        count++;
        console.log(`Count aumentou para ${count}`);
    }

    function getContador(){
        return count;
    }

    // Estamos retornando um objeto, com o método incrementar() e getContador()
    return {incrementar, getContador}
}

const contador = criarContador();

contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();

console.log(`Contador está em ${contador.getContador()}`);
*/


// Exemplo 3

function criarJogo(){

    let placar = 0;

    function aumentarPlacar(pontos){
        placar += pontos;
        console.log(`+${pontos}pts`);
    }

    function diminuirPlacar(pontos){
        placar -= pontos;
        console.log(`-${pontos}pts`);
    }

    function getPlacar(){
        return placar;
    }

    return {aumentarPlacar, diminuirPlacar, getPlacar}
}

const jogo = criarJogo();

jogo.aumentarPlacar(9);
jogo.aumentarPlacar(9);
jogo.diminuirPlacar(10);

// Não irá funcionar
jogo.placar = 30;

console.log(`Placar atual: ${jogo.getPlacar()}pts`);