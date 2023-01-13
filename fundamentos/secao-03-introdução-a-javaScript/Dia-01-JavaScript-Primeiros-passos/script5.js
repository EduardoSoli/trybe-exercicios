
// Crie uma variável para armazenar o status da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';
// Crie uma estrutura condicional com o switch/case que irá imprimir as seguintes mensagens:
// Caso 'aprovada', imprima “Parabéns, você foi aprovada(o)!”.
// Caso 'lista', imprima “Você está na nossa lista de espera”.
// Caso 'reprovada', imprima “Você foi reprovada(o)”.
// Caso default, imprima a mensagem de “Informação incorreta”.

const status = ['aprovada','lista','reprovada'];

const candidata = Math.floor(Math.random() * status.length);
    switch (status[candidata]){
        case 'aprovada':
            console.log('Parabens, voce foi aprovado(a)');
            break;
        case 'lista':
            console.log('Voce está na lista de espera');
            break;
        case 'reprovada':
            console.log('Voce foi reprovado(a)');
            break;
        case 'default':
            console.log('Informaçao incorreta');
    }