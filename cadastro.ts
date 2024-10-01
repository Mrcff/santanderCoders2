// fiz o cadastro, só precisa testar se funfa

interface Fruta {
  nome: string;
  imagem: string;
  preco: string;
}

const tbodyFrutas = document.getElementById(
  "tbody-frutas"
) as HTMLTableSectionElement;

let inputNome = document.querySelector("form #nome") as HTMLInputElement;
let inputImagem = document.querySelector("form #imagem") as HTMLInputElement;
let inputPreco = document.querySelector("form #preco") as HTMLInputElement;
let indexEdit: number | null = null;
let submitBtn = document.querySelector("#submit") as HTMLButtonElement;

function criaTabelaFruta(): void {
  let frutas: Fruta[] = getFrutas();
  frutas.forEach((fruta, index) => {
    let newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${fruta.imagem}</td>
                            <td>${fruta.nome}</td>
                            <td>R$ ${fruta.preco}</td>
                            <td><a href="#formulario" class='editbtn tablebtn'><i class="bi bi-pencil-square"></i></a></td>
                            <td><button class='removebtn tablebtn'><i class="bi bi-trash3-fill"></i></button></td>`;

    newRow.querySelector(".removebtn")?.addEventListener("click", () => {
      removeFruta(fruta.nome);
    });
    newRow.querySelector(".editbtn")?.addEventListener("click", () => {
      selecionaFruta(fruta.nome, index);
    });
    tbodyFrutas.appendChild(newRow);
  });
}
criaTabelaFruta();

function removeFruta(nome: string): void {
  criaTabelaFruta();
}

function selecionaFruta(nome: string, index: number): void {
  inputNome.value = fruta.nome;
  inputImagem.value = fruta.imagem;
  inputPreco.value = fruta.preco;
  indexEdit = index;
}

function salvar(): void {
  let fruta: Fruta = {
    nome: inputNome.value,
    imagem: inputImagem.value,
    preco: inputPreco.value,
  };

  if (indexEdit !== null) {
    updateFruta(fruta, indexEdit);
  } else {
    createFruta(fruta);
  }

  indexEdit = null;
  inputNome.value = "";
  inputImagem.value = "";
  inputPreco.value = "";
  criaTabelaFruta();
}

submitBtn.addEventListener("click", (event: Event) => {
  event.preventDefault();
  salvar();
});
