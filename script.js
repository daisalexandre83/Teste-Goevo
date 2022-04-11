 const aData = {
     queue:[
        { codigo: '001001',nome:'José da Silva',email:'jose@email.com',telefone: '(11)99901-1234'},
        { codigo: '001002',nome:'Marcio de Souza',email:'marcio@email.com',telefone: '(11)99902-1234'},
        { codigo: '001003',nome:'Mauricio da Cruz',email:'mauricio@email.com',telefone: '(11)99903-1234'},
        { codigo: '001004',nome:'Fabiana Dias',email:'fabiana@email.com',telefone: '(11)99904-1234'} 
     ]
 }

 localStorage.setItem('aData',JSON.stringify(aData));
 outputIt();

 
 function outputIt() {
     var saveDate = JSON.parse(localStorage.getItem('aData'));
     var outputs = '';
     for( var i = 0; i < saveDate.queue.length; i++){
         outputs += '<div id="'+saveDate.queue[i].id+'">' +saveDate.queue[i].codigo+':'+saveDate.queue[i].nome+':'+saveDate.queue[i].email+':'+saveDate.queue[i].telefone+ '</div>';
        }
        console.log(outputs);
     document.getElementById('demo').innerHTML = outputs;
    }


  function pushIt() {
    console.log('daiane');
     var saveDate = JSON.parse(localStorage.getItem('aData'));
     saveDate.queue.push({codigo:$('ccodigo').val(),nome:$('cname').val(),email:$('cemail').val(),telefone:$('ctelefone').val()});
     localStorage.setItem('aData',JSON.stringify(saveDate));
     outputIt();
 } 




  /* aData = {
      queue:
    [
      {id: 0, name:'Banana'},
      {id: 1, name:'Orange'},
      {id: 2, name:'Apple'},
      {id: 3, name:'Mango'}
    ]  
  };
  
  document.addEventListener("DOMContendLoaded",function(ev) {
      if (localStorage.getItem("November-list")) {
        aData = JSON.parse(localStorage.getItem("November-list"));
      }
    
      showList();

      document.querySelector("#btnAdd").addEventListener("click", function(ev) {
          ev.preventDefault();
          var newItem = document.querySelector("#item").value;
          aData.push(newItem);
          localStorage.setItem("November-list",JSON.stringify(aData));
          showList();
          return false;
      });


  });

  function removeItem(ev) {
      var txt = ev.currentTarget.firstChild.nodeValue;
      for(var i = 0; i < aData.length; i++){
          if (aData[i] == txt) {
              aData.splice(i,1);
          }
      }
      localStorage.setItem("November-list",JSON.stringify(aData));
      showList();
  }
  
  function showList() {
      var output = document.querySelector(".output");
      output.innerHTML ="";
      for (var i = 0; i < aData.length; i++) {
        var  p = document.createElement("p");
        p.innerHTML = aData[i];

        output.appendChild(p);
        p.addEventListener("click",removeItem);
        
      }
  } */

 /* function pushIt() {
     var saveDate = JSON.parse(localStorage.getItem('aData'));

     saveDate.queue.push({codigo:$('input').val(),nome:$('input').val(),email:$('input').val(),telefone:$('input').val()});
     localStorage.setItem('aData',JSON.stringify(saveDate));
     outputIt();
 } */


 
/*  const aData = [
    { codigo: '001001',nome:'José da Silva',email:'jose@email.com',telefone: '(11)99901-1234'},
    { codigo: '001002',nome:'Marcio de Souza',email:'marcio@email.com',telefone: '(11)99902-1234'},
    { codigo: '001003',nome:'Mauricio da Cruz',email:'mauricio@email.com',telefone: '(11)99903-1234'},
    { codigo: '001004',nome:'Fabiana Dias',email:'fabiana@email.com',telefone: '(11)99904-1234'},
] */

/* buildTable(aData)

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
} */