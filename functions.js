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