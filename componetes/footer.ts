export class Footer {
  element: HTMLElement;

  constructor() {
    this.element = document.createElement("footer");
    this.element.innerHTML = `<p>&copy; 2024 CRUD App. All rights reserved.</p>`;
  }

  render() {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.appendChild(this.element);
    }
  }
}
