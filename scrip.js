function showAlert(){
    alert("¡Hola, esta es una alerta desde JavaScript!")
}


function playGame(userChoice) {
    var choices = ['roca', 'papel', 'tijera'];
    var computerChoice = choices[Math.floor(Math.random() * 3)];
  
    var result = getResult(userChoice, computerChoice);
  
    var resultElement = document.getElementById('result');
    resultElement.textContent = "Elegiste: " + userChoice + " | Computadora eligió: " + computerChoice + " | Resultado: " + result;
  }
  
  function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "¡Empate!";
    } else if (
      (userChoice === 'roca' && computerChoice === 'tijera') ||
      (userChoice === 'papel' && computerChoice === 'roca') ||
      (userChoice === 'tijera' && computerChoice === 'papel')
    ) {
      return "¡Ganaste!";
    } else {
      return "¡Perdiste!";
    }
  }
  