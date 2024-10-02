export class Header {
    constructor() {
        this.element = document.createElement("header");
        this.element.innerHTML = `
      <h1>CRUD App</h1>
      <nav>
        <a href="#">Listar</a>
        <a href="#">Criar Novo</a>
      </nav>
    `;
    }
    render() {
        const header = document.getElementById("header");
        if (header) {
            header.appendChild(this.element);
        }
    }
}
