const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const clock = setInterval(function time() {
  let dateNow = new Date()

  let hours = dateNow.getHours()
  let minutes = dateNow.getMinutes()
  let seconds = dateNow.getSeconds()

  if (hours < 10) hours = '0' + hours

  if (minutes < 10) minutes = '0' + minutes

  if (seconds < 10) seconds = '0' + seconds

  horas.textContent = hours
  minutos.textContent = minutes
  segundos.textContent = seconds
})

document.querySelector('.ball').addEventListener('click', e => {
  e.target.classList.toggle('ball-move')
  document.body.classList.toggle('dark')
})
