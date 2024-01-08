/*

Abaixo de 17 Muito abaixo do peso
Entre 17 e 18,46 Abaixo do peso
Entre 18,5 e 24,99 Peso normal
Entre 25 e 29,99 Acimado peso

Calculo do IMC: peso /(altura*altura)

*/

var altura;
var imc;
var peso;
var resultado;

function calcular (event){
    event.preventDefault();
    
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    imc = peso / (altura * altura);
    
    resultado = document.getElementById('resultado');

    if(imc < 17){
        resultado.innerHTML = '<br/> Seu resultado do seu IMC é: ' + imc.toFixed(2) + '<br/> Cuidado, seu peso está muito abaixo do ideal!';
    } else if(imc > 17 && imc < 18.49){
        resultado.innerHTML = '<br/> Seu resultado do seu IMC é: ' + imc.toFixed(2) + '<br/> Atenção, abaixo do peso recomendado!';
    } else if (imc > 18.5 && imc < 24.99){
        resultado.innerHTML = '<br/> Seu resultado do seu IMC é: ' + imc.toFixed(2) + '<br/> Parabéns, você está com o peso ideal!';
    } else if (imc > 25 && imc < 29.99) {
        resultado.innerHTML = '<br/> Seu resultado do seu IMC é: ' + imc.toFixed(2) + '<br/> Cuidado, muito cuidado, seu peso está acima do ideal. Procure um especialista!!!'
    } else if (imc > 30){
        resultado.innerHTML = '<br/> Seu resultado do seu IMC é: ' + imc.toFixed(2) + '<br/> Cuidado obesidade, procure um médico!';
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}
