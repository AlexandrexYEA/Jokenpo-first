const comunicador = document.querySelector(".comunicador")
const p1 = document.querySelector(".p1")
const p2 = document.querySelector(".p2")

let pontuacaoUsuario = 0;
let pontuacaoComputador = 0;




function HumanClick(HumanChoice) {

    gameLogic(HumanChoice, MachinePlay())



    
    return HumanChoice;
}


function MachinePlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function gameLogic(human, machine) {

    alert('Humano: ' + human + "  //  "  +'Máquina:  ' + machine)

if(human === machine){
    comunicador.innerHTML = "Deu empate"
} else if (
    (human === 'paper' && machine === 'rock') ||
    (human ==='rock' && machine === 'scissors') ||
    (human === 'scissors' && machine === 'paper')
) {
    pontuacaoUsuario++;
    p1.innerHTML= pontuacaoUsuario
    comunicador.innerHTML = "Você ganhou!"
} else {
    pontuacaoComputador++;
    p2.innerHTML = pontuacaoComputador
    comunicador.innerHTML= "Você perdeu!"
}
}

