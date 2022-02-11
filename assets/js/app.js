let navigation = document.querySelector('.navigation')

window.addEventListener('scroll', ()=>{
    let scrollYPosition = window.pageYOffset;
    if(scrollYPosition>50){
        navigation.classList.add('scroll')
    }else{
        navigation.classList.remove('scroll')
    }
})

let hamburger = document.querySelector('.hamburger')
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('is-active');
    document.body.classList.toggle('menuOpen');
    document.body.classList.toggle('stopScroll');
})

    
