/* Escreva um algoritmo que faça conversão de temperatura em graus Celsius para graus Fahrenheit.
DICA: A conversão deve ser a temperatura em graus Celsius dividido por 5, o resultado multiplicado por 9 somado com 32.
Exiba o resultado no console. */
const temperatura = Math.floor(Math.random() * 101);
const conversao = (temperatura / 5 ) * 9;
console.log(`Temperatura em Celsius ${temperatura}\nTemperatura em fahrenheit ${conversao}`); 