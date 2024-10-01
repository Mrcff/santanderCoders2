import { Item } from "../models/Item";

export class ViewPage {
  itemContainer: HTMLElement;

  constructor() {
    this.itemContainer = document.createElement("div");
    this.itemContainer.innerHTML = "<h2>Detalhes do Item</h2>";
  }

  render() {
    const params = new URLSearchParams(window.location.search);
    const itemId = Number(params.get("id"));

    const items = JSON.parse(localStorage.getItem("items") || "[]") as Item[];
    const item = items.find((i) => i.id === itemId);

    if (item) {
      this.itemContainer.innerHTML += `
        <p>ID: ${item.id}</p>
        <p>Nome: ${item.name}</p>
        <p>Descrição: ${item.description}</p>
      `;
    } else {
      this.itemContainer.innerHTML += `<p>Item não encontrado</p>`;
    }

    document.getElementById("main-content")?.appendChild(this.itemContainer);
  }
}
