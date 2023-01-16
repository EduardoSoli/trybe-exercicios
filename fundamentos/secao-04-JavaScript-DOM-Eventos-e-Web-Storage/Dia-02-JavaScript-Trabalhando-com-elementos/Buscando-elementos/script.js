// 1 Acesse o elemento elementoOndeVoceEsta.
// 2 Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// 3 Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// 4 Acesse o primeiroFilho a partir de pai.
// 5 Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
// 6 Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
// 7 Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
// 8 Agora acesse o terceiroFilho a partir de pai.

const save1 = document.getElementById("primeiroFilhoDoFilho").parentElement;
console.log(save1);
const save2 = document.getElementById("elementoOndeVoceEsta").parentElement;
console.log(save2);
save2.style.color = 'red';
const save3 = document.getElementById("pai").children[0];
save3.innerText = "Exercicio 3";
console.log(save3);
const save4 = document.getElementById("pai").children[0];
console.log(save4);
const save5 = document.getElementById("elementoOndeVoceEsta").previousElementSibling;
console.log(save5);
const save6 = document.getElementById("elementoOndeVoceEsta").nextSibling;
console.log(save6);
const save7 = document.getElementById("elementoOndeVoceEsta").nextElementSibling;
console.log(save7);
const save8 = document.getElementById("pai").children[2];
console.log(save8);