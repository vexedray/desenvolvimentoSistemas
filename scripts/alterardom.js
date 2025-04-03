function alterarConteudo(){
    const titulo = document.getElementById("titulo");
    const paragrafo = document.getElementById("paragrafo");

    titulo.textContent = "Novo Titulo (textContent)";
    paragrafo.innerHTML = "Texto Atualizado com <strong>innerHTML</strong>!";
}

function alterarAtributos(){
    const campoTexto = document.getElementById("campoTexto");

    campoTexto.value = "Novo Valor"

    campoTexto.setAttribute("placeholder", "Digite algo novo...");
    campoTexto.setAttribute("disable", "true");
}

function alterarClasse(){
    const paragrafo = document.getElementById("paragrafo");
    paragrafo.classList.toggle("destaque");
}

function limparInput(){
    const campoTexto = document.getElementById("campoTexto");
    campoTexto.removeAttribute("disable");
    campoTexto.value = "";


}

