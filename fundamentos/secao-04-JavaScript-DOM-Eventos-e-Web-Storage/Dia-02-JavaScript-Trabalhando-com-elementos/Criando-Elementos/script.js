// 1 Crie um irmão para elementoOndeVoceEsta.
// 2 Crie um filho para elementoOndeVoceEsta.
// 3 Crie um filho para primeiroFilhoDoFilho.
// 4 A partir desse filho criado, acesse terceiroFilho.

const save1 = document.getElementById('pai');
const save2 = document.createElement('section');
save2.id = 'quintoFilho';
save1.appendChild(save2);
console.log(save1);

const save3 = document.getElementById('elementoOndeVoceEsta');
const save4 = document.createElement('section');
save4.id = 'terceiroFilhoDoFilho';
save3.appendChild(save4);
console.log(save3);

const save5 = document.getElementById('primeiroFilhoDoFilho');
const save6 = document.createElement('section');
save6.id = 'primeiroFilhoDoFilhoDoFilho';
save5.appendChild(save6);
console.log(save5)

const save7 = primeiroFilhoDoFilhoDoFilho.parentNode.parentNode.nextElementSibling;
console.log(save7);