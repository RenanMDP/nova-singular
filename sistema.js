const createTd = item => {
  const Td = document.createElement("td");
  Td.innerHTML = item;
  return Td;
};

const createTdWithI = item => {
  const Td = document.createElement("td");
  const i = document.createElement("i");
  Td.innerHTML = item;
  Td.setAttribute("class", "tdEdit");
  Td.appendChild(i).setAttribute("class", "fas fa-edit");
  return Td;
}

const appendChildren = (parent, children) => {
  children.forEach(child => {
    parent.setAttribute("class", "tr");
    parent.appendChild(child);
  });
};

document.querySelector("#addClientBtn").addEventListener("click", () => {
  const clientName = document.querySelector("#name").value;
  const clientMovie = document.querySelector("#movie").value;
  const clientLocado = document.querySelector("#rentStatus").value;

  localStorage.setItem("clientName", clientName);
  localStorage.setItem("clientMovie", clientMovie);
  localStorage.setItem("clientLocado", clientLocado);

  const getTbody = document.querySelector("#tbody");
  const createTr = document.createElement("tr");
  const appendTr = getTbody.appendChild(createTr);

  const items = [
    createTdWithI(localStorage.getItem("clientName")),
    createTdWithI(localStorage.getItem("clientMovie")),
    createTdWithI(localStorage.getItem("clientLocado")),
    createTd('<i class="fas fa-trash"></i>')
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
  let targetText = document.querySelectorAll(".tdEdit");
  editIcon[targetText.length - 1].addEventListener("click", event => {
    editIcon = event.target;
    editIcon.innerText = "test";

    // for (let i = 0; i < editIcon.length; i++) {
    //   editIcon.length = i;
    //   editIcon[i] = event.target;
    //   editIcon[i].innerText = "testLocado";
    // }


    // if (editIcon.length === editIcon.length - 1) {
    //   editIcon = event.target;
    //   editIcon.innerText = "testLocado";
    // } else if (editIcon.length === editIcon.length - 2) {
    //   editIcon = event.target;
    //   editIcon.parentNode.innerText = "testFilme";
    // } else if (editIcon.length === editIcon.length - 3) {
    //   editIcon = event.target;
    //   editIcon.parentNode.innetText = "testNome";
    // }
      
  });
}


// <i class="fas fa-edit"></i>
// <i class="fas fa-trash"></i>