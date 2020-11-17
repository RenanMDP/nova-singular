// class Client {
//   constructor(number, name, movie, rentStatus) {
//     this.number = number;
//     this.name = name;
//     this.movie = movie;
//     this.rentStatus = rentStatus;
//   }
// }

// const table = {
//   client: {
//   },

//   movie: {
//   },
// };
let customTrIDPrefix = "tr";
let customTrIDNumber = 0;

const createTd = item => {
  const Td = document.createElement("td");
  Td.innerHTML = item;
  return Td;
};

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
    createTd(localStorage.getItem("clientName")),
    createTd(localStorage.getItem("clientMovie")),
    createTd(localStorage.getItem("clientLocado")),
    createTd('<i class="fas fa-edit"></i>'),
    createTd('<i class="fas fa-trash"></i>')
  ];

  appendChildren(appendTr, items);
  
  deleteRow();
});

function deleteRow() {
  let trashIcon = document.querySelectorAll(".fa-trash");
  trashIcon[trashIcon.length - 1].addEventListener("click", event => {
    trashIcon = event.target;
    trashIcon.parentNode.parentNode.parentNode.removeChild(trashIcon.parentNode.parentNode);
  });
}

// <i class="fas fa-edit"></i>
// <i class="fas fa-trash"></i>