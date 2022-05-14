const board = document.querySelector('#board')
const colors = ['#27ff', '#77f6ff', '#ff2a', '#fff800', '#ff9d00', '#ff9500', '#ff012a', '#ff16ff'];
const SQUARES_NUMBER = 504

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',() => {
        setColor(square)
    })

    square.addEventListener('mouseleave',() => {
        removeColor(square)
    })


    board.append(square)
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.boxShadow = '0 0 2px #000'
    element.style.backgroundColor = '#1d1d1d'
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    console.log(colors.length);
    return colors[index]
}