// Remova a tag h2, filha do elemento elementoOndeVoceEsta.

const remove = document.getElementById('elementoOndeVoceEsta');
remove.removeChild(remove.firstElementChild);

console.log(remove);