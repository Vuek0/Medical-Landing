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