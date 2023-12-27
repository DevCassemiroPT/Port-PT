//Switch

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