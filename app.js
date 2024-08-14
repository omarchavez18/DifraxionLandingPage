const btn = document.getElementById('button')

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault()

  btn.value = 'Enviando...'

  const serviceID = 'service_2d4c4bh'
  const templateID = 'template_dfm1keh'

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = 'Enviado'
      alert('Correo enviado!')
    },
    (err) => {
      btn.value = 'Error al enviar correo'
      alert(JSON.stringify(err))
    }
  )
})

function showVideo() {
  document.getElementById('principalContainer').style.display = 'none'

  document.getElementById('videoContainer').style.display = 'block'
}

function generateGrid(rows, columns) {
  const dotGrid1 = document.getElementById('dotGrid')
  for (let i = 0; i < rows * columns; i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('circle')
    dotGrid1.appendChild(gridItem)
  }
}
generateGrid(3, 7)

function generateGrid2(rows, columns) {
  const dotGrid2 = document.getElementById('dotGrid2')
  for (let i = 0; i < rows * columns; i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('circle')
    dotGrid2.appendChild(gridItem)
  }
}
generateGrid2(7, 3)

function generateGrid3(rows, columns) {
  const dotGrid3 = document.getElementById('dotGrid3')
  for (let i = 0; i < rows * columns; i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('circle')
    dotGrid3.appendChild(gridItem)
  }
}
generateGrid3(4, 7)

function generateGrid4(rows, columns) {
  const dotGrid4 = document.getElementById('dotGrid4')
  for (let i = 0; i < rows * columns; i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('circle')
    dotGrid4.appendChild(gridItem)
  }
}
generateGrid4(4, 7)
