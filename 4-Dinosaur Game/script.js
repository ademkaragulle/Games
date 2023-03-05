const game = document.getElementById('game')
const trex = document.getElementById('trex')
const cactus = document.getElementById('cactus')
const score = document.getElementById('score')
let gameOver = document.getElementById('gameOver')
let time = 0

let trexVal = {
    trexBot: 0,
    trexLeft: 2,
    width: 39,
    height: 42
}

let cacVal = {
    cacBot: 0,
    cacLeft: 775,
    width: 23,
    height: 46
}

trex.style.left = trexVal.trexLeft + 'px'
trex.style.bottom = trexVal.trexBot + 'px'
cactus.style.left = cacVal.cacLeft + 'px'
cactus.style.bottom = cacVal.cacBot + 'px'

game.addEventListener('click', space)
function space() {
    if (trexVal.trexBot == 0) {
        var ıntervalO = setInterval(function () {
            trexVal.trexBot += 1
            trex.style.bottom = trexVal.trexBot + 'px'
            if (trexVal.trexBot == 70) {
                clearInterval(ıntervalO)
                setTimeout(function () {
                    var ıntervalT = setInterval(function () {
                        trexVal.trexBot -= 1
                        trex.style.bottom = trexVal.trexBot + 'px'
                        if (trexVal.trexBot == 0) {
                            clearInterval(ıntervalT)
                        }
                    }, 3)
                }, 100)
            }
        }, 3)
    }
}


game.addEventListener('click', function () {
    let crashControl = setInterval(function () {
        let trexBot = game.offsetHeight - trex.offsetTop - trex.offsetHeight
        let trexRight = trex.offsetLeft + trex.offsetWidth
        let cactusTop = game.offsetHeight - cactus.offsetTop
        let cactusLeft = cactus.offsetLeft
        if (trexBot < cactusTop && trexRight > cactusLeft) {
            cacVal.cacLeft = 775
            cacVal.cacBot = 0
            clearInterval(crashControl)
            clearInterval(adem)
            gameOver.innerText = 'Game Over'
            time = 0
        }
    }, 3)
    if (time == 0) {
        gameOver.innerText = ''
        var adem = setInterval(function () {
            cacVal.cacLeft -= 1
            if (cacVal.cacLeft == -20) {
                cacVal.cacLeft = 775
            }
            cactus.style.left = cacVal.cacLeft + 'px'
            score.innerText = 'Score:' + time
            time++
        }, 3)
    }
})
