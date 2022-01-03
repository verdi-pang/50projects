const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')
const congrats = document.getElementById('congrats')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx){
    // this is to check if the current index is 'full' and the next one is not 'full', if yes then we have to assign the correct index number for the foreach loop next. this will allow for the toggling to empty the current cup that is clicked.
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }

    // this is to add the class 'full' 
    smallCups.forEach((cup, idx2)=> {
        // this is to check if the previous ones before the clicked cup is full, if it is we add class 'full', if not we do not add or remove the 'full' class.
        if(idx2 <= idx){
            cup.classList.add('full')
        } else{
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = '0'
    } else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = '0'
        percentage.style.fontSize = '20px'
        percentage.innerText = 'Congrats! You have reached your goal!'
    } else{
        percentage.style.fontSize = '30px'
        remained.style.visibility = 'visible'
        liters.innerText = `${2-(250 * fullCups / 1000)}L`
    }
}