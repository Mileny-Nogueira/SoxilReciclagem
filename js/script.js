ScrollReveal({reset: true})
/*Index*/
ScrollReveal().reveal('.caminhao', {distance: '500px', origin: 'right', duration: 3000, delay: 200});
ScrollReveal().reveal('.face', {origin: 'bottom', delay: 200, interval: 200, distance: '100px', duration: 1000});
/*Serviços*/
ScrollReveal().reveal('.efeitoAtencao', {duration: 1000, delay: 100, scale: 0.3});
ScrollReveal().reveal('.efeitoServico', {duration: 800, delay: 100, origin: 'left', distance: '50px'});
/*PGRS*/
ScrollReveal().reveal('.efeitoPgrsIcon', {duration: 800, delay: 100, origin: 'left', distance: '100px'});
ScrollReveal().reveal('.efeitoPgrsH3', {duration: 800, delay: 100, origin: 'right', distance: '400px'});
ScrollReveal().reveal('.efeitoPgrsP', {duration: 850, delay: 100, origin: 'right', distance: '400px'});
/*CONTATO*/
ScrollReveal().reveal('.efeitoContato', {origin: 'bottom', delay: 200, interval: 300, distance: '100px', duration: 1000, scale: 0.1});


const card1 = document.querySelector('#card1')
const card2 = document.querySelector('#card2')
const card3 = document.querySelector('#card3')

card1.addEventListener("click", () => {
    card1.classList.toggle("flip")
})

card2.addEventListener("click", () => {
    card2.classList.toggle("flip")
})

card3.addEventListener("click", () => {
    card3.classList.toggle("flip")
})


const pergunta = document.querySelectorAll('.pergunta')
const resposta = document.querySelectorAll('.resposta')

for(let i=0; i<pergunta.length; i++) {
    pergunta[i].addEventListener('click',() => {
        if(pergunta[i].classList.contains('close')){
            pergunta[i].classList.toggle('close')
            resposta[i].classList.toggle('open')
        }else{
            pergunta[i].classList.add('close')
            resposta[i].classList.add('open')
        }
    })
}
function clickMenu(){
    if(menu.style.display == 'block'){
        menu.style.display = 'none';
    }
    else{
        menu.style.display = 'block';
    }
}


