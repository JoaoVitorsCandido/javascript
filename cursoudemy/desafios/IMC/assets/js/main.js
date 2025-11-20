function escopo() {
  const form = document.querySelector(".form");
  const resultado = document.getElementById("resultado");
  
  function eventoBotao(evento){
    evento.preventDefault();
  
  const peso = Number(document.getElementById("ipeso").value);
  let altura = Number(document.getElementById("ialt").value);
  
  const imc = (peso / (altura * altura)).toFixed(1)
  
  if (imc <= 18.49){
    resultado.innerHTML = `Seu IMC é ${imc}, você está abaixo do peso.`
    resultado.style.backgroundColor = "#FF2323ED"
  }else if (imc >= 18.5 && imc <= 24.9){
    resultado.innerHTML = `Seu IMC é ${imc}, seu peso está normal.`
    resultado.style.backgroundColor = "green"
  }else if (imc >= 25 && imc <= 29.9){
    resultado.innerHTML = `Seu IMC é ${imc}, você está com sobrepeso.`
    resultado.style.backgroundColor = "darkgreen"
    resultado.style.paddingBottom = "50px"
  }else if (imc >= 30 && imc <= 34.9){
    resultado.innerHTML = `Seu IMC é ${imc}, você está com obesidade grau 1!`
    resultado.style.backgroundColor = "#F5E933ED"
    resultado.style.paddingBottom = "50px"
  }else if (imc >= 35 && imc <= 39.9){
    resultado.innerHTML = `Seu IMC é ${imc}, você está com obesidade grau 2!!`
    resultado.style.backgroundColor = "orange"
    resultado.style.color = "black"
    resultado.style.paddingBottom = "50px"
  }else {
    resultado.innerHTML = `Seu IMC é ${imc}, você está com obesidade grau 3!!!`
    resultado.style.backgroundColor = "red"
    /*resultado.style.color = "black"*/
    resultado.style.paddingBottom = "50px"
  }
  };
  
  form.addEventListener("submit", eventoBotao);
};

escopo()

