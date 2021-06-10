function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario){
    document.createElement("tr");
    tdID = document.createElement("td");
    tdNome = document.createElement("td");
    tdId.innerHTML = usuario.id 
    tdNome.innerHTML = usuario.name 

    linha.appendChild(tdID);
    linha.appendChild(tdNome);

    return linha;
}

function main(){
    let data = fazGet("http://127.0.0.1:5500/get/usuarios")
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
    // Para cada usuario
        // criar uma linha
        // adicionar na tabela
}

main()


