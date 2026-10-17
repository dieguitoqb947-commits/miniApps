"use strict";

// En JS no necesitamos definir el tipo "Card", simplemente creamos el array de objetos
const cards = [
  { id: 1, title: "Laptop", category: "tech", description: "Powerful laptop" },
  { id: 2, title: "Shirt", category: "clothes", description: "Cotton shirt" },
  { id: 3, title: "Phone", category: "tech", description: "Smartphone" },
  { id: 4, title: "Shoes", category: "clothes", description: "Running shoes" },
];

/**
 * Renderiza las tarjetas en el contenedor HTML
 * @param {Array} cardsToRender
 */
function renderCards(cardsToRender) {
  const container = document.getElementById("cards-container");
  const selectElement = document.getElementById("category-select");

  // Verificamos que el contenedor exista para evitar errores
  if (!container) return;

  // Limpiamos el contenido previo
  container.innerHTML = "";

  selectElement.addEventListener("change", () => {
    if (selectElement.value === "all") {
      renderCards(cards);
    } else {
      const categoryFiltered = cards.filter((element) => {
        return element.category === selectElement.value;
      });

      renderCards(categoryFiltered);
    }
  });

  if (cardsToRender.length === 0) {
    container.textContent = "No hay resultados para esta categoria";
    return;
  }

  cardsToRender.forEach((card) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${card.title}</h3><p>${card.description}</p>`;
    container.appendChild(div);
  });
}

renderCards(cards);
