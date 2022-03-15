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

let inputElem = document.querySelector('#ccodigo');
inputElem = document.querySelector('#cname');
inputElem = document.querySelector('#cemail');
inputElem = document.querySelector('#ctelefone');
const form = document.querySelector('#forComment');
const listElem = document.querySelector('#to-do-list');
const buttonElem = document.querySelector('#to-do-list button');

aData = JSON.parse(localStorage.getItem('to-do-list')) || [];

function updateList() {
    listElem.innerHTML = '';

    for (const key in aData) {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.innerText = aData[key];

        const button = document.createElement('button');
        button.innerText = 'Delete';
        button.setAttribute('key',key);
        button.classList.add('delete');

        li.appendChild('span');
        
    }
}