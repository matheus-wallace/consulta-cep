const buttonRequest = document.querySelector(".form__buttonRequest")
const url = "https://viacep.com.br/"
let ceps = []

function getCEP(event) {
  let inputs = inputContianer.querySelectorAll(".form__inputCEP")
  inputs.forEach(elements => {
    ceps.push(elements.value)
  });
  
  event.preventDefault()
}


buttonRequest.addEventListener("click", getCEP) 