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
console.log();
if(signInForm){
    signInForm.addEventListener("submit", async (e)=>{ 
        e.preventDefault();
        if(login.value && password.value){
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
            window.location.href=`https://medical-website-tawny.vercel.app?login=${login.value}&password=${password.value}&name=${username.value}&surname=${surname.value}`
        } else{
            formError.style.display = "block";
            formError.innerHTML = "Поля не могут быть пустыми"
        }
    })
}