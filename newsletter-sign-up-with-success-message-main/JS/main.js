let block1 = document.querySelector('#container')
let block2 = document.querySelector('#thanks-box')
let email = document.querySelector('#email')
let button = document.querySelector('#button')

function verificar(email){
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email)
}

button.addEventListener("click", () => {
    if (verificar(email.value) !== true) {
      textEmail.textContent = "E-mail inválido";
      email.style.background = 'rgb(248, 104, 104)'
      email.style.border = '1px solid red'
      email.style.outlineColor = 'red'
      
    } else {
      textEmail.textContent = "";
      email.style.background = ''
      email.style.border = ''
      block1.style.display = 'none'
      block2.style.display = 'block'
      email.style.outlineColor = 'none'
    }
  });

function dismiss(){
    block1.style.display = 'flex'
    block2.style.display = 'none'
}