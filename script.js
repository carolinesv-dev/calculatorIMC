const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const Modal = { // object literal: com tudo relacionado ao modal
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),
  
  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

/* sempre que clicar em botão do form ele envia e recarrega a página, 
é padrão (default), então é preciso cancelar esse recarregamento */
form.onsubmit = function (event) {
  event.preventDefault() /* cancela recarregamento */

  const weight = inputWeight.value /* captura valores do input */
  const height = inputHeight.value

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}

Modal.buttonClose.onclick = () =>  
  Modal.close()

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

