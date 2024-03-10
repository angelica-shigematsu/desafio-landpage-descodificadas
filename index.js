const regExEmail = /^[^@ ,;{}\[\]$!%&*]+@[^@ \d ,;{}\[\]$!%&*]+\.[^@ \d ,;{}\[\]$!%&*]+/i
const arrayMonths = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'novembro', 'dezembro']
const regExHasNumber = /^[0-9]/

window.addEventListener('load', () => {
  let month = new Date().getMonth() 
  document.getElementById('month').innerHTML = arrayMonths[month]
})

document.addEventListener('click', async(event) => {

  let name = document.getElementById("name").value
  let lastname = document.getElementById("lastname").value
  let email = document.getElementById("email").value
  let weekend = document.getElementById("weekend").value


  validationName = regExHasNumber.test(name) || name.length < 3 ? false : true
  validationLastname = regExHasNumber.test(lastname) || name.length < 3 ? false : true
  validationEmail = regExEmail.test(document.getElementById("email").value) ? true : false
  validationWeekend = document.getElementById("weekend").value.length ? true : false

  let city = event.target.value

 let btnRegister = event.target.innerHTML

 switch(city) {
  case 'sorocaba': 
    document.getElementsByClassName('image_map')[0].innerHTML = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14638.78178084184!2d-47.4468849!3d-23.4714477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf5ff803606b31%3A0xb0bec34df5cd8aff!2sParque%20das%20%C3%81guas%20%22Maria%20Barbosa%20Silva%22!5e0!3m2!1sen!2sbr!4v1709925715801!5m2!1sen!2sbr" width="700" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
      break;
  case 'saopaulo': 
    document.getElementsByClassName('image_map')[0].innerHTML =
      `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14625.887234952792!2d-46.6577302!3d-23.5874064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59f1069d11d1%3A0xcb936109af9ce541!2sParque%20Ibirapuera!5e0!3m2!1sen!2sbr!4v1709925515886!5m2!1sen!2sbr" width="700" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `
    break;   
 }

 let sendData = btnRegister == "Cadastrar" && validationName && validationLastname && validationEmail && validationWeekend

 if (sendData) { 
  document.getElementsByClassName('message_send_data')[0].style.backgroundColor = "#acdfa4"
  document.getElementsByClassName('message_send_data')[0].style.padding = "2%"
  document.getElementsByClassName('message_send_data')[0].innerHTML = "Incrito. Espero você."

  limparCampo();

 } else if ( btnRegister == "Cadastrar") {
  document.getElementsByClassName('message_send_data')[0].style.backgroundColor = "#e69a93"
  document.getElementsByClassName('message_send_data')[0].style.padding = "2%"
  document.getElementsByClassName('message_send_data')[0].innerHTML = "Erro. Insira os dados corretamente"
 }

})

const limparCampo = () => {
  document.getElementById("name").value = ''
  document.getElementById("lastname").value = ''
  document.getElementById("email").value = ''
}

