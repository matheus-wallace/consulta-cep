const buttonRequest = document.querySelector(".form__buttonRequest")
const url = "https://viacep.com.br/ws/"
let ceps = []
const articlesChild = document.querySelector(".article__result")

async function getCEP(event) {
  let inputs = inputContianer.querySelectorAll(".form__inputCEP")
  for (let index = 0; index < inputs.length; index++) {
    let cepFormatado = inputs[index].value.replace(".","").replace("-","")
    ceps.push(cepFormatado)
    fetch(`${url}${ceps[index]}/json`)
    .then(response => {return response.json()})
    .then(data => {
      const cep = document.createElement("span")
      const publicplace = document.createElement("span")
      const district = document.createElement("span")
      const locale = document.createElement("span")
      cep.innerHTML = data.cep
      publicplace.innerHTML = data.logradouro
      district.innerHTML = data.bairro
      locale.innerHTML = data.localidade
      document.querySelector(".result__cep").appendChild(cep)
      document.querySelector(".result__publicplace").appendChild(publicplace)
      document.querySelector(".result__district").appendChild(district)
      document.querySelector(".result__locale").appendChild(locale)
    })
    .catch(error => {console.log(error)})
  }
  event.preventDefault()
}


buttonRequest.addEventListener("click", getCEP) 