let frutasInicio = [
  { nome: "Banana", preco: 9.99, imagem: "img/cards/banana.png" },
  { nome: "Maçã", preco: 8.99, imagem: "img/cards/maca.png" },
  { nome: "Laranja Pera", preco: 4.99, imagem: "img/cards/laranja.png" },
  { nome: "Abacaxi", preco: 11.99, imagem: "img/cards/abacaxi.webp" },
  { nome: "Limão", preco: 2.99, imagem: "img/cards/limao.png" },
];

if (!localStorage.getItem("frutas")) {
  localStorage.setItem("frutas", JSON.stringify(frutasInicio));
}
