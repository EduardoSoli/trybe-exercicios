// Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
// Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera. Para isso, considere as seguintes informações:
// Se a nota for maior ou igual a 80, imprima “Parabéns, você faz parte do grupo das pessoas aprovadas!”
// Se a nota for menor que 80 e maior ou igual a 60, imprima “Você está na nossa lista de espera”
// Se a nota for menor que 60, imprima “Infelizmente, você reprovou.”
// Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
// Altere o valor da nota para verificar se as condições que você implementou funcionam.

const candidata = Math.floor(Math.random() *101);
    console.log(candidata);

    if (candidata >= 80){
        console.log("Parabens, voce faz parte do grupo das pessoas aprovadas!");
    }
    else if (candidata < 80 && candidata >= 60){
        console.log("voce está na nossa lista de espera");
    }
    else if (candidata < 60){
        console.log("Infelizmente, voce reprovou");
    }
