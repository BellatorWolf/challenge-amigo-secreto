let amigos = [];
const  nombreAmigo = document.getElementById("amigo");
const agregarButton = document.getElementById("agregar");

nombreAmigo.addEventListener("keyup", (e) => {
  agregarButton.disabled   = (e.target.value.length) ? false : true;
  e.target.value =  e.target.value.toUpperCase()
});

agregarButton.addEventListener("click", () => {
  nombreAmigo.value = "";
});



/**
 * Agrega un nuevo amigo al array de amigos.
 * Valida que el nombre no esté vacío antes de agregarlo y actualiza la lista visual.
 */
function agregarAmigo() {
  const amigoNuevo = nombreAmigo.value

  if (amigoNuevo.trim() === "") {
    alert("Inserte un nombre válidao");
  } else if (existeAmigo(amigoNuevo)){
    alert("El nombre ya existe");
  } else {
    amigos.push(amigoNuevo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}

/**
 * busca si el nombre agregado esta en la lista 
 */
function existeAmigo(amigoNuevo){
  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];
    if(element == amigoNuevo)
      return true
  }
  return false
}

/**
 * Actualiza la visualización de la lista de amigos en el DOM, creando elementos <li> para cada amigo.
 */
function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

/**
 * Sortea y muestra un amigo de la lista de amigos de manera aleatoria.
 * Verifica que la lista no esté vacía antes de realizar el sorteo.
 */
function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
  }
}