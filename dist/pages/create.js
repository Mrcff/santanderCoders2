import { Item } from "../models/item";
export class CreatePage {
    constructor() {
        this.form = document.createElement("form");
        this.form.innerHTML = `
      <label>Nome: <input type="text" id="name"></label>
      <label>Descrição: <input type="text" id="description"></label>
      <button type="submit">Criar</button>
    `;
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
    }
    handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;
        const newItem = new Item(Date.now(), name, description);
        this.saveItem(newItem);
    }
    saveItem(item) {
        let items = JSON.parse(localStorage.getItem("items") || "[]");
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
        window.location.href = "index.html"; // Redireciona para a página inicial após criar
    }
    render() {
        var _a;
        (_a = document.getElementById("main-content")) === null || _a === void 0 ? void 0 : _a.appendChild(this.form);
    }
}
