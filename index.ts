interface Fruta {
  nome: string;
  imagem: string;
  preco: string;
}

const divFrutas = document.getElementById("frutas") as HTMLDivElement;

function criaDivFrutas(): void {
  let frutas: Fruta[] = getFrutas();
  divFrutas.innerHTML = "";

  frutas.forEach((fruta) => {
    let newCard = document.createElement("div");
    newCard.classList.add("frutas-itens");
    newCard.innerHTML = `<div class="fruta-imagem"><img src="${fruta.imagem}" alt="${fruta.nome}"></div>
                             <h4>${fruta.nome}</h4>
                             <p>R$ ${fruta.preco}Kg</p>
                             <a href="#"><i class="bi bi-cart2"></i> Adicionar</a>`;

    divFrutas.appendChild(newCard);
  });
}
criaDivFrutas();
