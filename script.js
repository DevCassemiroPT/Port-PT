//Switch
/*
function pedir(){
    var valor = prompt("Digite o valor de 1 a 4");

    switch(Number(valor)){
        case 1:
            alert("Você escolheu 1 = Suco");
        break;
        case 2:
            alert("Você escolheu 2 = Água");
        break;
        case 3:
            alert("Você escolheu 3 = Leite");
        break;
        case 4:
            alert("Você escolheu 4 = Refrigerante");
        break;
        default:
            alert("Escolha uma opção entre 1 e 4.")
    }
}
*/

var nome = "Lipe";

if(nome === "Igor"){
    alert("Bem vindo Igor");
}else{
    prompt("Você não é o Igor ?");
}
// === é tutilizado para realizar a condição e comprar o tipo, se é número ou string.


//Operador ternário
var nome = "Alexandre";

nome === "Alexandre" ? console.log("Olá Alexandre") : console.log("Você não é o Alexandre. Faça o login e tente novamente. ");
// ? é utilizado como IF.
// : é utilizado como ELSE