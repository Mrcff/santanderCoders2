import { Item } from "../models/Item";

export class DeletePage {
  itemId: number;

  constructor() {
    const params = new URLSearchParams(window.location.search);
    this.itemId = Number(params.get("id"));

    this.deleteItem();
  }

  deleteItem() {
    let items = JSON.parse(localStorage.getItem("items") || "[]") as Item[];
    items = items.filter((i) => i.id !== this.itemId);
    localStorage.setItem("items", JSON.stringify(items));
    window.location.href = "index.html"; // Redireciona após exclusão
  }
}
