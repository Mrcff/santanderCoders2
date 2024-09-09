let frutas = [
  { nome: "Banana", preco: 9.99, imagem: "img/cards/banana.png" },
  { nome: "Maçã", preco: 8.99, imagem: "img/cards/maca.png" },
  { nome: "Laranja Pera", preco: 4.99, imagem: "img/cards/laranja.png" },
  { nome: "Abacaxi", preco: 11.99, imagem: "img/cards/abacaxi.webp" },
  { nome: "Limão", preco: 2.99, imagem: "img/cards/limao.png" },
];

let verduras = [];
let legumes = [];
let sucos = [];

function getFrutas() {
  return frutas;
}

function getFruta(nome) {
  let resultado = frutas.find((fruta) => {
    return fruta.nome.toLowerCase() == nome.toLowerCase();
  });
  return resultado;
}

function createFruta(fruta) {
    let jaExiste = getFruta(fruta.nome);
    if (!jaExiste) {
        frutas.push(fruta);
    }
}

function deleteFruta(nome) {
    let newArray = frutas.filter(fruta => fruta.nome.toLowerCase() != nome.toLowerCase());
    frutas = newArray;
}

function updateFruta(fruta, index) {
    // const index = frutas.findIndex(item => item.nome.toLowerCase() == fruta.nome.toLowerCase());

    if(index > -1 && index < frutas.length){
        frutas[index] = fruta;
    }
}
