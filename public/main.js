// gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".smooth-scroll"),
//     smooth: true
// })
// locoScroll.on("scroll", ScrollTrigger.update);

let openOrNot = 0
const burger = document.getElementById('burgerButton')
const header = document.getElementById('header')
burger.addEventListener('click', ()=>{
    if(openOrNot == 0){
        header.classList.add('open')
        burger.classList.add('active')
        openOrNot++
    }else{
        burger.classList.remove('active')
        header.classList.remove('open')
        openOrNot--
    }
})
const popup = document.querySelector(".popup");
const close = document.querySelector(".popup__close");
function openPopup(popup){
    popup.style.right = "20px";
}

function closeModal(popup){
    popup.style.right = "-300px";
}

close.addEventListener("click", ()=>{
    closeModal(popup);
})
if(localStorage.getItem("IsAlreadyLogined")){
    document.addEventListener("DOMContentLoaded", ()=>{
        setTimeout(()=>{openPopup(popup)}, 1000);
    })
}


