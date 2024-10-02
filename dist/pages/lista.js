export class ListPage {
    constructor() {
        this.listContainer = document.createElement("div");
        this.listContainer.innerHTML = "<h2>Lista de Itens</h2>";
    }
    render() {
        var _a;
        const items = JSON.parse(localStorage.getItem("items") || "[]");
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
        (_a = document.getElementById("main-content")) === null || _a === void 0 ? void 0 : _a.appendChild(this.listContainer);
        this.addEventListeners();
    }
    addEventListeners() {
        document.querySelectorAll(".view-item").forEach((button) => {
            button.addEventListener("click", (e) => {
                const id = e.target.dataset.id;
                window.location.href = `view.html?id=${id}`;
            });
        });
        document.querySelectorAll(".edit-item").forEach((button) => {
            button.addEventListener("click", (e) => {
                const id = e.target.dataset.id;
                window.location.href = `update.html?id=${id}`;
            });
        });
        document.querySelectorAll(".delete-item").forEach((button) => {
            button.addEventListener("click", (e) => {
                const id = e.target.dataset.id;
                this.deleteItem(Number(id));
            });
        });
    }
    deleteItem(id) {
        let items = JSON.parse(localStorage.getItem("items") || "[]");
        items = items.filter((item) => item.id !== id);
        localStorage.setItem("items", JSON.stringify(items));
        window.location.reload(); // Atualiza a página após a exclusão
    }
}
