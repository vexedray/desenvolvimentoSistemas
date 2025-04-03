const lado1 = 5;
const lado2 = 5;
const lado3 = 5;

function verificarTriangulo(a, b, c) {

    if (a <= 0 || b <= 0 || c <= 0) {
        return "Os lados devem ser maiores que zero";
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Os lados não formam um triângulo";
    }

    if (a === b && b === c) {
        return "Triângulo Equilátero";
    } else if (a === b || a === c || b === c) {
        return "Triângulo Isósceles";
    } else {
        return "Triângulo Escaleno";
    }
}





console.log(verificarTriangulo(lado1, lado2, lado3));