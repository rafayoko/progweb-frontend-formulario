let url = "https://tt905-2021-progweb-mensagens.herokuapp.com/mensagens"

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
    let headers = new Headers();
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
    } await fetch(url,options);
}

async function callFetchWithPut(){
    let headers = new Headers();
    const options = {
        method : 'Put',
        mode: 'cors',
        headers: headers 
    }

async function callFetchWithDelete(){
    let headers = new Headers();
    const options = {
        method : 'Delete',
        mode: 'cors',
        headers: headers 
    }