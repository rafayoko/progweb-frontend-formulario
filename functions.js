let url = "https://tt905-2021-progweb-mensagens.herokuapp.com/mensagens/"

async function callFetchWithGet(){
    let headers = new Headers();
    const options = {
        method : 'Get',
        mode: 'cors',
        headers: headers 
    }
    const output = document.getElementById("json");
    const response = await fetch(url, options);
    if (response.status>=200 && response.status <=300){
        console.log("Funcionou");
    
       output.innerHTML = await response.text();
    } else{
        console.log("Deu errado");
        
    }

}

async function callFetchWithPost(mensagem){

    const options = {
        method : 'Post',
        mode: 'cors',
        headers:{
            'Accept':'application/json',
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            'mensagem':mensagem
        })
    } 
    await fetch(url,options);
}

async function callFetchWithPut(id, novaMensagem){
    const options = {
        method : 'Put',
        mode: 'cors',
        headers: {
            'Accept':'application/json',
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            'mensagem': novaMensagem
        })
    }   
  await fetch(`${url}${id}`, options);
}
  
async function callFetchWithDelete(id){
    const options = {
        method : 'Delete',
        mode: 'cors',
        headers: {
            'Accept':'application/json',
            'content-type' : 'application/json'
        }
    }   
  await fetch(`${url}${id}`, options);
}
  

//Formulários

function submitPost(){
    console.log("entrei na função");
    const form = document.forms['postForm'];
    const mensagem = form["mensagem"].value;
    callFetchWithPost(mensagem);
    return false; //evitar o reload na tela.
 
}

//Formulários

function submitPut(){

    const form = document.forms['putForm'];
    const id = form["id"].value;
    const mensagem = form["mensagem"].value;
    callFetchWithPut(id,mensagem);
    return false; //evitar o reload na tela.
 
}


function submitDelete(){

    const form = document.forms['deleteForm'];
    const id = form["id"].value;

    callFetchWithDelete(id );
    return false; //evitar o reload na tela.
 
}