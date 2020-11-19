let iconIDPrefix = "icon";
let iconIDSuffix = 1;

const createTd = item => {
  const Td = document.createElement("td");
  Td.innerHTML = item;
  return Td;
};

const createTdWithI = item => {
  const span = document.createElement("span");
  const Td = document.createElement("td");
  const i = document.createElement("i");
  Td.setAttribute("class", "tdEdit");
  Td.appendChild(span);
  span.innerHTML = item;
  Td.appendChild(i).setAttribute("class", `fas fa-edit ${iconIDPrefix + iconIDSuffix++}`);
  return Td;
};

const appendChildren = (parent, children) => {
  children.forEach(child => {
    parent.setAttribute("class", "tr");
    parent.appendChild(child);
  });
};

const nomeForm = () => {
  const clientName = document.querySelector("#name").value;
  localStorage.setItem("clientName", clientName);
  const nomeStorage = localStorage.getItem("clientName");

  const nomeInput = document.createElement("input");
  nomeInput.setAttribute("type", "text");
  nomeInput.setAttribute("value", nomeStorage);
  nomeInput.setAttribute("readonly", "readonly");

  const Td = document.createElement("td");
  const i = document.createElement("i");
  Td.appendChild(nomeInput);
  Td.appendChild(i).setAttribute("class", `fas fa-edit nomeForm`);

  return Td;
}

const filmeForm = () => {
  const clientMovie = document.querySelector("#movie").value;
  localStorage.setItem("clientMovie", clientMovie);
  const filmeStorage = localStorage.getItem("clientMovie");

  const filmeInput = document.createElement("input");
  filmeInput.setAttribute("type", "text");
  filmeInput.setAttribute("value", filmeStorage);
  filmeInput.setAttribute("readonly", "readonly");

  const Td = document.createElement("td");
  const i = document.createElement("i");
  Td.appendChild(filmeInput);
  Td.appendChild(i).setAttribute("class", `fas fa-edit filmeForm`);

  return Td;
};

const locadoForm = () => {
  const clientLocado = document.querySelector("#rentStatus").value;
  localStorage.setItem("clientLocado", clientLocado);
  const inputStorage = localStorage.getItem("clientLocado");

  const locadoInput = document.createElement("select");
  locadoInput.setAttribute("name", "locadoInput");

  const locadoOption1 = document.createElement("option");
  const locadoOption2 = document.createElement("option");

  if (inputStorage === "Não") {
    locadoOption1.setAttribute("value", inputStorage);
    locadoOption1.innerHTML = inputStorage;

    locadoOption2.value = "Sim";
    locadoOption2.innerHTML = "Sim";
  } else if (inputStorage === "Sim") {
    locadoOption1.setAttribute("value", inputStorage);
    locadoOption1.innerHTML = inputStorage;

    locadoOption2.value = "Não";
    locadoOption2.innerHTML = "Não";
  }

  const Td = document.createElement("td");
  Td.appendChild(locadoInput);

  locadoInput.appendChild(locadoOption1);
  locadoInput.appendChild(locadoOption2);

  return Td;
};

const trashIcon = () => {
  
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-trash center");

  const Td = document.createElement("td");
  Td.appendChild(i);

  return Td;
};

document.querySelector("#addClientBtn").addEventListener("click", () => {
  const getTbody = document.querySelector("#tbody");
  const createTr = document.createElement("tr");
  const appendTr = getTbody.appendChild(createTr);

  const items = [
    nomeForm(),
    filmeForm(),
    locadoForm(),
    trashIcon()
  ];

  appendChildren(appendTr, items);
  
  deleteRow();
  updateItems();
});


// Deleta as linhas na tabela
function deleteRow() {
  let trashIcon = document.querySelectorAll(".fa-trash");
  trashIcon[trashIcon.length - 1].addEventListener("click", event => {
    trashIcon = event.target;
    trashIcon.parentNode.parentNode.parentNode.removeChild(trashIcon.parentNode.parentNode);
  });
}

function updateItems() {
  let editIcon = document.querySelectorAll(".fa-edit");
  let editIconBool = false;

  for(let icon of editIcon){
    icon.addEventListener('click', (event) => {
      editIcon = event.target;
      const editField = editIcon.previousSibling;
  
      if (editIcon.classList.contains("nomeForm")) {
        editField.removeAttribute("readonly");
        editField.focus();

        // editField.addEventListener("onblur", () => {
        //   editField.setAttribute("readonly", "readonly");
        //   alert(editField.value);
        // });

        editField.addEventListener("keyup", event => {
          if (event.keyCode === 13) {
            event.preventDefault();
            editField.setAttribute("readonly", "readonly");
          }
        });
      }

      if (editIcon.classList.contains("filmeForm")) {
        editField.removeAttribute("readonly");
        editField.focus();

        // editField.addEventListener("onblur", () => {
        //   editField.setAttribute("readonly", "readonly");
        //   alert(editField.value);
        // });

        editField.addEventListener("keyup", event => {
          if (event.keyCode === 13) {
            event.preventDefault();
            editField.setAttribute("readonly", "readonly");
          }
        });
      }
    }, false);
  }
}