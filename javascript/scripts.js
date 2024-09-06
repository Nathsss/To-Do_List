const btnCriar = document.getElementById("btnCriar");
const btnApagar = document.getElementById("btnApagar");
const inputTask = document.getElementById("inputTask");
const cards = document.querySelector(".Cards");
let listaTarefas = JSON.parse(localStorage.getItem("lista")) || [];

function criarTarefa() {
  const nomeTask = { titulo: inputTask.value };
  listaTarefas.push(nomeTask);
  localStorage.setItem("lista", JSON.stringify(listaTarefas));
  adicionarDOM(nomeTask.titulo);
}
function mostrarCards() {
  cards.innerHTML = "";
  listaTarefas.forEach((todo) => {
    adicionarDOM(todo.titulo);
  });
}

function adicionarDOM(titulo) {
  const card = document.createElement("div");
  card.classList.add("card", "item-4");

  card.innerHTML = ` 
    <img src="/imgsapo.jpg" class="card-img-top"  alt="...">
    <div class="card-body" >
        <h5 class="card-title">${titulo}</h5>
        <div class="btnnn">
            <div><label for=""><button type="button" class="btn btn-danger item-2" id="btnApagar" onclick="apagarTarefa('${titulo}')">Apagar</button></label></div>
        </div>         
    </div>
`;

  cards.appendChild(card);
}
function apagarTarefa(titulo) {
  listaTarefas = listaTarefas.filter((todo) => todo.titulo !== titulo);
  localStorage.setItem("lista", JSON.stringify(listaTarefas));
  mostrarCards();1
}
mostrarCards();

