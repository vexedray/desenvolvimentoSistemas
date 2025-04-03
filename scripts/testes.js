function funcao1 (){
    const now = new Date();
    const text = now.toLocaleDateString();
    alert(text);
}

const funcao2 = function(){
    alert('Usando a função anonima 2222')
}

const funcao3 = function(){
    alert('Usando a função anonima 3333')
}

function escolheFnc(){
    const radio = document.getElementsByName("fnc")

    if(radio[0].checked){
        document.getElementById('btn2').onclick = funcao2;
    } else{
        document.getElementById('btn2').onclick = funcao3;
    }
}