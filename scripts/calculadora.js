function calcularSoma() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const soma = somarNumeros(numero1, numero2);
    document.getElementById('resultado').innerText = 'A soma é: ' + soma;

}

function somarNumeros(a, b) {
        return a + b;
}

function calcularSubtracao() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const sub = subtrairNumero(numero1, numero2);
    document.getElementById('resultado').innerText = '\n' + 'O resultado é: ' + sub;
}

function subtrairNumero(a, b) {
    return a - b;
}

function capturaTecla(event){
    alert(event.key);
}

document.addEventListener("keydown", function (event) {
    if (event.key.toLowerCase() === "x") {
        let activeElement = document.activeElement;
        
        if (activeElement.tagName === "input") {
            activeElement.value = "   ";
        }
    }
});

function minhaFuncaoKeydown(event) {
    capturaTecla(event);
}
