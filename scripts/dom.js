function alterarConteudo(){
    const titulo = document.getElementById('titulo');
    titulo.textContent = "Titulo alterado";

    const primeiroParagrafo = document.querySelector(".paragrafo")
    primeiroParagrafo.classList.add("highlight");

    const todosParagrafos = document.querySelectorAll(".paragrafo");
    todosParagrafos.forEach((paragrafo, index) => {
        paragrafo.textContent = `Paragrafo ${index +1} alterado pelo javascript`;
        
    });

    alert("Alterações Realizadas");

}