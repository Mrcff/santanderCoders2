import { Item } from "../models/Item";

export class ListPage {
  listContainer: HTMLElement;

  constructor() {
    this.listContainer = document.createElement("div");
    this.listContainer.innerHTML = "<h2>Lista de Itens</h2>";
  }

  render() {
    const items = JSON.parse(localStorage.getItem("items") || "[]") as Item[];
    const ul = document.createElement("ul");
    items.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${item.name} - ${item.description}
        <button data-id="${item.id}" class="view-item">Ver</button>
        <button data-id="${item.id}" class="edit-item">Editar</button>
        <button data-id="${item.id}" class="delete-item">Excluir</button>
      `;
      ul.appendChild(li);
    });

    this.listContainer.appendChild(ul);
    document.getElementById("main-content")?.appendChild(this.listContainer);
    this.addEventListeners();
  }

  addEventListeners() {
    document.querySelectorAll(".view-item").forEach((button) => {
      button.addEventListener("click", (e) => {
        const id = (e.target as HTMLButtonElement).dataset.id;
        window.location.href = `view.html?id=${id}`;
      });
    });

    document.querySelectorAll(".edit-item").forEach((button) => {
      button.addEventListener("click", (e) => {
        const id = (e.target as HTMLButtonElement).dataset.id;
        window.location.href = `update.html?id=${id}`;
      });
    });

    document.querySelectorAll(".delete-item").forEach((button) => {
      button.addEventListener("click", (e) => {
        const id = (e.target as HTMLButtonElement).dataset.id;
        this.deleteItem(Number(id));
      });
    });
  }

  deleteItem(id: number) {
    let items = JSON.parse(localStorage.getItem("items") || "[]") as Item[];
    items = items.filter((item) => item.id !== id);
    localStorage.setItem("items", JSON.stringify(items));
    window.location.reload(); // Atualiza a página após a exclusão
  }
}
