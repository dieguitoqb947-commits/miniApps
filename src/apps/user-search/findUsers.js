const usuarios = [
  { nombre: "Salomon", id: 1, cargo: "Diseñador Grafico" },
  { nombre: "Diego", id: 2, cargo: "Desarrollador Web" },
  { nombre: "Jorge", id: 3, cargo: "CEO" },
  { nombre: "Javier", id: 4, cargo: "Diseñador UX" },
  { nombre: "Camila", id: 5, cargo: "Recepcionista" },
];

/**
 * Renderiza las tarjetas en el contenedor HTML
 * @param {Array} usuariosToRender
 */

function renderUsuarios(usuariosToRender) {
  const container = document.getElementById("usuarios-container");

  if (!container) return;

  container.innerHTML = "";

  if (usuariosToRender.length === 0) {
    container.innerHTML = "<p>No se encontraron usuarios.</p>";
    return;
  }

  usuariosToRender.forEach((usuario) => {
    const userList = document.createElement("div");
    userList.className = "usuario";
    userList.innerHTML = `<h3>${usuario.nombre}</h3><p>${usuario.cargo}</p>`;
    const buttonContact = document.createElement("button");
    buttonContact.className = "contact-button";
    buttonContact.textContent = "Contactar";

    userList.appendChild(buttonContact);
    container.appendChild(userList);
  });
}

renderUsuarios(usuarios);

const buscador = document.getElementById("search-input");

if (buscador) {
  buscador.addEventListener("input", () => {
    const searchTerm = buscador.value.toLowerCase();
    const filteredUsuarios = usuarios.filter((usuario) => {
      return usuario.nombre.toLowerCase().includes(searchTerm);
    });
    renderUsuarios(filteredUsuarios);
  });
}
