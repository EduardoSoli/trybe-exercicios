const createDaysOfTheWeek = () => {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//add Dias do calendario
const arrayDias = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const createCalendar = () => {
  const selecionaUl = document.getElementById("days");

  for (let i = 0; i < arrayDias.length; i += 1) {
    let day = arrayDias[i];
    let criaElementoLi = document.createElement("li");
    criaElementoLi.innerHTML = day;

    if (day === 24 || day === 31) {
      criaElementoLi.className = "day holiday";
      selecionaUl.appendChild(criaElementoLi);
    } else if (day === 4 || day === 11 || day === 18) {
      criaElementoLi.className = "day friday";
      selecionaUl.appendChild(criaElementoLi);
    } else if (day === 25) {
      criaElementoLi.className = "day holiday friday";
      selecionaUl.appendChild(criaElementoLi);
    } else {
      criaElementoLi.className = "day";
      selecionaUl.appendChild(criaElementoLi);
    }
  }
};
createCalendar();

// feriadoBtn
const feriadoBtn = (btnName) => {
  let btnContainer = document.getElementsByClassName("buttons-container")[0];
  let criaBtn = document.createElement("button");
  criaBtn.innerHTML = btnName;
  criaBtn.id = "btn-holiday";
  btnContainer.appendChild(criaBtn);
};
feriadoBtn("Feriado");

// click-event feriadoBtn
const holidaysCor = () => {
  const holidayBtn = document.getElementById("btn-holiday");
  const holidays = document.getElementsByClassName("holiday");
  let backgroundColor = "rgb(238,238,238)";
  let newColor = "lightgrey";

  holidayBtn.addEventListener("click", () => {
    for (let i = 0; i < holidays.length; i += 1) {
      if (holidays[i].style.backgroundColor === newColor) {
        holidays[i].style.backgroundColor = backgroundColor;
      } else {
        holidays[i].style.backgroundColor = newColor;
      }
    }
  });
};
holidaysCor();

// sextaBtn
const sextaBtn = (btnName) => {
  let btnContainer = document.getElementsByClassName("buttons-container")[0];
  let criaBtn = document.createElement("button");
  criaBtn.innerHTML = btnName;
  criaBtn.id = "btn-friday";
  btnContainer.appendChild(criaBtn);
};
sextaBtn("Sexta-feira");

// click-event sextaBtn
const textoSexta = (fridayArray) => {
  const fridayBtn = document.getElementById("btn-friday");
  const fridays = document.getElementsByClassName("friday");
  let newText = "Sextou";

  fridayBtn.addEventListener("click", () => {
    for (let i = 0; i < fridays.length; i += 1) {
      if (fridays[i].innerHTML === newText) {
        fridays[i].innerHTML = newText;
      } else {
        fridays[i].innerHTML = fridays[i];
      }
    }
  });
};
const sextas = [4, 11, 18, 25];
textoSexta(sextas);

// mouseover e mouseout
const zoomOn = (event) => {
  let days = document.querySelector("#days");
  days.addEventListener("mouseover", (event) => {
    event.target.style.fontSize = "30px";
    event.target.style.fontWeight = "600";
  });
};

const zoomOut = (event) => {
  let days = document.querySelector("#days");
  days.addEventListener("mouseout", (event) => {
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "200";
  });
};
zoomOn();
zoomOut();

//span-event
const tarefa = (tarefaInput) => {
  const selectMyTasks = document.getElementsByClassName("my-tasks")[0];
  const taskName = document.createElement("span");
  taskName.innerHTML = tarefaInput;
  selectMyTasks.appendChild(taskName);
};
tarefa("exercicios");

// adiciona cor ao elemento tasks
const corTasks = (cor) => {
  const tasksContainer = document.getElementsByClassName("my-tasks")[0];
  const novaTask = document.createElement("div");
  novaTask.className = "task";
  novaTask.style.backgroundColor = cor;
  tasksContainer.appendChild(novaTask);
};
novaTask("green");

// troca classe da task selecionada
const mudaClassTask = () => {
  const selectedTask = document.getElementsByClassName("task selected");
  const myTasks = document.getElementsByClassName("task");
  myTasks.addEventListener("click", () => {
    if (selectedTask.length === 0) {
      event.target.className = "task selected";
    } else {
      event.target.className = "task";
    }
  });
};
mudaClassTask();

// 10
const setDayColor = () => {
  let selectedTask = document.getElementsByClassName("task selected");
  let days = document.querySelector("#days");
  let taskDiv = document.querySelector(".task");
  let taskColor = taskDiv.style.backgroundColor;

  days.addEventListener("click", (event) => {
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
      event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = "rgb(119,119,119)"; // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
    }
  });
};
setDayColor();

//  bonus
const addNewTask = () => {
  let getInputField = document.querySelector("#task-input");
  let addInputButton = document.querySelector("#btn-add");
  let getTaskList = document.querySelector(".task-list");

  addInputButton.addEventListener("click", () => {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement("li");
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = "";
    } else {
      alert("Error: Digite ao menos 1 caractere.");
    }
  });

  getInputField.addEventListener("keyup", (event) => {
    if (event.key === "Enter" && getInputField.value.length > 0) {
      let newLi = document.createElement("li");
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = "";
    }
  });
};

addNewTask();
