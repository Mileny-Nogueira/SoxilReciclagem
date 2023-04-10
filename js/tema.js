const btn = document.querySelector('.temaEscuro')
const efeitoTemaHeader = document.querySelector('.efeitoTemaHeader')
const efeitoTemaFooter = document.querySelector('.efeitoTemaFooter')

btn.onclick = function(){
    this.classList.toggle('active')
    efeitoTemaHeader.classList.toggle('active')
    efeitoTemaFooter.classList.toggle('active')
}