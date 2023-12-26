var area = document.getElementById('area');

function entrar(){
    var nome = prompt("Digite seu nome ");

    if (nome === '' || nome === null){
        alert("Ops, algo deu errado !");
        area.innerHTML = "Clique no botão para seguir !"

    } else {
        area.innerHTML = "Bem vindo(a) " + nome + " ! ";
        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);
        }
    }

    function sair(){
        alert("Até mais!");
        area.innerHTML = "Você saiu !!!";
    }

    function mediaAluno(nota1, nota2){
        var media = (nota1 + nota2) / 2;


        if(media >= 7){
            console.log("Parabéns, você foi aprovado(a) com a média " + media + " ! ");
        } else if (media < 7) {
            console.log("Lamento, você foi reprovado(a) com a média " + media + " ! ");
        }       
    }

    function aluno(nome, curso){
        var mensagem = "Bem vindo(a) " + nome + " ao curso de " + curso + ", bons estudos ! ";
        console.log(mensagem);
    }
