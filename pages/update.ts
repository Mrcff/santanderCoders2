import { Item } from "../models/Item";

export class UpdatePage {
  form: HTMLElement;
  itemId: number;

  constructor() {
    this.form = document.createElement("form");
    this.form.innerHTML = `
      <label>Nome: <input type="text" id="name"></label>
      <label>Descrição: <input type="text" id="description"></label>
      <button type="submit">Atualizar</button>
    `;

    const params = new URLSearchParams(window.location.search);
    this.itemId = Number(params.get("id"));

    this.loadItem();
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  loadItem() {
    const items = JSON.parse(localStorage.getItem("items") || "[]") as Item[];
    const item = items.find((i) => i.id === this.itemId);

    if (item) {
      (document.getElementById("name") as HTMLInputElement).value = item.name;
      (document.getElementById("description") as HTMLInputElement).value =
        item.description;
    }
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const description = (
      document.getElementById("description") as HTMLInputElement
    ).value;

    this.updateItem(new Item(this.itemId, name, description));
  }

  updateItem(updatedItem: Item) {
    let items = JSON.parse(localStorage.getItem("items") || "[]") as Item[];
    const index = items.findIndex((i) => i.id === updatedItem.id);
    if (index !== -1) {
      items[index] = updatedItem;
      localStorage.setItem("items", JSON.stringify(items));
      window.location.href = "index.html"; // Redireciona após a atualização
    }
  }

  render() {
    document.getElementById("main-content")?.appendChild(this.form);
  }
}
