const tagBody = document.getElementById("body");
const addH1 = document.createElement("h1");
addH1.innerText = "TrybeTrip - Agência de Viagens";
tagBody.appendChild(addH1);

const addMain = document.createElement("main");
addMain.className = "main-content";
tagBody.appendChild(addMain);

const tagMain = document.getElementsByClassName("main-content")[0];
const addSection = document.createElement("section");
addSection.className = "center-content";
tagMain.appendChild(addSection);

const tagSection = document.getElementsByClassName("center-content")[0];
const addP = document.createElement("p");
addP.innerText = "Texto da Tag P";
tagSection.appendChild(addP);

const sectionLeft = document.createElement("section");
sectionLeft.className = "left-content";
tagMain.appendChild(sectionLeft);

const sectionRight = document.createElement("section");
sectionRight.className = "right-content";
tagMain.appendChild(sectionRight);

const tagSectionLeft = document.getElementsByClassName("left-content")[0];
const addImg = document.createElement("img");
addImg.className = "small-image";
addImg.src = "https://picsum.photos/200";
tagSectionLeft.appendChild(addImg);

const tagSectionRight = document.getElementsByClassName("right-content")[0];
const addUl = document.createElement("ul");
tagSectionRight.appendChild(addUl);
const arrayNumbers = [
  "Um",
  "Dois",
  "Três",
  "Quatro",
  "Cinco",
  "Seis",
  "Sete",
  "Oito",
  "Nove",
  "Dez",
];
for (let num in arrayNumbers) {
  const addLi = document.createElement("li");
  addLi.innerHTML = arrayNumbers[num];
  addUl.appendChild(addLi);
}

for (let i = 1; i <= 3; i += 1) {
  const addH3 = document.createElement("h3");
  addH3.innerHTML = "Tag" + i;
  tagMain.appendChild(addH3);
}

addH1.className = "title";

for (let i = 0; i < 3; i += 1) {
  const h3Class = document.getElementsByTagName("h3");
  h3Class[i].className = "description";
}

tagMain.removeChild(sectionLeft);

sectionRight.style.marginRight = 'auto';

tagMain.style.backgroundColor = 'green'

const ulTag = document.getElementsByTagName("ul")[0];
ulTag.lastChild.remove();
ulTag.lastChild.remove();
