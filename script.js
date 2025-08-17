let number = parseInt(localStorage.getItem('contador')) || 0

function menos() {
    number -= 1
    render()
    salvar()
}
function zero() {
    number = 0
    render()
    salvar()
}
function mais() {
    number += 1

    render()
    salvar()

    setTimeout(() => {
        if (number === 100) {
            alert('"viciado"')
        }
        else if (number === 1) {
            alert('Meu primeiro Click')
        }
    }, 0)
}


function render() {
    document.querySelector('#resultado').innerHTML = number
}
function salvar() {
    localStorage.setItem('contador', number)
}
function light() {
    document.body.className = 'luz'
    salvar2('luz')
}
function dark() {
    document.body.className = 'preto'
    salvar2('preto')
}
function red() {
    document.body.className = 'red'
    salvar2('red')
}
function purple() {
    document.body.className = 'purple'
    salvar2('purple')
}
function blue() {
    document.body.className = 'blue'
    salvar2('blue')
}
function pink() {
    document.body.className = 'pink'
    salvar2('pink')
}
function lime() {
    document.body.className = 'lime'
    salvar2('lime')
}
function brown() {
    document.body.className = 'brown'
    salvar2('brown')
}
function cian() {
    document.body.className = 'cian'
    salvar2('cian')
}
function lilac() {
    document.body.className = 'lilac'
    salvar2('lilac')
}
function orange() {
    document.body.className = 'orange'
    salvar2('orange')
}
function salvar2(tema) {
    localStorage.setItem('cor', tema)
}
function loadTheme() {
    const temaSalvo = localStorage.getItem('cor')
    if (temaSalvo) {
        document.body.className = temaSalvo
    }
}
window.onload = loadTheme
render()