"use strict";
const divFrutas = document.getElementById("frutas");
function getFrutas() {
    return [
        { nome: "Banana", imagem: "banana.png", preco: "4,99" },
        { nome: "Maçã", imagem: "maca.png", preco: "8,99" },
    ];
}
//   frutas.forEach((fruta) => {
//     let newCard = document.createElement("div");
//     newCard.classList.add("frutas-itens");
//     newCard.innerHTML = `<div class="fruta-imagem"><img src="${fruta.imagem}" alt="${fruta.nome}"></div>
//                              <h4>${fruta.nome}</h4>
//                              <p>R$ ${fruta.preco}Kg</p>
//                              <a href="#"><i class="bi bi-cart2"></i> Adicionar</a>`;
//     divFrutas.appendChild(newCard);
//   });
// }
// criaDivFrutas();
