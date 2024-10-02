import { Item } from "../models/item";

export class CreatePage {
  form: HTMLElement;

  constructor() {
    this.form = document.createElement("form");
    this.form.innerHTML = `
      <label>Nome: <input type="text" id="name"></label>
      <label>Descrição: <input type="text" id="description"></label>
      <button type="submit">Criar</button>
    `;

    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const description = (
      document.getElementById("description") as HTMLInputElement
    ).value;

    const newItem = new Item(Date.now(), name, description);
    this.saveItem(newItem);
  }

  saveItem(item: Item) {
    let items = JSON.parse(localStorage.getItem("items") || "[]");
    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));
    window.location.href = "index.html"; // Redireciona para a página inicial após criar
  }

  render() {
    document.getElementById("main-content")?.appendChild(this.form);
  }
}
