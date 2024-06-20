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