 const aData = [
    { codigo: '001001',nome:'José da Silva',email:'jose@email.com',telefone: '(11)99901-1234'},
    { codigo: '001002',nome:'Marcio de Souza',email:'marcio@email.com',telefone: '(11)99902-1234'},
    { codigo: '001003',nome:'Mauricio da Cruz',email:'mauricio@email.com',telefone: '(11)99903-1234'},
    { codigo: '001004',nome:'Fabiana Dias',email:'fabiana@email.com',telefone: '(11)99904-1234'},
]

buildTable(aData)

function buildTable(data) {
    let table = document.getElementById('myTable')

    for(let i=0; i < data.length; i++){
        var row = `<tr>
                    <td>${data[i].codigo}</td>
                    <td>${data[i].nome}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].telefone}</td>
                   </tr>`
        table.innerHTML += row
    }
}

$("#formComment").validate();

/* $(function () {
    $('.w3-input').savy('load');
}) */
