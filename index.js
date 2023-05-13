const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll ('operador');

class Calculadora {
    sumar (num1,num2) {
        return num1 + num2;
    }
    
    restar (num1,num2) {
        return num1 - num2;
    }

    multiplicar (num1,num2) {
        return num1 * num2;
    }

    dividir (num1,num2) {
        if (num1==0 && num2==0) {
            return 'Jueputaaaa como que 0/0 cabeza pinga bobo tonto';
        } else {
            return num1 / num2;
        }
    }
}

const calculadora = new Calculadora();
const pantalla = document.getElementsByClassName("pantalla");
let num1 = 0;
let num2 = 0;
let operador;
let aux = false;

function registrarNumero() {
    const keys = document.querySelector('.calculadora')
    if (num1==0){
        keys.addEventListener('click', e => {
        if (e.target.matches('button')) {
            const key = e.target;
            num1 = key.textContent;
            pantalla.value = num1;
        }
        })
    } else {
        keys.addEventListener('click', e => {
        if (e.target.matches('button')) {
            const key = e.target;
            num2 = key.textContent;
            pantalla.value = num2;
        }
        })
    }
}

function sumar() {
    operador = '+';
}

function restar() {
    operador = '-';
}

function multiplicar() {
    operador = '*';
}

function dividir() {
    operador = '/';
}

function borrar() {
    pantalla.value = '0';
}

function resultado() {
    switch (operador) {
        case '+':
            pantalla.value = calculadora.sumar(num1, num2);
            break;
        case '-':
            pantalla.value = calculadora.sumar(num1, num2);
            break;
        case '*':
            pantalla.value = calculadora.sumar(num1, num2);
            break;
        case '/':
            pantalla.value = calculadora.sumar(num1, num2);
            break;
        case 'default':
            pantalla.value = '0';
            break;
    }
}

/*
class Pantalla {
    constructor(pantallaValorAnterior, pantallaValorActual) {
        this.pantallaValorActual = pantallaValorActual;
        this.pantallaValorAnterior = pantallaValorAnterior;
        this.calculadora = new Calculadora ();
        this.valorActual = '';
        this.valorAnterior = '';
    }

    agregarNumero(numero) {
        this.valorActual = numero;
    }

}
const pantalla = pantalla(pantallaValorAnterior, pantallaValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventlistener('click', ()=> pantalla.agregarNumero(boton.innerHTML))
});

imprimirValores
*/