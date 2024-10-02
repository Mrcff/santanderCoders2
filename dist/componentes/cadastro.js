"use strict";
// fiz o cadastro, só precisa testar se funfa
const tbodyFrutas = document.getElementById("tbody-frutas");
let inputNome = document.querySelector("form #nome");
let inputImagem = document.querySelector("form #imagem");
let inputPreco = document.querySelector("form #preco");
let indexEdit = null;
let submitBtn = document.querySelector("#submit");
function criaTabelaFruta() {
    let frutas = getFrutas();
    frutas.forEach((fruta, index) => {
        var _a, _b;
        let newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${fruta.imagem}</td>
                            <td>${fruta.nome}</td>
                            <td>R$ ${fruta.preco}</td>
                            <td><a href="#formulario" class='editbtn tablebtn'><i class="bi bi-pencil-square"></i></a></td>
                            <td><button class='removebtn tablebtn'><i class="bi bi-trash3-fill"></i></button></td>`;
        (_a = newRow.querySelector(".removebtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            removeFruta(fruta.nome);
        });
        (_b = newRow.querySelector(".editbtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
            selecionaFruta(fruta.nome, index);
        });
        tbodyFrutas.appendChild(newRow);
    });
}
criaTabelaFruta();
function removeFruta(nome) {
    criaTabelaFruta();
}
function selecionaFruta(nome, index) {
    inputNome.value = fruta.nome;
    inputImagem.value = fruta.imagem;
    inputPreco.value = fruta.preco;
    indexEdit = index;
}
function salvar() {
    let fruta = {
        nome: inputNome.value,
        imagem: inputImagem.value,
        preco: inputPreco.value,
    };
    if (indexEdit !== null) {
        updateFruta(fruta, indexEdit);
    }
    else {
        createFruta(fruta);
    }
    indexEdit = null;
    inputNome.value = "";
    inputImagem.value = "";
    inputPreco.value = "";
    criaTabelaFruta();
}
submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    salvar();
});
