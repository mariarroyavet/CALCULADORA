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
        return num1 / num2;
    }
}

const calculadora = new Calculadora ();

class Pantalla {
    constructor(pantallaValorAnterior, pantallaValorActual){
        this.pantallaValorActual = pantallaValorActual;
        this.pantallaValorAnterior = pantallaValorAnterior;
        this.canculadora = new Calculadora ();
        this.valorActual = '';
        this.valorAnterios = '';
    }

    agregarNumero(numero) {
        this.valorActual = numero;
    }

}

botonesNumeros.forEach(boton => {
    boton.addEventlistener('click', ()=>{
});
