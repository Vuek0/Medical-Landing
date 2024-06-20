// gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".smooth-scroll"),
//     smooth: true
// })
// locoScroll.on("scroll", ScrollTrigger.update);

const bg = document.querySelector("body::before");
// bg.style.display = "none"
const links = document.querySelectorAll("a");
console.log(links);
links.forEach(item => {
    linkAnimation(item);
})
function linkAnimation(link){
    const initial = link.textContent;
    if(initial){
        link.addEventListener("mouseover", (e)=>{
            const arr = [];
            link.style.textDecoration = "underline";
            for(let i = 0; i < link.textContent.length; i++){
                arr.push(link.textContent[i]);
            }
            const interval = setInterval(()=>{
                let newContent = "";
                let digits = [];
                for(let i = 0; i < arr.length;i++){
                    
                    const randomNumber = Math.floor(Math.random() * arr.length);

                    if (digits.includes(randomNumber)){
                        randomNumber = Math.floor(Math.random() * arr.length);
                    }
                    newContent+=arr[randomNumber];
                }
                link.textContent=newContent;
            }, 60)
            setTimeout(()=>{
                clearInterval(interval);
                link.textContent = initial;
            }, 180)
            
        })
        link.addEventListener("mouseout", ()=>{
            link.style.textDecoration = "none";
        })
    }
}

// console.log(bg);
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
    popup.style.opacity = "1";
    popup.style.top = "40vh";
    popup.style.right = "20px";
}

function closeModal(popup){
    popup.style.opacity = "0";
    popup.style.top = "-300px";
    popup.style.right = "-300px";
}

close.addEventListener("click", ()=>{
    closeModal(popup);
})
if(localStorage.getItem("isAlreadyLogined")){
    document.addEventListener("DOMContentLoaded", ()=>{
        setTimeout(()=>{openPopup(popup)}, 1000)
        setInterval(()=>{openPopup(popup)}, 30000);
    })
}

const signInForm = document.querySelector("#form--signin");
const formError = document.querySelector(".form--errors");
const inputs = document.querySelectorAll("input");  
const API_KEY = "asasdffsd";
let username, surname, login, password;
inputs.forEach(input => {
    switch (input.name) {
        case "name":
            username = input
            break;
        case "surname":
            surname = input;
        case "login":
            login = input;
        case "password":
            password = input;
        default:
            break;
    }
})
if(signInForm){
    signInForm.addEventListener("submit", async (e)=>{ 
        e.preventDefault();
        if(login.value && password.value){  
            localStorage.setItem('isAlreadyLogined', true);
            window.location.href=`https://medical-website-tawny.vercel.app?login=${login.value}&password=${password.value}`
        } else{
            formError.style.display = "block"
            formError.innerHTML = "Поля не могут быть пустыми"
        }
    })
}
const signUpForm = document.querySelector("#form--signup");

if(signUpForm){
    signUpForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        if(login.value && password.value && username.value && surname.value){
            localStorage.setItem('isAlreadyLogined', true);
            window.location.href=`https://medical-website-tawny.vercel.app?login=${login.value}&password=${password.value}&name=${username.value}&surname=${surname.value}`
        } else{
            formError.style.display = "block";
            formError.innerHTML = "Поля не могут быть пустыми"
        }
    })
}
const headerLinks = document.querySelectorAll('.menu__item a');
const pill = document.querySelector(".transition__image");
const html = document.querySelector("html");
function removePixels(value){
    return value.split('px')[0];

}

document.addEventListener("DOMContentLoaded", ()=>{
    const animation = localStorage.getItem("animation");
    const object = JSON.parse(animation)
    if(animation){ 
        html.style.overflowY = "hidden";
        console.log(object.rotate);
        console.log(object.translate);
        let rotateValue = object.rotate;
        let translateValue = object.translate;
        localStorage.removeItem('animation');
        // pill.style.display = "flex";
        // pill.style.transform = `translateX(${translateValue}px)`

        const anim = setInterval(()=>{
            translateValue+=23;
            rotateValue+=3;
            pill.style.transform = `translateX(${translateValue}px) rotate(${rotateValue}deg)`
            // pill.style.left = `${removePixels(pill.style.left) - 10}px`
        }, 15)
        setTimeout(()=>{
            pill.style.opacity = 0;
            pill.style.display = "none";
            pill.style.transform = "translateX(-2000px)";
            // pill.style.opacity = 1;
            html.style.overflowY = "auto";
            clearInterval(anim);            
        }, 1000)
    } else{
        pill.style.display = "none";
        pill.style.transform = "translateX(-2000px)"
    }
})

headerLinks.forEach((item) => {
    item.addEventListener("click", function animationHandler(e){
        e.preventDefault();
        popup.style.opacity = 0;

        item.removeEventListener("click", animationHandler);
        item.addEventListener("click", ()=>{
            e.preventDefault();
        })
        html.style.overflowY = "hidden";
        let rotateValue = 0;
        let translateValue = -1500;
        const href = item.getAttribute('href');
        // console.log(href);
        pill.style.display = "flex";
        pill.style.opacity = 1;
        const anim = setInterval(()=>{
            translateValue+=20;
            rotateValue+=3;
            pill.style.transform = `translateX(${translateValue}px) rotate(${rotateValue}deg)`
            // pill.style.left = `${removePixels(pill.style.left) - 10}px`
        }, 15)
        setTimeout(()=>{
            clearInterval(anim);
            localStorage.setItem("animation", JSON.stringify({
                translate: translateValue,
                rotate: rotateValue
            }));            
            window.location.href = href;
        }, 1160)
    })
})