const tbodyFrutas = document.getElementById('tbody-frutas');

function tabelaFruta() {
    frutas.forEach((fruta, index) =>{
        let newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${fruta.imagem}</td>
                            <td>${fruta.nome}</td>
                            <td>R$ ${fruta.preco}</td>
                            <td><button><i class="bi bi-pencil-square"></i></button></td>
                            <td><button onclick='deleteFruta(${fruta.nome})'><i class="bi bi-trash3-fill"></i></button></td>`
        tbodyFrutas.appendChild(newRow);
    })
}
tabelaFruta();