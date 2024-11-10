let resultado = '';
let operando1 = '';
let operacionActual = '';

function agregarNumero(numero) {
    resultado += numero;
    document.getElementById("resultado").value = resultado;
}

function operacion(operador) {
    operando1 = resultado;
    operacionActual = operador;
    resultado = '';
    document.getElementById("resultado").value = '';
}

function calcular() {
    let operando2 = resultado;
    let total = 0;
    switch (operacionActual) {
        case '+':
            total = parseFloat(operando1) + parseFloat(operando2);
            break;
        case '-':
            total = parseFloat(operando1) - parseFloat(operando2);
            break;
        case '*':
            total = parseFloat(operando1) * parseFloat(operando2);
            break;
        case '/':
            if (operando2 == '0') {
                alert("No se puede dividir por 0");
                total = '';
            } else {
                total = parseFloat(operando1) / parseFloat(operando2);
            }
            break;
    }
    resultado = total.toString();
    document.getElementById("resultado").value = resultado;
}

function limpiar() {
    resultado = '';
    operando1 = '';
    operacionActual = '';
    document.getElementById("resultado").value = '';
}