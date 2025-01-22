let counter = 0;
function sidebarActive() {
    let sidebar = document.getElementById("side")
    let navBtn = document.getElementById("nav-btn")
    if (counter % 2 == 0) {
        sidebar.style.transition = "0.3s"
        sidebar.style.transform = "translateX(0%)"
        navBtn.style.transition = "0.3s"
        navBtn.style.transform = "rotate(90deg)"
    } else {
        sidebar.style.transition = "0.3s"
        sidebar.style.transform = "translateX(-100%)"
        navBtn.style.transition = "0.3s"
        navBtn.style.transform = "rotate(180deg)"
    }
    counter++
}

let cartList = document.getElementById("cart-list")
function turnOnCartList() {
    cartList.style.transition = "0.3s"
    cartList.style.display = "block"
}

function turnOffCartList() {
    cartList.style.transition = "0.3s"
    cartList.style.display = "none"
}

const background = document.querySelector('.company-profile')
const background1 = document.querySelector('.company-img')
function changeBG(gambar, target) {
    const timeline = document.querySelectorAll('.timeline')
    timeline.forEach(element => {
        element.style.backgroundColor = '#449DD1'
    });
    document.querySelector(target).style.backgroundColor = '#3943B7'
    background.style.backgroundImage = `url(${gambar})`
    background1.style.backgroundImage = `url(${gambar})`
}