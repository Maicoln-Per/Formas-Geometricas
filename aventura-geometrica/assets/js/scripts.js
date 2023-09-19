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