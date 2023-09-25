function calcularCirculo() {
    // Obtenha os valores inseridos pelo usuário
    // Métodos e propriedades
    // getElementById seleciona o elemento com base no ID. 
    // Também existe o querySelector
    let raio = parseFloat(document.getElementById('raio').value); //20.0
    // Calcule a Círculo
    // Podemos utilizar a biblioteca Math do javascript
    let area = Math.PI * (Math.pow(raio,2));
    // Exiba o resultado na página
    document.getElementById('resultado').innerHTML = area.toFixed(2);
    // toFixed limita o valor a "x" casas após a virgúlas.  
}

function calcularPoligono() {
    // Obtenha os valores inseridos pelo usuário
    let lados = parseInt(document.getElementById('lados').value); //5
    let comprimento = parseFloat(document.getElementById('comprimento').value); //10

    // Calcule a área do polígono regular
    let area = (lados * comprimento * comprimento) / 2;

    // Exiba o resultado na página
    document.getElementById('resultado').innerHTML = area.toFixed(2);
}

// Primeira arrow function
const calcularQuadrado = () => {
    // Obtenha os lados do quadrado
    let lados = parseFloat(document.getElementById('ladoQuadrado').value);
    // Calcula a área do quadrado
    let area = Math.pow(lados, 2);
    // Exibe o resultado do quadrado
    document.getElementById('resultado').innerHTML = area.toFixed(1);
}

// Segunda arrow function
const calcularSetorCircular = () => {
    let angulo_Central = parseInt(document.getElementById('anguloCentral').value);
    const pi = 3.14159;
    let raio = parseFloat(document.getElementById('raio').value);
    let area = (angulo_Central/360) * pi * Math.pow(raio, 2);
    document.getElementById('resultado').innerHTML = area.toFixed(1);
}

const calcularRetangulo = () => {
    let base = parseFloat(document.getElementById('baseRetangulo').value);
    let altura = parseFloat(document.getElementById('alturaRetangulo').value);
    let area = base * altura;
    document.getElementById('resultado').innerHTML = area.toFixed(1);
}

const calcularTrapezoide = () => {
    let baseMaior = parseFloat(document.getElementById('baseMaior').value);
    let baseMenor = parseFloat(document.getElementById('baseMenor').value);
    let altura = parseFloat(document.getElementById('alturaTrapezoide').value);
    let area = (baseMaior + baseMenor) * altura / 2;
    document.getElementById('resultado').innerHTML = area.toFixed(1);
}

const calcularTroncodaPiramide = () => {
    // Obtenha os valores inseridos pelo usuário
    // Métodos e propriedades
    // getElementById seleciona o elemento com base no ID. 
    // Também existe o querySelector
    let raioMaior = parseFloat(document.getElementById('raioMaior').value); //20.0
    let raioMenor = parseFloat(document.getElementById('raioMenor').value);
    let altura = parseFloat(document.getElementById('altura').value);

    // Calcule a área do tronco de pirâmide
    // Podemos utilizar a biblioteca Math do javascript
    let area = Math.PI * (raioMaior + raioMenor) * (raioMaior - raioMenor + Math.sqrt(Math.pow(altura, 2) + Math.pow(raioMaior - raioMenor, 2)));
    
    // Exiba o resultado na página
    document.getElementById('resultado').innerHTML = area.toFixed(2);
    // toFixed limita o valor a "x" casas após a virgúlas.  
}

const calcularCoroaDoCirculo = () => {
    let raioMaior = parseFloat(document.getElementById('raioMaior').value); //20.0
    let raioMenor = parseFloat(document.getElementById('raioMenor').value);
    const pi = 3.14159;
    let area = pi * (Math.pow(raioMaior, 2) - Math.pow(raioMenor, 2));
    document.getElementById('resultado').innerHTML = area.toFixed(1);
}