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


  function pushIt(event) {
     var saveDate = JSON.parse(localStorage.getItem('aData'));
     saveDate.queue.push({codigo:$('#ccodigo').val(),nome:$('#cname').val(),email:$('#cemail').val(),telefone:$('#ctelefone').val()});
     localStorage.setItem('aData',JSON.stringify(saveDate));
     outputIt();
 } 

 $("#formComment")
 .submit(function(e) {
    e.preventDefault();
})
.validate();


  