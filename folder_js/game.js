let score = 0
let life = 0
document.getElementById('life').innerHTML = life
const notif = document.querySelector('.notif')

// Function to update the counter in sessionStorage
function updateCounter() {
    // Retrieve the current value of 'counter' from sessionStorage
    let counter = parseInt(sessionStorage.getItem('counter')) || 0;

    // Increment the counter
    counter++;

    // Update the sessionStorage with the new counter value
    sessionStorage.setItem('counter', counter);
}

function hitHole(holeId) {
    let box = document.getElementById(holeId)
    if (holeId != undefined) {
        if (box.style.color == "black") {
            life--
            document.getElementById('life').innerHTML = life
            box.style.backgroundImage = "url(asset/lubang.png)"
            box.style.color = "aqua"
        } else if (box.style.color == "red")  {
            score++
            document.getElementById('score').innerHTML = score    
            box.style.backgroundImage = "url(asset/lubang.png)"
            box.style.color = "aqua"
        }
        box.style.backgroundImage = "url(asset/lubang.png)"
        box.style.color = "aqua"
    }
    if (life <= 0) {
        clearInterval(intervalID)
        box = document.getElementById(`${randomHole}`)
        box.style.backgroundImage = "url(../asset/lubang.png)"
        document.querySelector('.container2').style.display = "block"
    }
}

let randomHole = Math.floor(Math.random() * 9) + 1
function runGame() {
    let counter = 0
    intervalID = setInterval(function() {
        let prevHole = randomHole
        let mole = Math.floor(Math.random() * 2) + 1
        do {
            randomHole = Math.floor(Math.random() * 9) + 1
        } while(randomHole == prevHole)
            
            if (counter < 10) {
                let box = document.getElementById(`${randomHole}`)
                if (mole == 1) {
                    box.style.backgroundImage = "url(asset/bomb.png)"
                    box.style.color = "black"
                } else if (mole == 2) {
                    counter++
                    box.style.backgroundImage = "url(asset/hewan.png)"
                    box.style.color = "red"
                }
            } else {
                clearInterval(intervalID)
                box = document.getElementById(`${randomHole}`)
                box.style.backgroundImage = "url(asset/lubang.png)"
                document.querySelector('.container2').style.display = "block"
                if (score == 10) {
                    notif.style.transition = '0.4s'
                    notif.style.display = 'block'
                    updateCounter(); 
                }
                setTimeout(function() {
                    notif.style.transition = '0.4s'
                    notif.style.display = 'none'
                },2350)
            }

            box = document.getElementById(`${prevHole}`)
            box.style.backgroundImage = "url(asset/lubang.png)"
            box.style.color = "aqua"
            hitHole()
    }, 600)
}

document.addEventListener("keypress", function() {
    document.querySelector('.container2').style.display = "none"
    life = 3
    score = 0
    document.getElementById('score').innerHTML = score
    document.getElementById('life').innerHTML = life
    runGame()
})

document.querySelector('.container2').addEventListener("click", function() {
    document.querySelector('.container2').style.display = "none"
    life = 3
    score = 0
    document.getElementById('score').innerHTML = score
    document.getElementById('life').innerHTML = life
    runGame()
})

const cursor = document.querySelector('.cursor-hammer')

window.addEventListener("mousemove", function(e) {
    const posX = e.clientX
    const posY = e.clientY

    cursor.style.left = `${posX}px`
    cursor.style.top = `${posY}px`
})

