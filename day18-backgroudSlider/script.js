const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBTN = document.getElementById('left')
const rightBTN = document.getElementById('right')

let activeSlide = 0

rightBTN.addEventListener('click', () =>{ 
    activeSlide++
    if (activeSlide > slides.length - 1){
        activeSlide = 0
    }    

    setBgToBody()
    setActiveSlide()
})

leftBTN.addEventListener('click', () =>{ 
    activeSlide--
    if (activeSlide < 0){
        activeSlide = slides.length - 1
    }    

    setBgToBody()
    setActiveSlide()
})

setBgToBody()

function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide(){
    slides.forEach((slide) => slide.classList.remove('active')
    )

    slides[activeSlide].classList.add('active')
}