export class ViewPage {
    constructor() {
        this.itemContainer = document.createElement("div");
        this.itemContainer.innerHTML = "<h2>Detalhes do Item</h2>";
    }
    render() {
        var _a;
        const params = new URLSearchParams(window.location.search);
        const itemId = Number(params.get("id"));
        const items = JSON.parse(localStorage.getItem("items") || "[]");
        const item = items.find((i) => i.id === itemId);
        if (item) {
            this.itemContainer.innerHTML += `
        <p>ID: ${item.id}</p>
        <p>Nome: ${item.name}</p>
        <p>Descrição: ${item.description}</p>
      `;
        }
        else {
            this.itemContainer.innerHTML += `<p>Item não encontrado</p>`;
        }
        (_a = document.getElementById("main-content")) === null || _a === void 0 ? void 0 : _a.appendChild(this.itemContainer);
    }
}
