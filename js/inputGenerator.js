const newInputCEP = document.querySelector(".form__createInput")
const inputContianer = document.querySelector(".form__inputContainer")

function createNewInput(event){
  if (inputContianer.children.length < 9) {
    const input = document.createElement("input")
    input.className = "form__inputCEP"
    input.setAttribute("placeholder", "00.000-000")
    input.setAttribute("data-mask","00.000-000")
    inputContianer.appendChild(input)
    const removeInput = document.createElement("button")
    removeInput.className = "form__removeInput"
    removeInput.setAttribute("type","button")
    inputContianer.appendChild(removeInput)
    removeInput.addEventListener("click", removeNewInput)
  }
  event.preventDefault()
}


function removeNewInput() {
  for (let index = 0; index < 2; index++) {
    inputContianer.removeChild(inputContianer.lastChild)
  }
  
}


newInputCEP.addEventListener("click",createNewInput)




