function getFrutas() {
  let frutas = localStorage.getItem('frutas');
  return JSON.parse(frutas);
}

function getFruta(nome) {
  let frutas = getFrutas();
  let resultado = frutas.find((fruta) => {
    return fruta.nome.toLowerCase() == nome.toLowerCase();
  });
  return resultado;
}

function createFruta(fruta) {
    let frutas = getFrutas();
    let jaExiste = getFruta(fruta.nome);
    if (!jaExiste) {
        frutas.push(fruta);
        localStorage.setItem('frutas', JSON.stringify(frutas));
    }
}

function deleteFruta(nome) {
    let frutas = getFrutas();
    let newArray = frutas.filter(fruta => fruta.nome.toLowerCase() != nome.toLowerCase());
    frutas = newArray;
    localStorage.setItem('frutas', JSON.stringify(frutas));
}

function updateFruta(fruta, index) {
    // const index = frutas.findIndex(item => item.nome.toLowerCase() == fruta.nome.toLowerCase());
    let frutas = getFrutas();

    if(index > -1 && index < frutas.length){
        frutas[index] = fruta;
    }
    localStorage.setItem('frutas', JSON.stringify(frutas));
}
